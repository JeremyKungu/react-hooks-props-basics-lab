import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio ? {props.bio}: null}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links        
      <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a>
      </h3>
      
    </div>
  );
}

export default About;
