import React, { Component } from "react";
import {connect} from "react-redux";
import "../sass/home.scss";
import LOGO from  "../sass/images/default.jpg";
class NavbarComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {isLoggedIn} = this.props;
    return (
        <div>
          {isLoggedIn? <div className="home-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item">
                    <img src={LOGO} className="profile-picture"/>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">logout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>:""}
        </div>

    );
  }
}
const mapStateToProps=state=>({
  isLoggedIn:state.login.isLoggedIn
});
export default connect(mapStateToProps, null) (NavbarComponent);
