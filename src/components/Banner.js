import { Button } from "./Button";

const Banner = () => {
  return (
    <div className="banner_wrapper">
      <div className="general_container">
        <div className="banner_container">
          <div className="banner_text">
            <h1>BEST FOOD FOR YOUR TASTE</h1>
            <p className="normal_text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est at
              ratione porro assumenda eius eligendi sit sequi eveniet.
            </p>
            <br />
            <Button label={"Get Started"} />
          </div>

          <div className="banner_imgs">
            <img src={"/seafood/bg1.png"} alt={""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Banner };
