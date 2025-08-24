import React from "react";
import { TailSpin } from "react-loader-spinner"; // choose spinner you like

function Preloader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <TailSpin
        height={100}
        width={100}
        color="#343e47"
        ariaLabel="loading"
      />
    </div>
  );
}

export default Preloader;

