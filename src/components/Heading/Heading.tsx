import styles from "./Heading.module.css";
import cn from "classnames";

interface HeadingProps {
  onClick?: () => void;
}
export function Heading({ onClick }: HeadingProps) {
  return (
    <h1
      className={cn(styles.heading, { [styles.headingActive]: onClick })}
      onClick={onClick}
    >
      Need for drive
    </h1>
  );
}
