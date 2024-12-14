import React from "react";

function TeamPopup(props) {
  return props.trigger ? (
    <div onClick={() => props.setTrigger(false)}>{props.children}</div>
  ) : (
    ""
  );
}

export default TeamPopup;
