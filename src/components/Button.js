import React from "react";

import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  renderButtonText = (value) => {
    return value === "english" ? "Submit" : "Envoyer";
  };
  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(v) => this.renderButtonText(v)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
