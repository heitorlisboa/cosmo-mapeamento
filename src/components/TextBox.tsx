import type { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

type TextBoxProps = PropsWithChildren<{ className?: string }>;

export const TextBox: FC<TextBoxProps> = ({ children, className }) => (
  <div
    className={clsx(
      className,
      'bg-[hsla(0_0%_100%/0.85)] px-8 py-4 text-primary-700 where:mx-auto where:my-16 where:max-w-4xl'
    )}
  >
    {children}
  </div>
);
