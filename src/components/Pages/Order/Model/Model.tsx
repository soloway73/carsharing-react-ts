import { Controls } from "./Controls/Controls";
import styles from "./Model.module.css";
import { ModelCardList } from "./ModelCardList/ModelCardList";

export function Model() {
  return (
    <div className={styles.model}>
      <Controls />
      <ModelCardList />
    </div>
  );
}
