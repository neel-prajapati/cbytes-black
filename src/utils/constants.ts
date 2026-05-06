export const COLORS = {
  bg: '#000000',
  text: '#ffffff',
  accent: '#a855f7',
  secondary: '#6366f1',
} as const;

export const ANIMATION = {
  DURATION_SHORT: 0.3,
  DURATION_BASE: 0.6,
  DURATION_LONG: 1,
  EASING_DEFAULT: [0.4, 0, 0.2, 1],
} as const;

export const SERVICES = [
  { id: 1, title: 'UX/UI Design', icon: '✨' },
  { id: 2, title: 'Graphic Design', icon: '🎨' },
  { id: 3, title: 'Art Direction', icon: '🎭' },
  { id: 4, title: 'Marketing', icon: '📊' },
  { id: 5, title: 'Support', icon: '🛟' },
];

export const PROJECTS = [
  { id: 1, title: 'Project One', category: 'Web Design' },
  { id: 2, title: 'Project Two', category: 'Branding' },
  { id: 3, title: 'Project Three', category: 'Marketing' },
  { id: 4, title: 'Project Four', category: 'Web Design' },
  { id: 5, title: 'Project Five', category: 'Branding' },
  { id: 6, title: 'Project Six', category: 'Web Design' },
];
