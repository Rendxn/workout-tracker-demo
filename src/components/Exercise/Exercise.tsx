import { Exercise } from "@@/types";
import { useState } from "react";
import { Switch } from "@headlessui/react";
export interface ExerciseProps extends Exercise {
  completed?: boolean;
}

const ExerciseCard: React.FC<ExerciseProps> = (props) => {
  const [complete, setComplete] = useState<boolean>(false);

  return (
    <div
      className={`${
        complete ? "bg-emerald-50" : "bg-white"
      } flex items-center justify-between gap-2 rounded-sm px-6 py-4 shadow-sm transition-colors`}
    >
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-slate-700">{props.name}</h2>
        <div className="text-xs tabular-nums text-slate-500">
          {props.sets && <span>{props.sets}</span>}
          {props.reps && (
            <>
              <span>&times;</span>
              <span>{props.reps}</span>
            </>
          )}
        </div>
      </div>
      <div>
        <Switch
          checked={complete}
          onChange={setComplete}
          className={`${
            complete ? "bg-emerald-300" : "bg-slate-200"
          } relative inline-flex h-6 w-11 items-center rounded-full shadow-inner`}
        >
          <span className="sr-only">Complete exercise</span>
          <span
            aria-hidden="true"
            className={`${
              complete
                ? "translate-x-6 bg-emerald-800"
                : "translate-x-1 bg-slate-700"
            }
            pointer-events-none inline-block h-4 w-4 rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
    </div>
  );
};

export default ExerciseCard;
