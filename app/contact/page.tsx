"use client";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="py-20">
      <SectionTitle title="Contact Me" />

      <p className="mt-6 text-gray-300">
        Feel free to reach out for collaborations or opportunities.
      </p>

      <ContactForm />
    </div>
  );
}
