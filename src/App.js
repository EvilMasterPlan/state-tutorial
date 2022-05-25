import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Stage1 from './Stages/Stage01';
import Stage2 from './Stages/Stage02';
import Stage3 from './Stages/Stage03';
import Stage4 from './Stages/Stage04';
import Stage5 from './Stages/Stage05';
import Stage6 from './Stages/Stage06';
import Stage7 from './Stages/Stage07';
import Stage8 from './Stages/Stage08';
import Stage9 from './Stages/Stage09';
import Stage10 from './Stages/Stage10';
import Stage11 from './Stages/Stage11';
import Stage12 from './Stages/Stage12';
import Stage13 from './Stages/Stage13';
import Stage14 from './Stages/Stage14';
import Stage15 from './Stages/Stage15';
import Stage16 from './Stages/Stage16';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={"/"} render={(props) => <Stage1 {...props} stage={1}/>}/>
        <Route exact={true} path={"/1"} render={(props) => <Stage1 {...props} stage={1}/>}/>
        <Route exact={true} path={"/2"} render={(props) => <Stage2 {...props} stage={2}/>}/>
        <Route exact={true} path={"/3"} render={(props) => <Stage3 {...props} stage={3}/>}/>
        <Route exact={true} path={"/4"} render={(props) => <Stage4 {...props} stage={4}/>}/>
        <Route exact={true} path={"/5"} render={(props) => <Stage5 {...props} stage={5}/>}/>
        <Route exact={true} path={"/6"} render={(props) => <Stage6 {...props} stage={6}/>}/>
        <Route exact={true} path={"/7"} render={(props) => <Stage7 {...props} stage={7}/>}/>
        <Route exact={true} path={"/8"} render={(props) => <Stage8 {...props} stage={8}/>}/>
        <Route exact={true} path={"/9"} render={(props) => <Stage9 {...props} stage={9}/>}/>
        <Route exact={true} path={"/10"} render={(props) => <Stage10 {...props} stage={10}/>}/>
        <Route exact={true} path={"/11"} render={(props) => <Stage11 {...props} stage={11}/>}/>
        <Route exact={true} path={"/12"} render={(props) => <Stage12 {...props} stage={12}/>}/>
        <Route exact={true} path={"/13"} render={(props) => <Stage13 {...props} stage={13}/>}/>
        <Route exact={true} path={"/14"} render={(props) => <Stage14 {...props} stage={14}/>}/>
        <Route exact={true} path={"/15"} render={(props) => <Stage15 {...props} stage={15}/>}/>
        <Route exact={true} path={"/16"} render={(props) => <Stage16 {...props} stage={16}/>}/>
      </Switch>
    </Router>
  );
}

export default App;
