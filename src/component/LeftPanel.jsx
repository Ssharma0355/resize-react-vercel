import React, { useRef, useEffect } from "react";
import "./Panel.css";

const LeftPanel = () => {
  const ref = useRef(null);

  useEffect(() => {
    const resizableEle = ref.current;
    const onMouseDownLeftResize = (event) => {
      const startX = event.clientX;
      const startWidth = parseInt(
        document.defaultView.getComputedStyle(resizableEle).width,
        10
      );

      const onMouseMove = (event) => {
        const width = startWidth + event.clientX - startX;
        resizableEle.style.width = `${width}px`;
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    const resizer = document.createElement("div");
    resizer.className = "resizer resizer-l";
    resizer.addEventListener("mousedown", onMouseDownLeftResize);
    resizableEle.appendChild(resizer);

    return () => {
      resizer.removeEventListener("mousedown", onMouseDownLeftResize);
    };
  }, []);

  return (
    <div ref={ref} className="panel3">
      <h2>Left Panel</h2>
    </div>
  );
};

export default LeftPanel;
