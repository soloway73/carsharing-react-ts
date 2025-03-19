import styles from "./ModelCard.module.css";
import car1 from "../../../../../assets/car1.png";
import car2 from "../../../../../assets/car2.png";
import car3 from "../../../../../assets/car3.png";
import car4 from "../../../../../assets/car4.png";

const carList: Record<string, string> = {
  "car1.png": car1,
  "car2.png": car2,
  "car3.png": car3,
  "car4.png": car4,
};

interface ModelCardProps {
  title: string;
  price: number;
  image: string;
}
export function ModelCard({ title, price, image }: ModelCardProps) {
  return (
    <div className={styles.modelCard}>
      <div className={styles.title}>{title}</div>
      <div className={styles.price}>{price} ₽</div>
      <img src={carList[image]} alt="car" />
    </div>
  );
}
