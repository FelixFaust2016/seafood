import { Button } from "./Button";

const Navigation = () => {
  return (
    <nav className="navigation_wrapper">
      <div className="general_container">
        <div className="navigation_container">
          <h2>LOGO</h2>
          <div style={{ flex: 1 }} />
          <p>ABOUT</p>
          <p>MENU</p>
          <p>CONTACT</p>
          <Button label={"Get Started"} />
        </div>
      </div>
    </nav>
  );
};

export { Navigation };
