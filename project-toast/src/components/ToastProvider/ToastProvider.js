import React from "react";
import useEscapeKey from "../../hooks/use-escape-key";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const [toast, setToast] = React.useState([]);
  const escapeKey = useEscapeKey(setToast);

  function handleMessage(e) {
    e.preventDefault();
    const nextToast = [
      ...toast,
      {
        id: crypto.randomUUID(),
        message: message,
        variant: variant,
      },
    ];
    setToast(nextToast);
    setMessage("");
    setVariant("notice");
  }

  return (
    <ToastContext.Provider
      value={{
        toast,
        message,
        variant,
        escapeKey,
        setToast,
        handleMessage,
        setMessage,
        setVariant,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
