
import { Provider } from "react-redux";
import Store from "./redux-toolkit/store/store";
import Counter from "./redux-toolkit/counter/counter"
import UserList from "./redux-toolkit/counter/user"

function App() {
  return (
    <>
<Provider store={Store}>
     
<Counter/>
<UserList/>
</Provider>
     
    </>
  );
}

export default App;