import axios from "axios";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddCareer = () => {
  const navigate = useNavigate();

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;

const title = (
  form.elements.namedItem("title") as HTMLInputElement
).value;

const company = (
  form.elements.namedItem("company") as HTMLInputElement
).value;

const location = (
  form.elements.namedItem("location") as HTMLInputElement
).value;

const salary = Number(
  (
    form.elements.namedItem("salary") as HTMLInputElement
  ).value
);

const type = (
  form.elements.namedItem("type") as HTMLSelectElement
).value;

const image = (
  form.elements.namedItem("image") as HTMLInputElement
).value;

const description = (
  form.elements.namedItem("description") as HTMLTextAreaElement
).value;

const career = {
  title,
  company,
  location,
  salary,
  type,
  image,
  description,
};

    try {
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL}/careers`,
    career,
    {
      withCredentials: true,
    }
  );

  toast.success(res.data.message);

  form.reset();

  navigate("/explore");

} catch (error: any) {
  console.log(error);

  toast.error(
    error.response?.data?.message ||
    "Failed to add career."
  );
}
     
  };

  return (

    <section className="min-h-screen bg-gray-50 py-12">

       <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl">
       <h1 className="text-center text-4xl font-bold text-violet-700"> Add Career </h1>
       <p className="mt-3 text-center text-gray-500"> Publish a new career opportunity </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >

          <input
            name="title"
            placeholder="Job Title"
            className="w-full rounded-xl border p-3"
            required
          />

          <input
            name="company"
            placeholder="Company Name"
            className="w-full rounded-xl border p-3"
            required
          />

          <input
            name="location"
            placeholder="Location"
            className="w-full rounded-xl border p-3"
            required
          />

          <input
            name="salary"
            type="number"
            placeholder="Salary"
            className="w-full rounded-xl border p-3"
            required
          />

          <select
            name="type"
            className="w-full rounded-xl border p-3"
          >
            <option> Full-Time </option>
            <option> Part-Time </option>
            <option> Remote </option>
            <option> Internship </option>

          </select>

          <input
            name="image"
            placeholder="Image URL"
            className="w-full rounded-xl border p-3"
            required
          />

          <textarea
            name="description"
            rows={5}
            placeholder="Job Description"
            className="w-full rounded-xl border p-3"
            required
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-violet-700 py-3 font-semibold text-white transition hover:text-orange-600"
          >
            Add Career
          </button>

        </form>

      </div>

    </section>
  );
};

export default AddCareer;