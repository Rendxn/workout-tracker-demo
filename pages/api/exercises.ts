// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { faker } from "@faker-js/faker";

type Exercise = {
  name: string;
  sets?: number;
  reps?: number;
};

const generateRoutine = (numExercises = 6) => {
  return Array.from({ length: numExercises }, generateExercise);
};

const generateExercise = () => {
  return {
    name: faker.word.noun(),
    sets: faker.mersenne.rand(6, 1),
    reps: faker.mersenne.rand(21, 1),
  } as Exercise;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Exercise[]>
) {
  const routine = generateRoutine();

  setTimeout(() => {
    return res.status(200).json(routine);
  }, 500);
}
