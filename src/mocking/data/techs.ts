import { Tech } from '../../types/Tech';

export const techs: Tech[] = [
  {
    used: true,
    title: 'React',
    href: 'https://react.dev/',
    description: 'Main framework engine.',
  },
  {
    used: true,
    title: 'Typescript',
    href: 'https://www.typescriptlang.org/',
    description:
      'TypeScript is a typesafety addon to JavaScript, also allows for great tooltips for developers in a team.',
  },
  {
    used: true,
    title: 'Mock service worker',
    href: 'https://mswjs.io/',
    description: `Intercepting and mocking requests and respones.
      This is an amazing tool for a frontend dev to test how components react to unplanned responses such as a HTTP/500.
      It also allows devs to work on frontend before the backend is finished or while it is offline.`,
  },
  {
    used: true,
    title: 'Tailwind',
    href: 'https://tailwindcss.com/',
    description: `CSS framework for styling frontends by applying classes.
      Bonus; you learn the underlying CSS, which is fantastic transferable knowledge.`,
  },
  {
    used: true,
    title: 'React router',
    href: 'https://reactrouter.com/',
    description:
      'Handling the nav menu links and mounting the correct components based on the URL route.',
  },
  {
    used: true,
    title: 'Vite',
    href: 'https://vitejs.dev/',
    description:
      'Frontend dev environment. Fast. Lovely dev experience coming from large projects using other tooling.',
  },
  {
    used: true,
    title: 'Eslint',
    href: 'https://eslint.org/',
    description:
      'Code linting with basic rulesets and extended with plugins from tailwind and prettier. Consistent formatting and basic sanity checks for all team members, less commit diffs, helpful hints.',
  },
  {
    used: true,
    title: 'Zustand',
    href: 'https://github.com/pmndrs/zustand',
    description:
      'I found I rarely needed everything in Redux and have come to enjoy using this tiny replacement for my state management needs. It stores the entries of the list you are currently reading.',
  },

  {
    used: false,
    title: 'Storybook',
    href: 'https://storybook.js.org/',
    description:
      'Building and previewing UI components in isolation to allow fast iteration and viewing component states quickly.',
  },
  {
    used: false,
    title: 'Redux',
    href: 'https://react-redux.js.org/',
    description:
      'State management, most would say the standard to which most others are aspiring.',
  },
  {
    used: false,
    title: 'Unity',
    href: 'https://unity.com/',
    description: '3D engine for games and applications.',
  },
  {
    used: false,
    title: 'YouTrack',
    href: 'https://www.jetbrains.com/youtrack/',
    description: 'Project management tool, a sort of Jira.',
  },
  {
    used: true,
    title: 'GitHub',
    href: 'https://www.github.com/',
    description: 'Git repository host. Hosting this very portfolio.',
  },
  {
    used: false,
    title: 'Figma',
    href: 'https://www.figma.com/',
    description: 'Online design collaboration tool.',
  },
];
