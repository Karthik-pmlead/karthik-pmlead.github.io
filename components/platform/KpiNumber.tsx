"use client";

import { useEffect, useState } from "react";

export default function KpiNumber({ value }: { value: string }) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const num = parseInt(value.replace(/\D/g, "")) || 0;
    let current = 0;

    const step = Math.max(1, Math.floor(num / 30));

    const interval = setInterval(() => {
      current += step;

      if (current >= num) {
        setDisplay(value);
        clearInterval(interval);
      } else {
        setDisplay(String(current) + value.replace(/[0-9]/g, ""));
      }
    }, 20);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{display}</span>;
}
