// React and types
import React, { FC, ReactElement, useState } from "react";
import { SectionProps } from "../Section";

// Style
import "./style.scss";

// Function
import isInList from "../../functions/isInList";

// Component
import SectionWrapper from "./SectionWrapper";

interface SVGsObject {
  [key: string]: SVGSVGElement;
}

const SideNav: FC = (props) => {
  const minWidth = 768; // Min width for the side nav to be shown
  // State of the nav visibility
  const [navVisible, setNavVisible] = useState(window.innerWidth > minWidth);

  // Event listener to change the nav visibility on window resize
  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    if (width > minWidth) {
      setNavVisible(true);
    } else {
      setNavVisible(false);
    }
  });

  const navItems: SVGsObject = {}; // An object with all the refs from the SVGs on the nav
  const sectionsBeingObserved: string[] = []; // A list of the ids from the sections being observed
  let sectionsIntersecting: number = 0; // The number of sections that are intersecting at the moment

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      const sectionId = entry.target.id;

      if (entry.isIntersecting) {
        sectionsIntersecting++;

        // Activating its corresponding nav item
        const activeNavItem = navItems[sectionId];
        activeNavItem.classList.add("active");

        // Deactivating all other nav items
        Object.values(navItems).forEach((item) => {
          if (item !== activeNavItem) item.classList.remove("active");
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
        item.classList.remove("active");
      });
    }
  };

  const observerOptions: IntersectionObserverInit = {
    root: null,
    threshold: 0,
    rootMargin: "-49% 0px",
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // A list of the section elements useful to observe and create a nav item for each of them
  const sectionList: ReactElement<SectionProps>[] = [];

  // Each valid ReactElement is added to the sectionList
  React.Children.forEach(props.children, (child) => {
    if (!React.isValidElement(child)) return;
    sectionList.push(child);
  });

  return (
    <>
      {/* Only renders the navigation when the nav should be visible */}
      {navVisible && (
        <aside className="side-nav">
          <nav>
            <ul>
              {sectionList.map((section, index) => (
                <li key={index} className="side-nav__item">
                  <a href={"#" + section.props.id}>
                    <svg
                      ref={(SVGRef) => {
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
