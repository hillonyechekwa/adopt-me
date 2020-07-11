import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement(
    "div", //element
    { id: "something-different" }, //attributes or props
    [
      React.createElement("h1", {}, "Adopt Me!"), //content/children
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havenese",
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "bird",
        breed: "Cockateil",
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "Cat",
        breed: "Mixed",
      }),
    ]
  );
};

render(React.createElement(App), document.getElementById("root"));
