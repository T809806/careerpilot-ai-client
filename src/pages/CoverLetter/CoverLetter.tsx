import { useState } from "react";
import { generateCoverLetter } from "../../services/career.service";
import toast from "react-hot-toast";

const CoverLetter = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true);

      const res = await generateCoverLetter({
        jobTitle,
        skills,
        experience,
      });

      setCoverLetter(res.coverLetter);

    } catch (error) {
      console.log(error);
      toast.error("Failed to generate cover letter.");
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-center text-4xl font-bold text-violet-700">
        AI Cover Letter Generator
      </h1>

      <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-8 shadow-xl">

        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="mb-4 w-full rounded-xl border p-4"
        />

        <textarea
          placeholder="Skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          rows={3}
          className="mb-4 w-full rounded-xl border p-4"
        />

        <input
          type="text"
          placeholder="Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="mb-6 w-full rounded-xl border p-4"
        />

        <button
          onClick={handleGenerate}
          className="w-full rounded-xl bg-violet-700 py-4 font-semibold text-white hover:text-orange-600"
        >
          {loading ? "Generating..." : "Generate Cover Letter"}
        </button>

      </div>

      <div className="mt-10 rounded-3xl bg-violet-50 p-8 shadow">
        <h2 className="mb-4 text-2xl font-bold text-violet-700">
          Generated Cover Letter
        </h2>

        {coverLetter ? (
          <div className="whitespace-pre-line rounded-xl bg-white p-6 shadow">
            {coverLetter}
          </div>
        ) : (
          <p className="text-gray-500">
            Your cover letter will appear here.
          </p>
        )}
      </div>
    </section>
  );
};

export default CoverLetter;