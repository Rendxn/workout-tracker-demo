# Workout Tracker Demo

Built a TODO-like app to demonstrate the usage of Storybook and other testing and CI tools to do component testing and UI testing in general.

## Testing UIs

We will isolate components using Storybook. Write test cases where each state is reproduced using props and mock data. Finally, we will add it to our CI pipeline using GitHub Actions.

### Visual

Visual tests verify whether a component renders correctly given a set of props and state. They work by taking screenshots of every component and comparing them commit-to-commit identify changes. Chromatic is used to detect these changes in the CI cycle based on our stories.

### Composition

Components are interconnected, with data flowing between them. You can verify this integration by running visual tests on higher-level components and pages.

✅ Catch visual bugs and verify composition using Chromatic.

### Interaction

Interaction tests verify whether events are handled as intended. They start by rendering the component in isolation. Then simulate user behaviour such as click or input. Finally, verify that the state updated correctly.

🐙 Verify interactions with Jest and Testing Library.

### Accessibility

Accessibility tests uncover usability issues related to visual, hearing, mobility and other disabilities. Use automated tools such as Axe as the first line of QA to catch blatant accessibility violations. Then follow up with manual QA on real devices for trickier issues that require human attention.

♿️ Audit accessibility of your components using Axe.

### User flow

Even the most basic task requires a user to complete a sequence of steps across multiple components. This is yet another potential point of failure. Tools like Cypress and Playwright allow you to run tests against the complete application to verify such interactions.

🔄 Verify user flows by writing end-to-end tests with Cypress.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Next.js

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
