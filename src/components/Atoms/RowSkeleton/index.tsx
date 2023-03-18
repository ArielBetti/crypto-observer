import { TRowSkeletonProps } from "./types";

const RowSkeleton = ({ rows = 1, isLoading }: TRowSkeletonProps) => {
  if (!isLoading) return null;

  const rowLines = Array.from(Array(rows).keys());

  return (
    <div className="flex flex-col w-full gap-2">
      {rowLines.map(() => (
        <div className="animate-fadeIn flex gap-5 px-5 items-center justify-start h-16 bg-zinc-800 animate-pulse w-full rounded-sm">
          <div>
            <div className="object-cover bg-zinc-700 rounded-full animate-pulse h-10 w-10" />
          </div>
          <div className="flex flex-col w-full gap-2">
            <div className="w-full h-2 rounded-sm bg-zinc-700" />
            <div className="w-full h-3 rounded-sm bg-zinc-700" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RowSkeleton;
