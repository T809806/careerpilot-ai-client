import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import {

  getMyCareers,
  deleteCareer,
} from "../../services/career.service";
import toast from "react-hot-toast";

const ManageCareers = () => {
 const {
  data: careers = [],
  isLoading,
  isError,
  refetch,
} = useQuery<any[]>({
    queryKey: ["manageCareers"],
    queryFn: getMyCareers,
  });

  const handleDelete = async (id: string) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this career?"
  );

  if (!confirmDelete) {
    return;
  }

  try {
    const res = await deleteCareer(id);

    toast.success(res.message);

    refetch();

  } catch (error: any) {
    console.log(error);

   toast.error(
  error.response?.data?.message ||
  "Failed to delete career."
);
  }
};

  if (isLoading) {
    return (
      <div className="py-20 text-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-20 text-center text-red-500">
        Failed to load careers.
      </div>
    );
  }

  return (

    <section className="mx-auto max-w-7xl px-4 py-12">

      <h1 className="text-center text-4xl font-bold text-violet-700"> Manage Careers
      </h1>

      <p className="mt-3 text-center text-gray-500">
        View and manage all published careers.
      </p>

      <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-xl">

        <table className="table table-zebra w-full">

          <thead className="bg-violet-700 text-white">

            <tr>
              <th className="text-center">#</th>
              <th>Job Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>Salary</th>
              <th className="text-center">Action</th>
            </tr>

          </thead>

          <tbody>

            {careers.map((career: any, index: number) => (

              <tr
                key={career._id}
                className="hover:bg-violet-50"
              >

                <td className="text-center font-medium">
                  {index + 1}
                </td>

                <td className="font-semibold text-violet-700">
                  {career.title}
                </td>

                <td>{career.company}</td>

                <td>{career.location}</td>

                <td>৳ {career.salary}</td>

                <td className="space-x-2 text-center">

  <Link
    to={`/career/${career._id}`}
    className="inline-block rounded-lg bg-violet-600 px-4 py-2 text-white transition hover:bg-violet-700"
  >
    View
  </Link>

  <button
    onClick={() => handleDelete(career._id)}
    className="inline-block rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
  >
    Delete
  </button>

</td>

   </tr>

   ))}

   </tbody>

   </table>

   </div>

    </section>
    
  );
};

export default ManageCareers;