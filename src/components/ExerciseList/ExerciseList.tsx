import ExerciseCard from "@/components/Exercise/Exercise";
import Skeleton from "react-loading-skeleton";
import ExerciseListSkeleton from "./ExerciseListSkeleton";
import { Exercise } from "@@/types";

export interface ExerciseListProps {
  title?: string;
  exercises: Exercise[] | undefined;
  loading?: boolean;
}

const ExerciseList: React.FC<ExerciseListProps> = ({
  title,
  exercises,
  loading,
}) => {
  return (
    <div className="mx-auto max-w-lg p-4">
      <h1 className="my-6 text-4xl font-bold text-slate-800">
        {loading ? <Skeleton /> : title || "Routine"}
      </h1>
      <div className="grid grid-cols-1 gap-2" role="list">
        {loading ? (
          <ExerciseListSkeleton />
        ) : (
          exercises?.map((exercise) => (
            <ExerciseCard
              key={exercise.name}
              name={exercise.name}
              sets={exercise.sets}
              reps={exercise.reps}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ExerciseList;
