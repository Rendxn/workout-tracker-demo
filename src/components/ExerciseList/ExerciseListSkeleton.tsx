import Skeleton from "react-loading-skeleton";

interface ExerciseListSkeletonProps {}

const ExerciseListSkeleton: React.FC<ExerciseListSkeletonProps> = () => {
  return (
    <>
      <div className="flex flex-col bg-white rounded-sm shadow-sm px-6 py-4">
        <h2 className="font-bold text-xl text-slate-700">
          <Skeleton width="10ch" />
        </h2>
        <div className="text-slate-500 text-sm tabular-nums">
          <Skeleton width="3ch" />
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-sm shadow-sm px-6 py-4">
        <h2 className="font-bold text-xl text-slate-700">
          <Skeleton width="10ch" />
        </h2>
        <div className="text-slate-500 text-sm tabular-nums">
          <Skeleton width="3ch" />
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-sm shadow-sm px-6 py-4">
        <h2 className="font-bold text-xl text-slate-700">
          <Skeleton width="10ch" />
        </h2>
        <div className="text-slate-500 text-sm tabular-nums">
          <Skeleton width="3ch" />
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-sm shadow-sm px-6 py-4">
        <h2 className="font-bold text-xl text-slate-700">
          <Skeleton width="10ch" />
        </h2>
        <div className="text-slate-500 text-sm tabular-nums">
          <Skeleton width="3ch" />
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-sm shadow-sm px-6 py-4">
        <h2 className="font-bold text-xl text-slate-700">
          <Skeleton width="10ch" />
        </h2>
        <div className="text-slate-500 text-sm tabular-nums">
          <Skeleton width="3ch" />
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-sm shadow-sm px-6 py-4">
        <h2 className="font-bold text-xl text-slate-700">
          <Skeleton width="10ch" />
        </h2>
        <div className="text-slate-500 text-sm tabular-nums">
          <Skeleton width="3ch" />
        </div>
      </div>
    </>
  );
};

export default ExerciseListSkeleton;
