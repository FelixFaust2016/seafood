import "./App.css";
import { Banner, Button, ChefCards, Jumbotron, Navigation } from "./components";
import { Card } from "./components/Card";

const App = () => {
  return (
    <div>
      <Navigation />
      <Banner />

      <h2 style={{ textAlign: "center", padding: "100px 0px" }}>
        EXTRAORDINARY TASTE
        <br /> AND EXPERIENCE
      </h2>

      <Jumbotron img={"/seafood/jumbo1.jpg"}>
        <h3>WE MAKE SURE YOUR FOOD ARRIVE ON-TIME</h3>
        <p className="normal_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad
          maxime mollitia eaque accusamus accusantium odit quidem corrupti nam
          impedit.
        </p>
        <br />
        <Button label={"Read More"} />
      </Jumbotron>

      <Jumbotron direction={"row-reverse"} img={"/seafood/jumbo2.jpg"}>
        <h3>HIGH QUALITY FOOD AND MATERIAL</h3>
        <p className="normal_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad
          maxime mollitia eaque accusamus accusantium odit quidem corrupti nam
          impedit.
        </p>
        <br />
        <Button label={"Read More"} />
      </Jumbotron>

      <Jumbotron img={"/seafood/jumbo3.jpg"}>
        <h3>A VARIETY OF FOOD TO CHOOSE FROM</h3>
        <p className="normal_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad
          maxime mollitia eaque accusamus accusantium odit quidem corrupti nam
          impedit.
        </p>
        <br />
        <Button label={"Read More"} />
      </Jumbotron>

      <div className="card_flex_wrapper">
        <div className="general_container">
          <div className="card_header">
            <h2>EXTRAORDINARY DISHES</h2>
            <div className="btn_btn_container">
              {" "}
              <Button label={"See More"} />
            </div>
          </div>
          <div className="card_flex_container">
            <div className="card_size">
              <Card
                img={"/seafood/cards/bg1.png"}
                name={"Food-name"}
                info={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla"
                }
              />
            </div>
            <div className="card_size">
              <Card
                img={"/seafood/cards/bg2.png"}
                name={"Food-name"}
                info={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla"
                }
              />
            </div>
            <div className="card_size">
              <Card
                img={"/seafood/cards/bg3.png"}
                name={"Food-name"}
                info={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla"
                }
              />
            </div>
            <div className="card_size">
              <Card
                img={"/seafood/cards/bg4.png"}
                name={"Food-name"}
                info={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla"
                }
              />
            </div>
          </div>
        </div>
      </div>

      <h2 style={{ textAlign: "center", padding: "100px 0px 20px 0px" }}>
        MEET OUR CHEFS
      </h2>
      <p style={{ textAlign: "center" }} className="normal_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
      </p>

      <div style={{ paddingBottom: "50px" }} className="card_flex_wrapper">
        <div className="general_container">
          <div className="card_flex_container">
            <div className="card_size">
              <ChefCards img={"/seafood/chefs/1.jpg"} name={"name"} />
            </div>
            <div className="card_size">
              <ChefCards img={"/seafood/chefs/2.jpg"} name={"name"} />
            </div>
            <div className="card_size">
              <ChefCards img={"/seafood/chefs/3.jpg"} name={"name"} />
            </div>
            <div className="card_size">
              <ChefCards img={"/seafood/chefs/4.jpg"} name={"name"} />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "50px",
        }}
      >
        <Button label={"See More"} />
      </div>
    </div>
  );
};

export default App;
