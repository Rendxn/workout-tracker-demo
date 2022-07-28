import ExerciseCard from "@/components/Exercise/Exercise";
import Skeleton from "react-loading-skeleton";
import { useExercises } from "@/hooks/useExercises";
import ExerciseListSkeleton from "./ExerciseListSkeleton";

interface ExerciseListProps {
  title?: string;
}

const ExerciseList: React.FC<ExerciseListProps> = ({ title }) => {
  const { exercises, loading } = useExercises();

  return (
    <div className="mx-auto max-w-lg p-4">
      <h1 className="font-bold text-4xl my-6 text-slate-800">
        {title || <Skeleton />}
      </h1>
      <div className="grid grid-cols-1 gap-2">
        {loading && <ExerciseListSkeleton />}
        {exercises?.map((exercise) => (
          <ExerciseCard
            key={exercise.name}
            name={exercise.name}
            sets={exercise.sets}
            reps={exercise.reps}
          />
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;
