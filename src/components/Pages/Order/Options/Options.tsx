import { useSelector } from "react-redux";
import styles from "./Options.module.css";
import { RootState } from "../../../../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ColorInputs } from "./ColorInputs/ColorInputs";
import { DateInputs } from "./DateInputs/DateInputs";
import { Tariff } from "./Tariff/Tariff";
import { ExtraOptions } from "./ExtraOptions/ExtraOptions";

export function Options() {
  const { location, carId } = useSelector((s: RootState) => s.total);
  const navigate = useNavigate();

  useEffect(() => {
    if (!location || !carId) {
      navigate("/order/location");
    }
  }, [carId, location, navigate]);

  return (
    <div className={styles.options}>
      <ColorInputs />
      <DateInputs />
      <Tariff />
      <ExtraOptions />
    </div>
  );
}
