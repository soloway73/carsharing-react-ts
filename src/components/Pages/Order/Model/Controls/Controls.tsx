import styles from "./Controls.module.css";

export function Controls() {
  return (
    <div className={styles.controls}>
      <input type="radio" name="carBudget" id="allModels" checked />
      <label htmlFor="allModels">Все модели</label>
      <input type="radio" name="carBudget" id="eco" />
      <label htmlFor="eco">Эконом</label>
      <input type="radio" name="carBudget" id="premium" />
      <label htmlFor="premium">Премиум</label>
    </div>
  );
}
