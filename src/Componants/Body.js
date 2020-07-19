import React from "react";
import RecipeReviewCard from "./Card";
import a from "./pics/a.png";
import b from "./pics/b.png";
import c from "./pics/c.png";
import d from "./pics/d.png";
import u from "./pics/u.png";
import useWebAnimations from "@wellyshen/use-web-animations";
import ".././App.css";
function Body() {

  const { ref } = useWebAnimations({
    keyframes: [{ transform: "translate(0px,20px )" }],
    timing: {
      duration: 2000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });



  return (
    <div>
      <div>
        <div className="left1">
          <h1>
            CORTEX <br></br>
            COPYWRITER<br></br>
            <br></br>
          </h1>
          <h2>
            Enhance your communications with <br></br>psychology-based
            copywriting and UX<br></br> writing
          </h2>
        </div>
        <div className="right1" >
         <div ref={ref} >
          <img src={a}></img> 
          </div>
        </div>
      </div>

      {/* --------------2--------------- */}
      <div>
        <div className="left2">
          <img src={b}></img>
        </div>
        <div className="right2">
          <h1>UX Writing</h1>
          <br></br>

          <p>
            I develop clear and useful text in product interfaces to help users
            <br></br>
            reach a specific goal, whether that's completing a form or tapping a
            <br></br>
            button. This includes every type of content from on-screen help
            <br></br>
            systems, user onboarding and in-app messages to push notifications
            and
            <br></br>
            tooltips.
          </p>
          <ul>
            <li> Microcopy</li>
            <li>Taxonomy & Labeling</li>
            <li>Chatbots</li>
            <li>User Research</li>
            <li>Content Style Guide</li>
            <li>User Testing</li>
            <li>Design Principles</li>
            <li>Prototype</li>
          </ul>
        </div>
      </div>
      {/* ----------3------------------ */}
      <div>
        <div className="left3">
          <h1>Website Copywriting</h1>

          <p>
            {" "}
            Your website is a dialogue with your audience. I capture the essence
            of <br></br>
            your business and communicate it clearly. Carefully considered
            writing<br></br>
            and SEO best practices allow me to craft the perfect user journey
            <br></br>
            online. Let me draw the map that guides users every step of the way
            from<br></br>
            discovery, to consideration, to conversion.
            <ul>
              <li> Information Architecture</li>
              <li>Wireframes</li>
              <li>Competitor Analysis</li>
              <li> On-page SEO</li>
              <li>Off-page SEO</li>
              <li>USP/UVP</li>
              <li>Landing Page</li>
              <li> Sales Letter</li>
            </ul>
          </p>
        </div>

        <div className="right3">
          {" "}
          <img src={c}></img>{" "}
        </div>
      </div>
      {/* ----------------4------------- */}
      <div>
        <div className="left4">
          {" "}
          <img src={d}></img>
        </div>
        <div className="right4">
          <h1>Content Writing</h1>
          <br></br>

          <p>
            Give your business a competitive edge with powerful content that can
            <br></br>
            be targeted to any segment of your audience. No matter how large or
            <br></br>
            complex your project, my custom-built solutions including articles,
            <br></br>
            eDMs, and case studies will help you implement a plan that maximizes
            <br></br>
            your business’s online exposure.<br></br>
          </p>
          <ul>
            <li> Headlines & Taglines</li>
            <li>Content Strategy</li>
            <li>Blogs & Articles</li>
            <li>Social Media Content</li>
            <li>Video Scripts</li>
            <li>eDMs & Newsletters</li>
            <li>Case Studies</li>
            <li>Whitepapers</li>
          </ul>
        </div>
      </div>
      {/* ----------About------------ */}
      <div className="center">
        <div className="left5">
          <img src={u}></img> <br></br> <p>Usama Ali, the Cortex Copywriter</p>
        </div>
        <div className="right5">
          {" "}
          <h1>About</h1>
          <h4>
            My copywriting and UX writing draws on abilities<br></br> developed
            in the psychological sciences.<br></br>
          </h4>
          <h4>
            {" "}
            Expertise in visual perception, behavioral motivation, and<br></br>{" "}
            decision-making allows me to engineer words that<br></br> convert
            customers and guide users.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Body;
