import type { NextPage } from "next";
import ExerciseList from "@/components/ExerciseList/ExerciseList";
import { useExercises } from "@/hooks/useExercises";

const Home: NextPage = () => {
  const { exercises, loading, error } = useExercises();

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="container mx-auto">Something went wrong 😔</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <ExerciseList title="Routine" exercises={exercises} loading={loading} />
    </div>
  );
};

export default Home;
