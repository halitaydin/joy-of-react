import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toast, setToast }) {
  return (
    <ol className={styles.wrapper}>
      {toast.map(({ message, variant, id }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast
              message={message}
              variant={variant}
              toast={toast}
              id={id}
              setToast={setToast}
            >
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
