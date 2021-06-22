import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import './services/firebase';
import './styles/global.scss'

import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Route path="/" exact component={Home}/>
    <Route path="/rooms/new" component={NewRoom}/>
    </BrowserRouter>
  )
}

export default App;
