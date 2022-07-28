import { Meta, Story } from "@storybook/react";
import Exercise, { ExerciseProps } from "./Exercise";

export default {
  component: Exercise,
  title: "Exercise",
  argTypes: {},
} as Meta<ExerciseProps>;

const Template: Story<ExerciseProps> = (args) => <Exercise {...args} />;

export const Default: Story<ExerciseProps> = Template.bind({});
Default.args = {
  name: "Exercise",
  sets: 4,
  reps: 10,
};
