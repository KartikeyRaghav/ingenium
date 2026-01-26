"use client";

import { Suspense } from "react";
import MainPage from "./MainPage";

export default function App() {
  return (
    <Suspense>
      <MainPage />
    </Suspense>
  );
}
