import { toFrenchIntegerFormat } from "../../utils/format";
import calorieIcon from "../../assets/icon-calorie.png";
import carbohydrateIcon from "../../assets/icon-carbohydrate.png";
import lipidIcon from "../../assets/icon-lipid.png";
import proteinIcon from "../../assets/icon-protein.png";

const ICON_BY_TYPE = {
  Calories: calorieIcon,
  Glucides: carbohydrateIcon,
  Protéines: proteinIcon,
  Lipides: lipidIcon,
};

const UNIT_BY_TYPE = {
  Calories: "kCal",
  Glucides: "g",
  Protéines: "g",
  Lipides: "g",
};

export function InfoCard({ type, value }) {
  return (
    <div>
      <img src={ICON_BY_TYPE[type]} alt="" />
      <p data-testid="card-measure">
        {toFrenchIntegerFormat(value)}
        {UNIT_BY_TYPE[type]}
      </p>
      <p data-testid="card-type">{type}</p>
    </div>
  );
}
