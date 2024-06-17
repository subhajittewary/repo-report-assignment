import { Provider } from "react-redux";
import "./App.css";
import RepoReport from "./RepoReport";
import store from "./store.js";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RepoReport />
      </Provider>
    </div>
  );
}

export default App;
