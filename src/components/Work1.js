import React from "react";

const Work1 = props => (
  <div>
    <h1>A Thing I've Done</h1>
    <p>This page is for the item with id of {props.match.params.id}</p>
  </div>
);

export default Work1;
