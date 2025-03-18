import styles from "./NextStepButton.module.css";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { useState } from "react";

export function NextStepButton() {
  const { pathname } = useLocation();
  const { city, location } = useSelector((s: RootState) => s.total);
  const [buttonText, setButtonText] = useState("");
  const navigate = useNavigate();

  const buttonHandler = (pathname: string) => {
    switch (pathname) {
      case "/order/location": {
        setButtonText("Далее");
        return () => {
          if (city && location) {
            navigate("/order/model");
          }
        };
      }
    }
  };

  return (
    <button className={styles.button} onClick={() => buttonHandler(pathname)}>
      {buttonText}
    </button>
  );
}
