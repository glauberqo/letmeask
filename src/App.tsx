import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import {AuthContextProvider} from './contexts/AuthContext';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/room/new" exact component={NewRoom} />
            <Route path="/room/:id" component={Room} />
          </Switch>
          </AuthContextProvider>  
      </BrowserRouter>
    </div>
  );
}

export default App;
