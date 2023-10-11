import React from "react";

import Button from "../Button";
import styles from "../ToastPlayground/ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";

import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastForm() {
  const { handleMessage, setMessage, setVariant, message, variant } =
    React.useContext(ToastContext);
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form onSubmit={handleMessage} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option, index) => {
              return (
                <label key={index} htmlFor={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={variant}
                    required
                    onChange={() => setVariant(option)}
                    checked={option === variant}
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastForm;
