import React from "react";
import { Metadata } from "next";
import MerchandiseClient from "./MerchandiseClient";

export const metadata: Metadata = {
  title: "Brand Merchandise & Custom Corporate Gifting | Virrat Global",
  description: "Elevate your brand presence with premium corporate merchandise, employee welcome kits, custom apparel, and branded promotional gifts designed and fulfilled by Virrat Global.",
};

export default function Page() {
  return <MerchandiseClient />;
}
