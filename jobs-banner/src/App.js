import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Description from './components/Description';
import Requirements from './components/Requirements';
import Summary from './components/Summary'
import Responsibilities from './components/Responsibilities';
import Interests from './components/Interests';

function App() {
  return (
    <div>
<Banner/>
<Description/>
<Summary/>
<Responsibilities/>
<Requirements/>

<Interests/>
    </div>
  );
}

export default App;
