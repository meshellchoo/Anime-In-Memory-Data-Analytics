import './App.css';
import AnimeChange from './Pages/AnimeChange';
import Analytics from './Pages/Analytics';
import Home from './Pages/Home';
import {BrowserRouter, Route} from "react-router-dom";

import AppTable from './Components/table'


function App() {
  return (
    <div className="App">
            <BrowserRouter>
                <Route path='/' exact component={Home} />
                <Route path='/modify' exact component={AnimeChange}/>
                
                <Route exact path='/table/:func/:value/:n' exact component={AppTable}/>
                <Route path='/analytics' exact component={Analytics}/>
            </BrowserRouter>
    </div>
  );
}

export default App;