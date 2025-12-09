"use client";

import SectionTitle from "@/components/SectionTitle";

export default function About() {
  return (
    <div className="py-20">
      <SectionTitle title="About Me" />

      <p className="mt-6 text-gray-300 leading-relaxed text-lg">
        I'm <span className="text-neon">Pushkaran</span>, a passionate 
        <span className="text-purpleGlow"> Blockchain Developer </span> 
        and Web3 enthusiast.  
        I specialize in building secure Smart Contracts, DApps, and modern 
        full-stack applications.
      </p>

      <h2 className="text-2xl font-semibold mt-10">🚀 Skills & Tech</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {[
          "Solidity",
          "Next.js",
          "Hardhat",
          "Ethers.js",
          "React",
          "TailwindCSS",
          "JavaScript",
          "TypeScript",
          "Git & GitHub",
          "Web3.js",
        ].map((skill) => (
          <div
            key={skill}
            className="p-4 border border-gray-800 rounded-xl hover:bg-gray-900 text-center"
          >
            {skill}
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-10">📘 My Journey</h2>

      <p className="mt-4 text-gray-300">
        I started my coding journey as a curious beginner and slowly moved into
        blockchain technology. Today, I enjoy building decentralized 
        applications and learning new technologies every day.
      </p>
    </div>
  );
}
