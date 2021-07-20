import pictoBodybuilding from "../../assets/picto-bodybuilding.png";
import pictoCycling from "../../assets/picto-cycling.png";
import pictoMeditation from "../../assets/picto-meditation.png";
import pictoSwimming from "../../assets/picto-swimming.png";

export function AsideNav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">
              <img src={pictoMeditation} alt="Méditation" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={pictoSwimming} alt="Natation" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={pictoCycling} alt="Cyclisme" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={pictoBodybuilding} alt="Musculation" />
            </a>
          </li>
        </ul>
      </nav>
      <p>Tous droits réservés, SportSee 2021</p>
    </div>
  );
}
