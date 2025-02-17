import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The pepperoni Pizza",
      description: "some dope pizza yo",
    }),
    React.createElement(Pizza, {
      name: "Brazillian pizza",
      description: "the best pizza in the world",
    }),
    React.createElement(Pizza, {
      name: "Chicken Pizza",
      description: "a pizza with chicken",
    }),
    React.createElement(Pizza, {
      name: "Calabreza Pizza",
      description: "a pizza with calabreza",
    }),
    React.createElement(Pizza, {
      name: "Steak Pizza",
      description: "a pizza with picanha",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
