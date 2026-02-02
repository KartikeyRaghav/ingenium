import pool from "../db.js";

export const registerTeam = async (req, res) => {
  const client = await pool.connect();

  try {
    const { teamName, psName, participants } = req.body;

    /* ---------- VALIDATION ---------- */
    if (!teamName || !psName || !participants) {
      console.log("Hi 1", teamName, psName, participants);
      return res.status(400).json({ message: "All fields required" });
    }

    if (!Array.isArray(participants)) {
      console.log("Hi 2");
      return res.status(400).json({ message: "Participants must be an array" });
    }

    if (participants.length < 1 || participants.length > 6) {
      console.log("Hi 3");
      return res
        .status(400)
        .json({ message: "Team must have 1 to 6 participants" });
    }

    for (const p of participants) {
      console.log("Hi 4", p.name, p.email, p.mobile);
      if (!p.name || !p.email || !p.mobile) {
        return res.status(400).json({
          message: "Each participant must have name, email and mobile",
        });
      }
    }

    const team = await pool.query(`SELECT * FROM teams WHERE team_name = $1`, [
      teamName,
    ]);

    if (team.rowCount > 0) {
      return res.status(400).json({
        message: "A team with this name already exists",
      });
    }

    for (const p of participants) {
      const exits = await pool.query(
        `SELECT * FROM participants WHERE email = $1`,
        [p.email],
      );
      if (exits.rowCount > 0)
        return res.status(400).json({
          message: "A participant with this email already exists",
        });
    }

    /* ---------- TRANSACTION START ---------- */
    await client.query("BEGIN");

    /* ---------- CREATE TEAM ---------- */
    const teamResult = await client.query(
      `INSERT INTO teams (team_name, ps_name)
       VALUES ($1, $2)
       RETURNING id`,
      [teamName, psName],
    );

    const teamId = teamResult.rows[0].id;

    /* ---------- INSERT PARTICIPANTS ---------- */
    const participantQuery = `INSERT INTO participants (team_id, name, email, mobile)
       VALUES ($1, $2, $3, $4)`;

    for (const p of participants) {
      await client.query(participantQuery, [teamId, p.name, p.email, p.mobile]);
    }

    /* ---------- COMMIT ---------- */
    await client.query("COMMIT");

    res.status(201).json({
      message: "Registration successful",
      teamId,
    });
  } catch (error) {
    await client.query("ROLLBACK");

    console.error(error);

    // Friendly error messages
    if (error.code === "23505") {
      return res.status(400).json({
        message: "Team name or participant email already exists",
      });
    }

    if (error.message.includes("maximum of 6 participants")) {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: "Internal server error" });
  } finally {
    client.release();
  }
};

export const getTeamByParticipantEmail = async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    /* ---------- FIND TEAM ---------- */
    const teamResult = await pool.query(
      `
      SELECT t.id, t.team_name, t.ps_name
      FROM teams t
      JOIN participants p ON p.team_id = t.id
      WHERE p.email = $1
      `,
      [email],
    );

    if (teamResult.rows.length === 0) {
      return res.status(404).json({ message: "Participant not found" });
    }

    const team = teamResult.rows[0];

    /* ---------- GET ALL PARTICIPANTS ---------- */
    const participantsResult = await pool.query(
      `
      SELECT name, email, mobile
      FROM participants
      WHERE team_id = $1
      ORDER BY id
      `,
      [team.id],
    );

    res.status(200).json({
      team_name: team.team_name,
      ps_name: team.ps_name,
      participants: participantsResult.rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
