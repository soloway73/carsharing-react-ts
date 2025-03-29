import { Sheet } from "react-modal-sheet";
import { useState } from "react";
import { Button } from "../../../Button/Button";
import { NextStepButton } from "../../../NextStepButton/NextStepButton";
import styles from "./TotalModal.module.css";
import { TotalContent } from "../../../Total/TotalContent/TotalContent";

export function TotalModal() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.totalModal}>
      <Button onClick={() => setOpen(true)}>Детали заказа</Button>

      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        snapPoints={[-50, 0.8, 0.5, 100, 0]}
        initialSnap={2}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content className={styles.content}>
            <TotalContent />
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
      <NextStepButton />
    </div>
  );
}
