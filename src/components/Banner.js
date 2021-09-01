import { Button } from "./Button";

const Banner = () => {
  return (
    <div className="banner_wrapper">
      <div className="general_container">
        <div className="banner_container">
          <div data-aos="fade-down" className="banner_text">
            <h1>BEST SEAFOOD YOU CAN GET</h1>
            <p className="normal_text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est at
              ratione porro assumenda eius eligendi sit sequi eveniet.
            </p>
            <br />
            <div>
              <Button label={"Get Started"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Banner };
