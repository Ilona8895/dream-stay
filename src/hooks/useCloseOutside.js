import { useEffect, useRef } from "react";

function useCloseOutside(onClose, listeningCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          onClose();
        }
      }

      document.addEventListener("click", handleClick, listeningCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listeningCapturing);
    },
    [onClose, listeningCapturing]
  );

  return ref;
}

export default useCloseOutside;
