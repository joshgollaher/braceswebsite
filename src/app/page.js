import Image from "next/image";
import { WavyBackground } from "@/components/WavyBackground";

export default function Home() {
  return (
    <>
      <WavyBackground>
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Josh & Braden Braces LLC
        </p>
        <p className="text-base md:text-lg mt-4 text-gray-300 font-normal inter-var text-center">
          Coming Q1 2025
        </p>
      </WavyBackground>
    </>
  );
}
