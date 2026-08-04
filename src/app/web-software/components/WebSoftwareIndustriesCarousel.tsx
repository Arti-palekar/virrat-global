"use client";

import React from "react";
import { CoverflowCarousel, CoverflowSlide } from "@/components/ui/coverflow-carousel";

const R2 = "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/stock-images";
const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=640&h=640&fit=crop&q=70&auto=format`;

const SLIDES: CoverflowSlide[] = [
  {
    src: `${R2}/767d99bb371a54d0d36751e8cecae43c.jpg`,
    alt: "Diver silhouetted inside a sunset seascape shaped like a profile",
    title: "Tidewater",
    subtitle: "Long Player",
    meta: [
      { label: "Year", value: "2019" },
      { label: "Producer", value: "Ada Ferrow" },
      { label: "Length", value: "3:42" },
    ],
  },
  {
    src: `${R2}/821d815affa6496c39cbdeeec7a84603.jpg`,
    alt: "Double-exposure portrait blended with a city skyline at dusk",
    title: "Nightshift",
    subtitle: "Long Player",
    meta: [
      { label: "Year", value: "2021" },
      { label: "Producer", value: "Kell Mora" },
      { label: "Length", value: "4:08" },
    ],
  },
  {
    src: `${R2}/937438c560ada1c83317f2c11b3454b0.jpg`,
    alt: "Motion-blurred side-profile portrait against a deep orange backdrop",
    title: "Overexposed",
    subtitle: "Single",
    meta: [
      { label: "Year", value: "2018" },
      { label: "Producer", value: "Juno Vale" },
      { label: "Length", value: "2:57" },
    ],
  },
  {
    src: `${R2}/98f89cb9994f5c382ab964062c4039db.jpg`,
    alt: "Figure holding a racket that dissolves into a swirling cloud at dusk",
    title: "Slow Bloom",
    subtitle: "EP",
    meta: [
      { label: "Year", value: "2022" },
      { label: "Producer", value: "Rue Alcott" },
      { label: "Length", value: "3:15" },
    ],
  },
  {
    src: `${R2}/ddcbee38be8b7274e19e132d7ab35b53.jpg`,
    alt: "Hand gesture with a cutout of a bird flying through the fingers",
    title: "Open Palm",
    subtitle: "Single",
    meta: [
      { label: "Year", value: "2020" },
      { label: "Producer", value: "Ada Ferrow" },
      { label: "Length", value: "3:01" },
    ],
  },
  {
    src: UNSPLASH("1470071459604-3b5ec3a7fe05"),
    alt: "Fog rolling through a forested valley at first light",
    title: "Low Country",
    subtitle: "Long Player",
    meta: [
      { label: "Year", value: "2017" },
      { label: "Producer", value: "Sim Oyo" },
      { label: "Length", value: "5:20" },
    ],
  },
  {
    src: UNSPLASH("1500534314209-a25ddb2bd429"),
    alt: "Sunlit dune ridge under a hard blue sky",
    title: "Dry Season",
    subtitle: "EP",
    meta: [
      { label: "Year", value: "2016" },
      { label: "Producer", value: "Juno Vale" },
      { label: "Length", value: "2:44" },
    ],
  },
  {
    src: UNSPLASH("1441974231531-c6227db76b6e"),
    alt: "Sunlight breaking through a dense stand of trees",
    title: "Understory",
    subtitle: "Single",
    meta: [
      { label: "Year", value: "2023" },
      { label: "Producer", value: "Kell Mora" },
      { label: "Length", value: "3:38" },
    ],
  },
  {
    src: UNSPLASH("1493246507139-91e8fad9978e"),
    alt: "Pastel abstract of coloured smoke against a pale ground",
    title: "Paper Lantern",
    subtitle: "Single",
    meta: [
      { label: "Year", value: "2021" },
      { label: "Producer", value: "Rue Alcott" },
      { label: "Length", value: "2:19" },
    ],
  },
  {
    src: UNSPLASH("1501785888041-af3ef285b470"),
    alt: "Mountain lake mirroring a ridgeline at dusk",
    title: "Still Water",
    subtitle: "Long Player",
    meta: [
      { label: "Year", value: "2015" },
      { label: "Producer", value: "Ada Ferrow" },
      { label: "Length", value: "4:51" },
    ],
  },
  {
    src: UNSPLASH("1465101162946-4377e57745c3"),
    alt: "Long exposure of light trails over a dark landscape",
    title: "Third Rail",
    subtitle: "EP",
    meta: [
      { label: "Year", value: "2024" },
      { label: "Producer", value: "Sim Oyo" },
      { label: "Length", value: "3:07" },
    ],
  },
  {
    src: UNSPLASH("1519681393784-d120267933ba"),
    alt: "Snow-covered peak lit by a cold morning sun",
    title: "Undertow",
    subtitle: "Single",
    meta: [
      { label: "Year", value: "2020" },
      { label: "Producer", value: "Juno Vale" },
      { label: "Length", value: "3:29" },
    ],
  },
];

export function WebSoftwareIndustriesCarousel() {
  return (
    <section className="w-full bg-white text-[#111111] py-24 border-b border-[#ECECEC] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span
            style={{
              display: "block",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#999999",
              marginBottom: "14px",
            }}
          >
            INDUSTRIES WE SERVE
          </span>
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(26px, 3.2vw, 42px)",
              fontWeight: 400,
              color: "#222222",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Domain Expertise Across{" "}
            <span style={{ fontWeight: 700 }} className="text-[#D62020]">
              Global Sectors
            </span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#666666",
              marginTop: "16px",
              lineHeight: 1.6,
            }}
          >
            We deliver tailored web applications and software solutions designed to solve regulatory, operational, and scale challenges in every major industry.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative mt-8">
          <CoverflowCarousel
            slides={SLIDES}
            showCaption
            showPagination={false}
            showNavigation={false}
            cardWidth="clamp(200px, 28vw, 300px)"
            className="py-4"
          />
        </div>
      </div>
    </section>
  );
}

export default WebSoftwareIndustriesCarousel;
