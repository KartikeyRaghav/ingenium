"use client";

import { Suspense } from "react";
import AuthTerminal from "./content";

export default function App() {
  return (
    <Suspense>
      <AuthTerminal />
    </Suspense>
  );
}
