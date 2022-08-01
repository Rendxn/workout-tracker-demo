import { Story, Meta } from "@storybook/react";
import { rest } from "msw";
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
