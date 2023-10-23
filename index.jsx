import React from "react";
import ReactDOM from "react-dom/client";
// import Menu from "./components/Menu/index"
// import Star from "./components/Star"
import Button from "./components/Button/Button";
import Banner from "./components/Banner/index";
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
        {messages.map((message) => (
          <Banner theme={message.status}>
            <Banner.Title>{message.title}</Banner.Title>
            <Banner.Message>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam.
            </Banner.Message>
          </Banner>
        ))}
      </section>{" "}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
