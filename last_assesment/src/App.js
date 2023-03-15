
import { createStore } from "redux";
import { Provider } from "react-redux";

import RouterApp from "./component/RouterApp";
import items from "./component/store/reducers";

function App() {
  const store = createStore(items);

  return (
    <Provider store={store}>
      <div className="App">
        <RouterApp />
      </div>
    </Provider>
  );
}

export default App;
