import React from "react";
import ComplianceClient from "./ComplianceClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance Services | Virrat",
  description: "Reduce business risk, protect sensitive information, and build processes that keep your organization ready for evolving regulatory and industry requirements.",
};

export default function CompliancePage() {
  return <ComplianceClient />;
}
