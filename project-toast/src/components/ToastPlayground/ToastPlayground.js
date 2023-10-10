import React from "react";

import ToastProvider from "../ToastProvider/ToastProvider";
import ToastForm from "../ToastForm/ToastForm";

function ToastPlayground() {
  return (
    <ToastProvider>
      <ToastForm />
    </ToastProvider>
  );
}

export default ToastPlayground;
