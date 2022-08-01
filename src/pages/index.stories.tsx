import { Story, Meta } from "@storybook/react";
import { rest } from "msw";
import { within, userEvent, findByRole } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { Default as ExerciseListDefault } from "@/components/ExerciseList/ExerciseList.stories";
import Home from "./index.page";

export default {
  component: Home,
  title: "Pages/Home",
} as Meta;

const Template: Story = (args) => <Home {...args} />;

const api = (resource: string): string => {
  const API_URL = process.env.STORYBOOK_API_URL || "http://localhost:3000/";
  return new URL(resource, API_URL).toString();
};

export const Default: Story = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [
      rest.get(api("/api/exercises"), (req, res, ctx) => {
        return res(ctx.json(ExerciseListDefault.args?.exercises));
      }),
    ],
  },
};

export const Error = Template.bind({});
Error.parameters = {
  msw: {
    handlers: [
      rest.get(api("/api/exercises"), (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    ],
  },
};

export const CompleteExercise = Template.bind({});
CompleteExercise.parameters = Default.parameters;
CompleteExercise.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const exerciseName = "Exercise # 2";
  const itemToComplete = await canvas.findByTestId(exerciseName);
  const completeButton = await canvas.getByTestId(`${exerciseName} - Switch`);

  await userEvent.click(completeButton);

  await expect(itemToComplete).toHaveClass("bg-emerald-50");
  await expect(completeButton).toBeChecked();
};
