import { Exercise } from "@/types";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export function useExercises() {
  const [exercises, setExercises] = useState<Exercise[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/exercises`)
      .then((res) => res.json())
      .then((data) => {
        setExercises(data);
        setLoading(false);
      });
  }, []);
  return {
    exercises,
    loading,
  };
}
