import React from 'react';

function About(props) {
  return (
    <div id='about'>
        <div className="about-image">
            <img src={props.image} alt="" />
        </div>
        <div className="about-text">
            <h2> {props.title} </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi beatae repellat nesciunt voluptas magni consequuntur fugiat nihil quos. Eius recusandae in vitae, odit accusamus fuga deserunt eum ipsam sequi id fugit voluptates sapiente quam asperiores.</p>
            <button> {props.button} </button>
        </div>
    </div>
  )
}

export default About;