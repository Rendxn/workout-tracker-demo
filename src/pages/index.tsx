import type { NextPage } from "next";
import ExerciseList from "@/components/ExerciseList/ExerciseList";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-50 h-screen">
      <ExerciseList title="Routine" />
    </div>
  );
};

export default Home;
