const SkeletonCard = () => {

  return (

    <div className="animate-pulse rounded-2xl border bg-white p-5 shadow">
      <div className="h-6 w-3/4 rounded bg-gray-300"> </div>

      <div className="mt-4 h-4 w-1/2 rounded bg-gray-300"> </div>

      <div className="mt-2 h-4 w-2/3 rounded bg-gray-300"> </div>

      <div className="mt-6 h-10 rounded-xl bg-gray-300"> </div>
    </div>
  );
};

export default SkeletonCard;