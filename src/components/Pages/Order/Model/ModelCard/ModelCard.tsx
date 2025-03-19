import styles from "./ModelCard.module.css";

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
      <img src={`/${image}`} alt="car" />
    </div>
  );
}
