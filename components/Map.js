import React from "react";
import Iframe from "react-iframe";

function Map() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {" "}
      <Iframe
        url="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=avsynctech+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="100%"
        id="myId"
        className="myClassname"
        height="100%"
        styles={{
          height: "100%",
          width: "100%",
          border: "none",
        }}
      />
    </div>
  );
}

export default Map;
