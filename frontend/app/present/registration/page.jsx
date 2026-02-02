"use client";

import { Suspense } from "react";
import RegistrationPageContent from "./content";

export default function RegistrationPage() {
  return (
    <Suspense>
      <RegistrationPageContent />
    </Suspense>
  );
}
