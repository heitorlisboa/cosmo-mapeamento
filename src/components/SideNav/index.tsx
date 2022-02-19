// React, React hooks and types
import React, { cloneElement, createRef, useMemo } from "react";
import { useScrollAwareNav } from "../../hooks/ScrollAwareNav";
import type { FC, ReactElement, RefObject } from "react";
import type { SectionProps } from "../Section";

// Styles
import styles from "./SideNav.module.scss";

interface PairOfRefs {
  SVGRef: RefObject<SVGSVGElement>;
  sectionRef: RefObject<HTMLDivElement>;
}

const SideNav: FC = function SideNavComponent({ children }) {
  /* A list of the section elements useful to observe and create a nav item for
  each of them */
  const sectionList: ReactElement<SectionProps>[] = [];

  // Each valid ReactElement is added to the sectionList
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    sectionList.push(child);
  });

  const refs: Record<string, PairOfRefs> = useMemo(() => ({}), []);

  sectionList.forEach((section) => {
    refs[section.props.id] = {
      SVGRef: createRef<SVGSVGElement>(),
      sectionRef: createRef<HTMLDivElement>(),
    };
  });

  // Function that will be executed for each intersection observer entry
  function executeForEachEntry(entry: IntersectionObserverEntry) {
    const sectionId = entry.target.id;

    if (entry.isIntersecting) {
      // Activating its corresponding nav item
      const activeNavItem = refs[sectionId].SVGRef.current;
      if (activeNavItem) activeNavItem.classList.add(styles.active);
    } else {
      // Deactivating the nav item that just stopped intersecting
      const inactiveNavItem = refs[sectionId].SVGRef.current;
      if (inactiveNavItem) inactiveNavItem.classList.remove(styles.active);
    }
  }

  // Min width for the side nav to be shown
  const minWidth = 768;

  const entriesRefs = useMemo(
    () => Object.values(refs).map((pairOfRefs) => pairOfRefs.sectionRef),
    [refs]
  );

  const { navVisible } = useScrollAwareNav({
    executeForEachEntry,
    minWidth,
    entriesRefs,
  });

  return (
    <>
      {/* Only renders the navigation when the it should be visible */}
      {navVisible && (
        <aside className={styles.sideNav}>
          <nav>
            <ul className={styles.list}>
              {sectionList.map((section, index) => (
                <li key={index}>
                  <a href={"#" + section.props.id}>
                    <svg
                      ref={refs[section.props.id].SVGRef}
                      viewBox="0 0 24 24"
                    >
                      <circle cx={12} cy={12} r={10}></circle>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}
      {sectionList.map((section, index) => {
        const sectionWithRef = cloneElement(section, {
          key: index,
          ref: refs[section.props.id].sectionRef,
        });

        return sectionWithRef;
      })}
    </>
  );
};

export default SideNav;
