import React, {Component} from "react";
import Store from "../Store";
import {ToastContainer} from "react-toastify";
import {Provider} from "react-redux";
import RouterComponent from "../components/routerComponent";
import 'react-toastify/dist/ReactToastify.css';
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