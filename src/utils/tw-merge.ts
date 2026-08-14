import { extendTailwindMerge, validators } from 'tailwind-merge';

export const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'bg-image': [{ 'bg-srcset': [validators.isArbitraryValue] }],
    },
  },
});
