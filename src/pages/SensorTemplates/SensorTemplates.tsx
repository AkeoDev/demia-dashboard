import { useParams } from "react-router-dom";
import { CargoSensor, Feedstock, Flowmeter } from "..";

export const SensorTemplates = () => {
  const { sensorsSlug } = useParams();

  if (sensorsSlug == "cargo-sensor" || sensorsSlug == "grape-harvest") {
    return <CargoSensor />;
  } else if (sensorsSlug == "flowmeter-1" || sensorsSlug == "flowmeter") {
    return <Flowmeter />;
  } else if (sensorsSlug == "feedstock") {
    return <Feedstock />;
  } else {
    return <CargoSensor />;
  }
};
