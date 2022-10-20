import React from "react";

const Door = () => {

    const opener = () => {
        const lock = document.getElementById("lock")
        const rightOpen = document.getElementById("right")
        const leftOpen = document.getElementById("left")
          rightOpen.classList.add("doorRightInactive")
          lock.classList.add("lockInactive")
          leftOpen.classList.add("doorLeftInactive")
      }

    return (
        <div className="door" id="door">
            <div className="left" id="left"></div>
            <div className="right" id="right"></div>
            <img 
                className="lock" 
                id="lock" 
                src="../images/lock_n.jpg" 
                alt="lock" 
                onClick={opener}
            />
        </div>
    )
}

export default Door;