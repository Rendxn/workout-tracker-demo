import { Exercise } from "@@/types";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
const api = (resource: string): string => {
  return new URL(resource, API_URL).toString();
};

export function useExercises() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(api("/api/exercises"))
      .then((res) => res.json())
      .then((data) => {
        setExercises(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return {
    exercises,
    loading,
    error,
  };
}
