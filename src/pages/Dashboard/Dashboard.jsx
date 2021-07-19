import { AsideNav } from "../../components/AsideNav/AsideNav";
import { BarChart } from "../../components/BarChart/BarChart";
import { Header } from "../../components/Header/Header";
import { Histogram } from "../../components/Histogram/Histogram";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { RadarChart } from "../../components/RadarChart/RadarChart";
import { RadialBarChart } from "../../components/RadialBarChart/RadialBarChart";

export function Dashboard() {
  return (
    <div>
      <Header />

      <AsideNav />

      <section>
        <h1>Bonjour Thomas</h1>
        <p>Félicitations ! Vous avez explosé vos objectifs hier !</p>

        <div>
          <div>
            <BarChart />
            <Histogram />
            <RadarChart />
            <RadialBarChart />
          </div>

          <div>
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </div>
        </div>
      </section>
    </div>
  );
}
