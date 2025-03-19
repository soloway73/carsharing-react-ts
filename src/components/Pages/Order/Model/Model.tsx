import { useNavigate } from "react-router-dom";
import { Controls } from "./Controls/Controls";
import styles from "./Model.module.css";
import { ModelCardList } from "./ModelCardList/ModelCardList";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

export function Model() {
  const { location } = useSelector((s: RootState) => s.total);
  const navigate = useNavigate();

  useEffect(() => {
    if (!location) {
      navigate("/order/location");
    }
  }, [location, navigate]);

  return (
    <div className={styles.model}>
      <Controls />
      <ModelCardList />
    </div>
  );
}
