import ReactTooltip from "react-tooltip";
import { BioDetails } from "../BioDetails/BioDetails";
import { BIO } from "../../constants/bio";
import "./Bio.css";

export const Bio = () => {
  return (
    <section className="container container-lines">
      <p className="purple-text">
        📚 Jobbhistorik <span className="purple-smoke-text"></span>{" "}
      </p>
      <div className="line"></div>
      {BIO.map((e) => (
        <div key={e.year} className="lines-items">
          <span className="white-text">{e.year}: </span>
          <span className="gray-text">
            {e.title.cargo} på {e.title.name}
          </span>

          <div className="line"></div>
        </div>
      ))}
    </section>
  );
};
