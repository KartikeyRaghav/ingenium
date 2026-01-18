export default function ArcReactorClock({ time }) {
  return (
    <div className="arc-reactor">
      <div className="ring outer" />
      <div className="ring segments" />
      <div className="ring inner" />

      <div className="core">
        <span className="time">{time}</span>
      </div>
    </div>
  );
}
