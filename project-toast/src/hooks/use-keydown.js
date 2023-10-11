import React from "react";

function useKeydown(key, callback) {
  React.useEffect(() => {
    function handleCloseAllToasts(e) {
      e.code === key && callback(e);
    }

    window.addEventListener("keydown", handleCloseAllToasts);

    return () => {
      window.removeEventListener("keydown", handleCloseAllToasts);
    };
  }, [key, callback]);
}

export default useKeydown;
