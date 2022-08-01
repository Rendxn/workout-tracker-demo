import "../src/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { initialize, mswDecorator } from "msw-storybook-addon";

initialize();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "slate-50",
    values: [
      { name: "slate-50", value: "#f8fafc" },
      { name: "slate-900", value: "#0f172a" },
    ],
  },
};

export const decorators = [mswDecorator];
