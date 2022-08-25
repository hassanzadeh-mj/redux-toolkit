
import { Provider } from "react-redux";
import Store from "./store/store";
import Counter from "./counter/counter"
import UserList from "./counter/user"
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