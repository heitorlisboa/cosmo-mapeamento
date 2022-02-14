// React and types
import React, { FC, ReactElement, useEffect, useState } from "react";
import { SectionProps } from "../Section";

// Style
import styles from "./SideNav.module.scss";

// Utilities
import isInList from "../../utils/isInList";

// Component
import SectionWrapper from "./SectionWrapper";

interface SVGsObject {
  [key: string]: SVGSVGElement;
}

const SideNav: FC = (props) => {
  const minWidth = 768; // Min width for the side nav to be shown
  // State of the nav visibility
  const [navVisible, setNavVisible] = useState<boolean>(false);
  // Intersection observer
  const [observer, setObserver] = useState<IntersectionObserver>();

  // An object with all the refs from the SVGs on the nav
  const [navItems, _setNavItems] = useState<SVGsObject>({});
  // A list of the ids from the sections being observed
  const sectionsBeingObserved: string[] = [];
  // The number of sections that are intersecting at the moment
  let sectionsIntersecting: number = 0;

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      const sectionId = entry.target.id;

      if (entry.isIntersecting) {
        sectionsIntersecting++;

        // Activating its corresponding nav item
        const activeNavItem = navItems[sectionId];
        activeNavItem.classList.add(styles.active);

        // Deactivating all other nav items
        Object.values(navItems).forEach((item) => {
          if (item !== activeNavItem) item.classList.remove(styles.active);
        });
      }

      if (!isInList(sectionId, sectionsBeingObserved)) {
        sectionsBeingObserved.push(sectionId);
      } else if (!entry.isIntersecting) {
        // If the section id is already listed and it has stopped intersecting,
        // then decrement 1 from the sections intersecting
        sectionsIntersecting--;
      }
    });

    // If there are no sections intersecting, then deactivate all nav items
    if (!sectionsIntersecting) {
      Object.values(navItems).forEach((item) => {
        item.classList.remove(styles.active);
      });
    }
  };

  const observerOptions: IntersectionObserverInit = {
    root: null,
    threshold: 0,
    rootMargin: "-49% 0px",
  };

  useEffect(() => {
    setNavVisible(window.innerWidth > minWidth);

    // Event listener to change the nav visibility on window resize
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      if (width > minWidth) {
        setNavVisible(true);
      } else {
        setNavVisible(false);
      }
    });

    setObserver(new IntersectionObserver(observerCallback, observerOptions));
  }, []);

  // A list of the section elements useful to observe and create a nav item for each of them
  const sectionList: ReactElement<SectionProps>[] = [];

  // Each valid ReactElement is added to the sectionList
  React.Children.forEach(props.children, (child) => {
    if (!React.isValidElement(child)) return;
    sectionList.push(child);
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
                      ref={(SVGRef) => {
                        // HACK
                        /* If you use the state setter, for an unknown reason,
                        the setter keeps being called infinitely, exceeding the
                        max number of calls. And if you don't use a React state
                        variable, the components that depends on its value,
                        simply don't get it. This is a problem that only happens
                        when using Next.js, because with pure React it works
                        just fine */
                        if (SVGRef) navItems[section.props.id] = SVGRef;
                        return SVGRef;
                      }}
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
      {sectionList.map((section, index) => (
        <SectionWrapper key={index} navVisible={navVisible} observer={observer}>
          {section}
        </SectionWrapper>
      ))}
    </>
  );
};

export default SideNav;
