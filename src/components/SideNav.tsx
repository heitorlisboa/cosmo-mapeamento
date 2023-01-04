import {
  Children,
  cloneElement,
  createRef,
  type FC,
  isValidElement,
  type PropsWithChildren,
  type ReactElement,
  type RefObject,
} from 'react';

import { useIntersectionObserver } from '../hooks/use-intersection-observer';

export type SideNavSectionProps = {
  /** An ID used to reference the section by an anchor */
  id: string;
  /** A name used to label its corresponding nav item */
  name: string;
};

type SideNavSectionPropsWithRef = SideNavSectionProps & {
  ref: RefObject<HTMLDivElement>;
};

type SideNavProps = PropsWithChildren<{}>;

export const SideNav: FC<SideNavProps> = ({ children }) => {
  /** A list of the section elements used to observe and create a nav item for
  each of them */
  const sectionList: ReactElement<SideNavSectionPropsWithRef>[] = [];

  // Validation the section as React elements
  Children.forEach(children, (child) => {
    if (isValidElement<SideNavSectionPropsWithRef>(child))
      sectionList.push(child);
  });

  const refs: Record<
    string,
    { svgRef: RefObject<SVGSVGElement>; sectionRef: RefObject<HTMLDivElement> }
  > = {};

  sectionList.forEach((section) => {
    refs[section.props.id] = {
      svgRef: createRef<SVGSVGElement>(),
      sectionRef: createRef<HTMLDivElement>(),
    };
  });

  /** Function that will be executed for each intersection observer entry */
  function executeForEachEntry(entry: IntersectionObserverEntry) {
    const sectionId = entry.target.id;
    const correspondingNavItem = refs[sectionId].svgRef.current;

    if (entry.isIntersecting) {
      // Activating its corresponding nav item
      correspondingNavItem?.setAttribute('data-active', 'true');
    } else {
      // Deactivating the nav item that just stopped intersecting
      correspondingNavItem?.setAttribute('data-active', 'false');
    }
  }

  const entryRefs = Object.values(refs).map(({ sectionRef }) => sectionRef);

  useIntersectionObserver({
    executeForEachEntry,
    entryRefs,
  });

  return (
    <>
      <aside className="fixed top-1/2 right-12 z-10 hidden -translate-y-1/2 md:block">
        <nav>
          <ul className="flex flex-col justify-center gap-10">
            {sectionList.map(
              ({ props: { id: sectionId, name: sectionName } }) => (
                <li key={sectionId}>
                  <a
                    className="group"
                    href={`#${sectionId}`}
                    title={sectionName}
                  >
                    <span className="sr-only">{sectionName}</span>
                    <svg
                      className="aspect-square w-3 fill-transparent stroke-primary-900 stroke-[4] transition-colors data-[active='true']:fill-primary-900 group-hocus:fill-primary-900"
                      viewBox="0 0 24 24"
                      aria-hidden
                      data-active={false}
                      ref={refs[sectionId].svgRef}
                    >
                      <circle cx={12} cy={12} r={10}></circle>
                    </svg>
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </aside>
      {/* Rendering each section with its corresponding ref */}
      {sectionList.map((section, index) =>
        cloneElement(section, {
          key: index,
          ref: refs[section.props.id].sectionRef,
        })
      )}
    </>
  );
};
