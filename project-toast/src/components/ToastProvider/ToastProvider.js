import React from "react";
import useKeydown from "../../hooks/use-keydown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toast, setToast] = React.useState([]);

  const handleEscape = React.useCallback(() => {
    setToast([]);
  }, []);

  useKeydown("Escape", handleEscape);

  function createToast(message, variant) {
    const nextToast = [
      ...toast,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];
    setToast(nextToast);
  }

  function handleClose(id) {
    const newArray = toast.filter((item) => {
      return item.id !== id;
    });
    setToast(newArray);
  }

  return (
    <ToastContext.Provider
      value={{
        toast,
        createToast,
        handleClose,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
