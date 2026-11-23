import { Award, Palette, Headphones, Sparkles, Gift } from 'lucide-react';

/**
 * Community counter: total number of ads watched by the WHOLE community.
 * 0 = the balloon stays on the ground (teaser). Wire it to your backend later.
 */
export const COMMUNITY_ADS = 0;

/**
 * Milestones (placeholders, edit freely).
 * `ads` = community threshold. `chip` = colour of the icon chip.
 */
export const MILESTONES = [
  {
    ads: 10000,
    title: 'Lift-off',
    reward: '“Early Flyer” profile badge',
    desc: 'An exclusive badge for every member who was part of the community when the balloon first left the ground.',
    icon: Award,
    chip: 'amber',
  },
  {
    ads: 25000,
    title: 'Above the Clouds',
    reward: 'Two exclusive app themes',
    desc: 'The “Sunset” and “Aurora” colour themes unlock in the app for everyone, forever.',
    icon: Palette,
    chip: 'pink',
  },
  {
    ads: 50000,
    title: 'Floating Islands',
    reward: 'Community Listening Party',
    desc: 'A live in-app event where the community picks, listens to and rates an album together, plus a commemorative badge.',
    icon: Headphones,
    chip: 'sky',
  },
  {
    ads: 100000,
    title: 'Stratosphere',
    reward: '2 weeks of premium features',
    desc: 'Advanced stats, unlimited rankings and early access to upcoming features, unlocked for all members for 15 days.',
    icon: Sparkles,
    chip: 'purple',
  },
  {
    ads: 200000,
    title: 'Reach the Aurora',
    reward: 'The Great Aurora Giveaway',
    desc: 'Vinyls, concert tickets and merch drawn among all members, plus a legendary animated profile frame for everyone.',
    icon: Gift,
    chip: 'emerald',
  },
];

export const GOAL = MILESTONES[MILESTONES.length - 1].ads;
/** End of the path, just past the last milestone. */
export const FINAL_ADS = Math.round(GOAL * 1.08);

export const fmt = (n) => Math.round(n).toLocaleString('en-US');
