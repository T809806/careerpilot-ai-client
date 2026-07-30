import { useState } from "react";
import { getAIRecommendation } from "../../services/career.service";
import toast from "react-hot-toast";

const AIRecommendation = () => {
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [interests, setInterests] = useState("");
  const [loading, setLoading] = useState(false);
const [recommendation, setRecommendation] = useState("");

const handleRecommendation = async () => {
  if (!skills || !experience || !interests) {
    toast.error("Please fill in all fields.");
    return;
  }
  
  try {
    setLoading(true);

    const res = await getAIRecommendation({
      skills,
      experience,
      interests,
    });

    setRecommendation(res.recommendation);
    toast.success("Recommendation Generated");

  } catch (error: any) {
  console.log(error);

  toast.error(
    error?.response?.data?.message ||
    "Failed to generate recommendation."
  );
}
  
   finally {
    setLoading(false);
  }
};

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-center text-4xl font-bold text-violet-700"> AI Career Recommendation </h1>

      <p className="mt-3 text-center text-gray-500">
        Get a personalized career suggestion based on your skills and interests.
      </p>

      <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-white p-8 shadow-xl">

        <div className="space-y-6">

          <div>
            <label className="mb-2 block font-semibold">
              Skills
            </label>

            <textarea
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              rows={3}
              placeholder="React, TypeScript, Tailwind CSS"
              className="w-full rounded-xl border p-4 outline-none focus:border-violet-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Experience
            </label>

            <input
              type="text"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Fresher"
              className="w-full rounded-xl border p-4 outline-none focus:border-violet-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Interests
            </label>

            <input
              type="text"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="Frontend Development"
              className="w-full rounded-xl border p-4 outline-none focus:border-violet-600"
            />
          </div>

   <button
  onClick={handleRecommendation}
  className="w-full rounded-xl bg-violet-700 py-4 font-semibold text-white transition hover:text-orange-600"
>
  {loading ? "Generating..." : "Get AI Recommendation"}
  
</button>

        </div>

      </div>

      <div className="mt-10 rounded-3xl bg-violet-50 p-8 shadow">

        <h2 className="mb-4 text-2xl font-bold text-violet-700">
          AI Recommendation
        </h2>

        {recommendation ? (
  <div className="whitespace-pre-line rounded-xl bg-white p-6 leading-8 shadow">
    {recommendation}
  </div>
) : (
  <p className="text-gray-500">
    Your recommendation will appear here.
  </p>
)}

      </div>

    </section>
  );
};

export default AIRecommendation;