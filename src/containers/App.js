import Store from "../Store";
import {Provider} from "react-redux"
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