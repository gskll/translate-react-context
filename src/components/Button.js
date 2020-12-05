import React from "react";

import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  renderButtonText = (value) => {
    return value === "english" ? "Submit" : "Envoyer";
  };

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(v) => this.renderButtonText(v)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
