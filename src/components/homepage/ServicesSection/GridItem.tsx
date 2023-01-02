import type { FC } from 'react';

type GridItemProps = {
  title: string;
  content: string;
  imgUrl: string;
};

export const GridItem: FC<GridItemProps> = ({ title, content, imgUrl }) => (
  <li className="flex basis-40 flex-col items-center gap-2 text-center text-neutral-600 md:basis-64 md:gap-0">
    <strong className="font-secondary text-base font-bold leading-[1.2] tracking-tight md:text-title-sm">
      {title}
    </strong>
    <p className="hidden text-[0.8rem] font-[350] md:block">{content}</p>
    <img
      className="mt-auto w-10 hue-rotate-[50deg] md:w-auto"
      src={imgUrl}
      alt=""
    />
  </li>
);
