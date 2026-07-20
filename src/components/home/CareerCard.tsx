type Career = {
  _id: string;
  title: string;
  company: string;
  location: string;
  salary: number;
  type: string;
  image: string;
  description: string;
};

type Props = {
  career: Career;
};

const CareerCard = ({ career }: Props) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img
        src={career.image}
        alt={career.title}
        className="h-48 w-full object-cover"
      />

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold text-[#5B3DF5]">
          {career.title}
        </h3>

        <p className="mt-1 text-sm font-medium text-gray-500">
          {career.company}
        </p>

        <p className="mt-3 line-clamp-2 text-sm text-gray-600">
          {career.description}
        </p>

        <div className="mt-4 space-y-2 text-sm">
          <p>📍 {career.location}</p>
          <p>💼 {career.type}</p>
          <p className="font-semibold text-[#D97706]">
            ৳ {career.salary}
          </p>
        </div>

        <button className="mt-auto rounded-xl bg-[#5B3DF5] py-2 text-white transition hover:bg-[#4A2FE0]">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CareerCard;