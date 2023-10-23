import React from "react";
import ReactDOM from "react-dom/client";
// import Menu from "./components/Menu/index"
// import Star from "./components/Star"
import Button from "./components/Button/Button";
import Banner from "./components/Banner/index";
import Card from "./components/Card/index";
import Testimonial from "./components/Testimonial/index";
// import Banner from "./components/Banner/Banner";
// import BannerMessage from "./components/Banner/BannerMessage";
// import BannerTitle from "./components/Banner/BannerTitle";

function App() {
  const colors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];
  const statuses = ["success", "warning"];
  const messages = [
    {
      status: "success",
      title: "Congratulations",
      message: "Lorem ipsum",
    },
    {
      status: "warning",
      title: "Attention",
      message: "Lorem ipsum",
    },
  ];

  return (
    <>
      <section className="button-section">
        <h1 className="button-title">Buttons</h1>
        <div className="button-content">
          <div className="button-square">
            <h1>Square</h1>
            {colors.map((color) => (
              <div className="button-components">
                <Button variant="square" color={color}>
                  Button
                </Button>
              </div>
            ))}
          </div>
          <div className="button-pill">
            <h1>Pill</h1>
            {colors.map((color) => (
              <div>
                <Button variant="pill" color={color}>
                  Button
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="banner-section">
        <h2>Multi Line</h2>
        {messages.map((message) => (
          <Banner theme={message.status}>
            <Banner.Title>{message.title}</Banner.Title>
            <Banner.Message>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam.
            </Banner.Message>
          </Banner>
        ))}
        <h2>Single Line</h2>
        {messages.map((message) => (
          <Banner theme={message.status}>
            <Banner.Title>{message.title}</Banner.Title>
          </Banner>
        ))}
      </section>

      <section className="card-section">
        <Card icon="" iconBackgroundColor="">
          <Card.Title>Easy Deployment</Card.Title>
          <Card.Message>
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
            magna sit morbi lobortis.
          </Card.Message>
        </Card>
      </section>

      <section className="testimonial-section">
        <Testimonial name="May Anderson" title="Workcation, CTO">
          <Testimonial.Message>
            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
            in laborum sed rerum et corporis.”
          </Testimonial.Message>
        </Testimonial>
      </section>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
