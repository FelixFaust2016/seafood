import { animateScroll as scroll, Link } from "react-scroll";

import { Button } from "./Button";

const Navigation = () => {
  return (
    <nav className="navigation_wrapper">
      <div className="general_container">
        <div className="navigation_container">
          <h2
            style={{ cursor: "pointer" }}
            onClick={() => scroll.scrollToTop()}
          >
            LOGO
          </h2>
          <div style={{ flex: 1 }} />
          <Link to="about">
            <p>ABOUT</p>
          </Link>
          <Link to="join">
            <p>JOIN TEAM</p>
          </Link>
          <Link to="contact">
            <p>CONTACT US</p>
          </Link>
          <div>
            <Button label={"Get Started"} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navigation };
