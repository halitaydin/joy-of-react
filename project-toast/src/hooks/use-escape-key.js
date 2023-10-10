import React from "react";

function useEscapeKey(setState) {
  React.useEffect(() => {
    function handleCloseAllToasts(e) {
      e.code === "Escape" && setState([]);
    }

    window.addEventListener("keydown", handleCloseAllToasts);

    return () => {
      window.removeEventListener("keydown", handleCloseAllToasts);
    };
  }, [setState]);
}

export default useEscapeKey;
