import React from "react";
import { AlignJustify } from "react-feather";

export const Loading = (props: any) => {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          position: "fixed",
          background: props.hasBackground ? "#fff" : "transparent",
          flex: 1,
          alignItems: "center",
          height: "100%",
          width: "100%",
          left: "0",
          zIndex: 9999,
        }}
      >
        <div
          className="loader justify-content-lg-center"
          style={{
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            left: "45%",
            top: "35%",
            userSelect: "none",
          }}
        >
          {props.showLogo == true && (
            <img style={{ width: "150px" }} src="./isiro_logo.png" alt="" />
          )}
          <br></br>
          {!props.hasError && (
            <img
              style={{ width: "100px", position: "relative", left: "20px" }}
              src="./loader.svg"
              alt=""
            />
          )}
          <h5
            style={{
              position: "relative",
              right: "12%",
              letterSpacing: "2px",
              fontWeight: 100,
            }}
          >
            {props.message}
          </h5>
        </div>
      </div>
    </>
  );
};
