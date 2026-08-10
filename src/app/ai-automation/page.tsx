import { Metadata } from "next";
import AiAutomationClient from "./AiAutomationClient";

export const metadata: Metadata = {
  title: "AI + Automation Services | Virrat Global",
  description:
    "Automate repetitive work, connect your systems and build intelligent AI workflows with Virrat Global's custom AI and automation solutions.",
};

export default function AiAutomationPage() {
  return <AiAutomationClient />;
}
