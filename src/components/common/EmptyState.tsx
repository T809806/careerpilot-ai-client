type EmptyStateProps = {
  message: string;
};

const EmptyState = ({ message }: EmptyStateProps) => {
  return (
    <div className="rounded-2xl border border-dashed p-10 text-center text-gray-500">
      {message}
    </div>
  );
};

export default EmptyState;