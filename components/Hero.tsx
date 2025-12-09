"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold"
      >
        Hi, I'm <span className="text-neon">Pushkaran</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-4 text-xl text-gray-300"
      >
        Blockchain Developer • Web3 Smart-Contract Engineer
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8"
      >
        <Link
          href="/projects"
          className="px-6 py-3 bg-neon text-black font-semibold rounded-lg hover:opacity-80"
        >
          View My Work
        </Link>
      </motion.div>
    </section>
  );
}
