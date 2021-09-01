import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Banner, Button, Jumbotron, Navigation } from "./components";
import "./App.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Navigation />
      <Banner />

      <h2 id="about" style={{ textAlign: "center", padding: "100px 0px" }}>
        EXTRAORDINARY TASTE
        <br /> AND EXPERIENCE
      </h2>

      <Jumbotron img={"/seafood/jumbo1.jpg"}>
        <h3>QUALITY SEAFOOD</h3>
        <p className="normal_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad
          maxime mollitia eaque accusamus accusantium odit quidem corrupti nam
          impedit.
        </p>
        <br />
        <Button label={"Read More"} />
      </Jumbotron>

      <Jumbotron direction={"row-reverse"} img={"/seafood/jumbo2.jpg"}>
        <h3>AN AMAZING TEAM OF FISHERMEN</h3>
        <p className="normal_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad
          maxime mollitia eaque accusamus accusantium odit quidem corrupti nam
          impedit.
        </p>
        <br />
        <Button label={"Read More"} />
      </Jumbotron>

      <Jumbotron img={"/seafood/jumbo3.jpg"}>
        <h3>A VARIETY OF SEAFOOD TO CHOOSE FROM</h3>
        <p className="normal_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad
          maxime mollitia eaque accusamus accusantium odit quidem corrupti nam
          impedit.
        </p>
        <br />
        <Button label={"Read More"} />
      </Jumbotron>

      <div id="join" className="join_container">
        <div className="join_text">
          <h1>JOIN OUR TEAM</h1>
          <p className="normal_text">
            We treat our employees like family. So if you have the skills,
            energy and desire for a challenging career or rewarding seasonal
            work, we’d love to welcome you to our team.
          </p>
          <div style={{ marginTop: "20px" }}>
            <Button label={"Get Started"} />
          </div>
        </div>
      </div>

      <div id="contact" className="contact_us">
        <h1 style={{ textAlign: "center" }}>Contact Us</h1>
        <div className="general_container">
          <div className="form_container">
            <div>
              <div>
                {" "}
                <input autoComplete="off" type="text" placeholder="Name" />
              </div>
              <div>
                <input autoComplete="off" type="text" placeholder="Email" />
              </div>
              <div>
                <textarea type="text" placeholder="Message" rows="6" />
              </div>
              <Button label="Send" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
