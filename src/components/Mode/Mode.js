import "./Mode.css";
import { RiSunFill, RiMoonFill } from "react-icons/ri";

export default function Mode({ handleModeChange, setMode }) {
  return (
    <section className=" container-mode">
      <div className="mode-left white-text">
        <ul>
          <li>
            <a href="#projects" >Projekt</a>
            
          </li>
          <li>
            <a target="_blank" href="https://github.com/Itzthoms">
              <span class="link-decoration">Github</span>
              <span class="icon-change">
                <img
                  src="https://cdn.sanity.io/images/tljndwv6/production/182744b0662c24bb7d37846566bdb7ebee3470d6-15x15.svg"
                  alt="External Link"
                />
                <img
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />
              </span>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/tomas-abrha/">Linkedin</a>
          </li>
        </ul>
      </div>
      <button onClick={handleModeChange} className="container-icon">
        {setMode ? (
          <RiMoonFill className="mode-icon" />
        ) : (
          <RiSunFill className="mode-icon" />
        )}
      </button>
    </section>
  );
}
