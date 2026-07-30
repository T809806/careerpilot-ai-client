import { useQuery } from "@tanstack/react-query";
import { getMyApplications } from "../../services/career.service";

const MyApplications = () => {
  const {
  data: applications = [],
  isLoading,
  isError,
} = useQuery<any[]>({
  queryKey: ["myApplications"],
  queryFn: getMyApplications,
});
  if (isLoading) {
    return (
      <div className="text-center mt-20 text-xl">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center mt-20 text-red-500">
        Failed to load applications.
      </div>
    );
  }
return (
  <section className="min-h-screen bg-gray-50 py-12">

    <div className="mx-auto max-w-7xl px-5">

      {/* Heading */}

      <div className="mb-10 text-center">

        <h1 className="text-5xl font-bold text-violet-700">
          My Applications
        </h1>

        <p className="mt-3 text-lg text-gray-500">
          Track all the jobs you have applied for.
        </p>

      </div>

      {applications.length === 0 ? (

        <div className="rounded-3xl bg-white p-16 text-center shadow-xl">

          <h2 className="text-3xl font-bold text-violet-700">
            No Applications Yet
          </h2>

          <p className="mt-3 text-gray-500">
            Apply for your first job to see it here.
          </p>

        </div>

      ) : (

        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">

          <table className="min-w-full">

            <thead className="bg-violet-700 text-white">

              <tr>

                <th className="px-6 py-4 text-left">#</th>

                <th className="px-6 py-4 text-left">
                  Job Title
                </th>

                <th className="px-6 py-4 text-left">
                  Company
                </th>

                <th className="px-6 py-4 text-left">
                  Email
                </th>

                <th className="px-6 py-4 text-left">
                  Applied Date
                </th>

              </tr>

            </thead>

            <tbody>

              {applications.map((item: any, index: number) => (

                <tr
                  key={item._id}
                  className="border-b transition hover:bg-violet-50"
                >

                  <td className="px-6 py-5 font-semibold">
                    {index + 1}
                  </td>

                  <td className="px-6 py-5 font-semibold text-violet-700">
                    {item.title}
                  </td>

                  <td className="px-6 py-5">
                    {item.company}
                  </td>

                  <td className="px-6 py-5 whitespace-nowrap text-gray-600">
                    {item.email}
                  </td>

                  <td className="px-6 py-5">
                    {new Date(item.appliedAt).toLocaleDateString(
                      "en-GB"
                    )}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>

  </section>
);
  
};

export default MyApplications;