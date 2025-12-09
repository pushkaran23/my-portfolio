import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SectionTitle({ title }: { title: ReactNode }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold"
    >
      <span className="text-neon">{title}</span>
    </motion.h1>
  );
}