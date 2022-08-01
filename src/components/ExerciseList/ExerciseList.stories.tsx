import { Story, Meta } from "@storybook/react";
import ExerciseList, { ExerciseListProps } from "./ExerciseList";
import Exercise from "../Exercise/Exercise.stories";

export default {
  component: ExerciseList,
  title: "Components/ExerciseList",
  argTypes: {
    ...Exercise.argTypes,
  },
} as Meta<ExerciseListProps>;

const Template: Story<ExerciseListProps> = (args) => <ExerciseList {...args} />;

export const Default: Story<ExerciseListProps> = Template.bind({});
Default.args = {
  exercises: [
    {
      name: "Exercise # 1",
    },
    {
      name: "Exercise # 2",
    },
    {
      name: "Exercise # 3",
    },
  ],
};

export const Playground: Story<ExerciseListProps> = Template.bind({});
Playground.args = {
  title: "Playground Routine",
  exercises: [
    {
      name: "Exercise # 1",
      sets: 4,
      reps: 10,
    },
    {
      name: "Exercise # 2",
      sets: 4,
      reps: 10,
    },
    {
      name: "Exercise # 3",
      sets: 4,
      reps: 10,
    },
  ],
  loading: false,
};

export const Loading: Story<ExerciseListProps> = Template.bind({});
Loading.args = {
  loading: true,
};
