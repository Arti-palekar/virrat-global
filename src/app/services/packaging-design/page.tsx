import React from "react";
import { Metadata } from "next";
import PackagingClient from "./PackagingClient";

export const metadata: Metadata = {
  title: "Packaging Design Services | Custom Product Boxes & Labels – Virrat Global",
  description: "Create packaging that commands attention and makes your brand impossible to ignore. Virrat Global delivers premium product boxes, bags, cans, cosmetic tubes, labels, dielines, and print specifications.",
};

export default function Page() {
  return <PackagingClient />;
}
