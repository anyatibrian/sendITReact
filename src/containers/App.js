import React, { Component } from "react";
import { Provider } from "react-redux";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import RouterComponent from "../components/routerComponent";
import Store from "../Store";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={Store}>
          <ToastContainer/>
          <RouterComponent />
        </Provider>
      </div>
    );
  }
}
export default App;
