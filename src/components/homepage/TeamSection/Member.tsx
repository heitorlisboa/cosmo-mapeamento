import type { FC, PropsWithChildren } from 'react';

import { TextBox } from '../../TextBox';

type MemberProps = PropsWithChildren<{
  img: {
    url: string;
    alt: string;
  };
}>;

export const Member: FC<MemberProps> = ({ children, img }) => (
  <article className="mx-auto grid max-w-4xl grid-rows-[max-content_1fr] items-center justify-items-center gap-4 md:grid-flow-col md:grid-rows-none md:justify-center">
    <img
      className="aspect-square w-44 rounded-full border-4 border-solid border-white object-cover"
      src={img.url}
      alt={img.alt}
      width={176}
      height={176}
      loading="lazy"
    />
    <TextBox className="max-w-xl text-center md:max-w-none">{children}</TextBox>
  </article>
);
