import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { MuteProvider } from "./components/MuteContext";

const App = () => {
  return (
    <div>
      <MuteProvider>
        <Provider store={appStore}>
          <Body />
        </Provider>
      </MuteProvider>
    </div>
  );
};

export default App;
