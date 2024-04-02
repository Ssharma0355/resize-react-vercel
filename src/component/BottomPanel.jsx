import React, { useRef, useEffect } from "react";
import "./Panel.css";

const BottomPanel = () => {
    const ref = useRef(null);

    useEffect(() => {
        const resizableEle = ref.current;
        const onMouseDownBottomResize = (event) => {
            const startY = event.clientY;
            const startHeight = parseInt(
                document.defaultView.getComputedStyle(resizableEle).height,
                10
            );

            const onMouseMove = (event) => {
                const height = startHeight + event.clientY - startY;
                resizableEle.style.height = `${height}px`;
            };

            const onMouseUp = () => {
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
            };

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        };

        const resizer = document.createElement("div");
        resizer.className = "resizer resizer-b";
        resizer.addEventListener("mousedown", onMouseDownBottomResize);
        resizableEle.appendChild(resizer);

        return () => {
            resizer.removeEventListener("mousedown", onMouseDownBottomResize);
        };
    }, []);

    return (
        <div ref={ref} className="panel1">
            <h2>Bottom Panel</h2> 
        </div>
    );
};

export default BottomPanel;
