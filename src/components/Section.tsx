import { forwardRef, type HTMLAttributes } from 'react';
import clsx from 'clsx';

import type { SideNavSectionProps } from './SideNav';

type SectionProps = HTMLAttributes<HTMLDivElement> & SideNavSectionProps;

const DISPLAY_NAME = 'Section';
export const Section = forwardRef<HTMLDivElement, SectionProps>(
  /* `name` prop is from `SideNavChildProps` and is not used here and also
  should not be passed to `div` */
  ({ children, className, name, ...props }, ref) => (
    <div className={clsx(className, 'no-collapse')} {...props} ref={ref}>
      {children}
    </div>
  )
);

Section.displayName = DISPLAY_NAME;
