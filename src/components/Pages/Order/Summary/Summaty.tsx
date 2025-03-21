import { useSelector } from "react-redux";
import styles from "./Summary.module.css";
import { RootState } from "../../../../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Summary() {
  const { location, carId } = useSelector((s: RootState) => s.total);
  const navigate = useNavigate();

  useEffect(() => {
    if (!location || !carId) {
      navigate("/order/location");
    }
  }, [carId, location, navigate]);

  return <div className={styles.summary}>summary</div>;
}
