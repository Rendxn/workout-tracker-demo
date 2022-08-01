import { Meta, Story } from "@storybook/react";
import Exercise, { ExerciseProps } from "./Exercise";

export default {
  component: Exercise,
  title: "Components/Exercise",
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div role="list">
          <Story />
        </div>
      );
    },
  ],
} as Meta<ExerciseProps>;

const Template: Story<ExerciseProps> = (args) => <Exercise {...args} />;

export const Default: Story<ExerciseProps> = Template.bind({});
Default.args = {
  name: "Default Exercise",
};

export const Playground: Story<ExerciseProps> = Template.bind({});
Playground.args = {
  name: "Playground Exercise",
  sets: 4,
  reps: 10,
};

export const LongTitle: Story<ExerciseProps> = Template.bind({});
LongTitle.args = {
  name: "Long title: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius commodi, tenetur odio necessitatibus mollitia qui, amet nisi iure, magnam molestias repudiandae natus quis ratione perferendis sint earum dolor vel aperiam.",
  sets: 4,
  reps: 10,
};
