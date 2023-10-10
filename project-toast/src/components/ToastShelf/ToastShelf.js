import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import { ToastContext } from "../ToastProvider/ToastProvider";
import VisuallyHidden from "../VisuallyHidden";

function ToastShelf() {
  const { toast, setToast } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toast.map(({ message, variant, id }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast variant={variant} toast={toast} id={id} setToast={setToast}>
              {message}
              {variant === "error" ? (
                <VisuallyHidden>
                  {variant}
                  Something went wrong! Please contact customer support
                </VisuallyHidden>
              ) : (
                <VisuallyHidden>{variant}</VisuallyHidden>
              )}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
