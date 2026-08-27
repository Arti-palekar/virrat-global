"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BounceCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={cn(
        "group relative min-h-[300px] md:min-h-[400px] cursor-pointer overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm p-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const CardTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <h3 className={cn("text-3xl font-bold text-[#111111] text-left", className)}>
      {children}
    </h3>
  );
};
