import "./About.css";
import iconImage from "../../images/logo.jpg";

export const About = () => {
  return (
    <section id="about" className="container container-about">
      <div className="about-left">
        <span className="purple-text">
          ✋Tomas Abrha{" "}
          <span className="purple-smoke-text">- Introduktion</span>{" "}
        </span>
        <p className="gray-text">
          Hej, Jag heter Tomas och är en Frontend Utvecklare som mest brukar mig utav webbside-byggen. Jag kan språken HTML, Css, Javascript, Python och PHP. Kan dessutom nytja mig någorlunda utav React.js{" "}
        </p>
        <span className="white-text">
          <a href="">Kunskapsområden</a>
        </span>
        <ul className="tech-stack">
          <li>Webbutveckling</li>
          <li>Webbdesign</li>
          <li>Front-end Development</li>
        </ul>
        <a className="about-see" href="#">Läs mer {"->"} </a>
      </div>
      <div className="about-right">
        <img src={iconImage} alt="" />
      </div>
    </section>
  );
};
