import { Exercise } from "@/types";

export interface ExerciseProps extends Exercise {}

const ExerciseCard: React.FC<ExerciseProps> = (props) => {
  return (
    <div className="flex flex-col bg-white rounded-sm shadow-sm px-6 py-4">
      <h2 className="font-bold text-xl text-slate-700">{props.name}</h2>
      <div className="text-slate-500 text-sm tabular-nums">
        {props.sets && <span>{props.sets}</span>}
        {props.reps && (
          <>
            <span>&times;</span>
            <span>{props.reps}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default ExerciseCard;
