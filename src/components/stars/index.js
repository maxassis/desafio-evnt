import React from "react";
import { FaStar } from "react-icons/fa";

function Stars(props) {
  if (props.valor >= 1 && props.valor < 2 && props.valor !== "") {
    return (
      <>
        <FaStar style={{ color: "#39b54a", width: "13px" }} />;
      </>
    );
  } else if (props.valor >= 2 && props.valor < 3 && props.valor !== "") {
    return (
      <>
        <FaStar style={{ color: "#39b54a", width: "13px" }} />
        <FaStar style={{ color: "#39b54a", width: "13px" }} />
      </>
    );
  } else if (props.valor >= 3 && props.valor < 4 && props.valor !== "") {
    return (
      <>
        <FaStar style={{ color: "#39b54a", width: "13px" }} />
        <FaStar style={{ color: "#39b54a", width: "13px" }} />
        <FaStar style={{ color: "#39b54a", width: "13px" }} />
      </>
    );
  } else if (props.valor >= 4 && props.valor < 5 && props.valor !== "") {
    return (
      <>
        <FaStar style={{ color: "#39b54a", width: "13px" }} />
        <FaStar style={{ color: "#39b54a", width: "13px" }} />
        <FaStar style={{ color: "#39b54a", width: "13px" }} />
        <FaStar style={{ color: "#39b54a", width: "13px" }} />
      </>
    );
  } else if (props.valor >= 5) {
    return (
      <>
        <FaStar style={{ color: "#39b54a", width: "13px" }} />
        <FaStar style={{ color: "#39b54a", width: "13px" }} />
        <FaStar style={{ color: "#39b54a", width: "13px" }} />
        <FaStar style={{ color: "#39b54a", width: "13px" }} />
        <FaStar style={{ color: "#39b54a", width: "13px" }} />
      </>
    );
  } else {
    return <span style={{ fontSize: "13px" }}>Sem Qualificação</span>;
  }
}

export default Stars;
