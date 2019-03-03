import React from 'react';

import "./header-styles.css";

class Header extends React.Component {

  render() {
    const {start, reverse} = this.props.funcs;
    return(
      <div className="ui container header">
        <div className="car">
          <img src="/car.png" alt="car" />
        </div>
        <div className="road" />
        <button className="dev-start" onClick={() => start()}>Start</button>
        <button className="dev-prev" onClick={() => reverse()}>reverse</button>
      </div>
    );
  }
}

export default Header;