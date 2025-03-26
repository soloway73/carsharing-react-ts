import { NextStepButton } from "../NextStepButton/NextStepButton";
import styles from "./Total.module.css";
import { TotalContent } from "./TotalContent/TotalContent";

export function Total() {
  return (
    <>
      <div className={styles.total}>
        <TotalContent />
        <NextStepButton />
      </div>
    </>
  );
}
