import SectionTitle from "@/components/SectionTitle";

export default function Resume() {
  return (
    <div className="py-20">
      <SectionTitle title="Resume" />

      <p className="mt-6 text-gray-300">
        You can download my resume below.
      </p>

      <a
        href="/resume.pdf"
        download
        className="inline-block mt-6 px-6 py-3 bg-neon text-black font-semibold rounded-lg hover:opacity-80"
      >
        Download Resume
      </a>
    </div>
  );
}
