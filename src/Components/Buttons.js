import React from "react";

const Buttons = (props) => {
  return (
    <div id="buttons">
      <button
        id="submit"
        onClick={props.onSubmit}
        disabled={!props.isEditorReady}
      >
        Next Challenge
      </button>
      <button id="docs" onClick={props.handleDocs}>
        Docs
      </button>
    </div>
  );
};

export default Buttons;
