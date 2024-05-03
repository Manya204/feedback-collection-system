import React from "react";

export default function FeatureCard(props) {
  return (
    <>
          <div class="feature col">
            <h2>{props.title}</h2>
            <h6>{props.desc}</h6>
          </div>
    </>
  );
}
