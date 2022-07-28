import type { NextPage } from "next";
import ExerciseList from "@/components/ExerciseList/ExerciseList";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-slate-50">
      <ExerciseList title="Routine" />
    </div>
  );
};

export default Home;
