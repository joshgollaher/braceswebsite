"use client";
import Image from "next/image";
import { WavyBackground } from "@/components/WavyBackground";
import { GoogleGeminiEffect } from "@/components/GeminiEffect";
import { useState, useEffect } from "react";
import { useTransform, useMotionValue } from 'framer-motion'

export default function Home() {

  const [forwards, setForwards] = useState(true);
  const progress = useMotionValue(0);
  const maxProgress = 1;
  const rate = 0.04;

  const length = useMotionValue(0.2);

  const off1 = useMotionValue(Math.random() / 3);
  const off2 = useMotionValue(Math.random() / 3);
  const off3 = useMotionValue(Math.random() / 3);
  const off4 = useMotionValue(Math.random() / 3);
  const off5 = useMotionValue(Math.random() / 3);

  useEffect(() => {

    function update() {
      progress.set(progress.get() + (1 / 60 * rate * (forwards ? 1 : -1)));
      requestAnimationFrame(update);
    }

    update();

  }, []);

  return (
    <div
      className="h-screen bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
    >
      <GoogleGeminiEffect
        pathLengths={[progress, progress, progress, progress, progress]}
        pathOffsets={[
          progress, progress, progress, progress, progress
        ]} title="Josh & Braden Braces LLC" description="Coming Q1 2025">
      </GoogleGeminiEffect>
    </div>
  );
}