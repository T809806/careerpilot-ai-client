type EmptyStateProps = {
  message: string;
};

const EmptyState = ({ message }: EmptyStateProps) => {

  return (

    <div className="rounded-2xl border border-dashed border-violet-300 bg-violet-50 p-10 text-center">
      <h2 className="text-2xl font-bold text-violet-700"> No Data Found </h2>

      <p className="mt-3 text-gray-600">
        {message}
      </p>
    </div>
  );
  
};

export default EmptyState;