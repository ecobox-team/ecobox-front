import React, { Component, Fragment } from "react";
// import Alarm from "../../../components/Alarm";

class SuperAdminView extends Component {
  render() {
    const { history } = this.props;
    return (
      <Fragment>
        <header className="header sub">
          <button type="button" onClick={() => history.goBack()}>
            <em className="ico left-arrow">
              <i className="fas fa-angle-left"></i>
            </em>
            <em className="text">알림</em>
          </button>
        </header>
        <section id="middle" className="middle type1">
        </section>
      </Fragment>
    );
  }
}
export default SuperAdminView;
