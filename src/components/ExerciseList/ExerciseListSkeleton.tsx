import Skeleton from "react-loading-skeleton";

interface ExerciseListSkeletonProps {}

const ExerciseListSkeleton: React.FC<ExerciseListSkeletonProps> = () => {
  return (
    <>
      <div className="flex flex-col rounded-sm bg-white px-6 py-4 shadow-sm">
        <h2 className="text-xl font-bold text-slate-700">
          <Skeleton width="10ch" />
        </h2>
        <div className="text-sm tabular-nums text-slate-500">
          <Skeleton width="3ch" />
        </div>
      </div>
      <div className="flex flex-col rounded-sm bg-white px-6 py-4 shadow-sm">
        <h2 className="text-xl font-bold text-slate-700">
          <Skeleton width="10ch" />
        </h2>
        <div className="text-sm tabular-nums text-slate-500">
          <Skeleton width="3ch" />
        </div>
      </div>
      <div className="flex flex-col rounded-sm bg-white px-6 py-4 shadow-sm">
        <h2 className="text-xl font-bold text-slate-700">
          <Skeleton width="10ch" />
        </h2>
        <div className="text-sm tabular-nums text-slate-500">
          <Skeleton width="3ch" />
        </div>
      </div>
      <div className="flex flex-col rounded-sm bg-white px-6 py-4 shadow-sm">
        <h2 className="text-xl font-bold text-slate-700">
          <Skeleton width="10ch" />
        </h2>
        <div className="text-sm tabular-nums text-slate-500">
          <Skeleton width="3ch" />
        </div>
      </div>
      <div className="flex flex-col rounded-sm bg-white px-6 py-4 shadow-sm">
        <h2 className="text-xl font-bold text-slate-700">
          <Skeleton width="10ch" />
        </h2>
        <div className="text-sm tabular-nums text-slate-500">
          <Skeleton width="3ch" />
        </div>
      </div>
      <div className="flex flex-col rounded-sm bg-white px-6 py-4 shadow-sm">
        <h2 className="text-xl font-bold text-slate-700">
          <Skeleton width="10ch" />
        </h2>
        <div className="text-sm tabular-nums text-slate-500">
          <Skeleton width="3ch" />
        </div>
      </div>
    </>
  );
};

export default ExerciseListSkeleton;
