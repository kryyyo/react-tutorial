import logo from './logo.svg';
import './App.css';

//named export importing: 
//import {Greet} from './components/Greet';

//import "name", name can be varied since we used only export default Greet
import Greet from './components/Greet'; 
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>



      {/* <Inline /> */}
      {/* <Stylesheet primary={true}/> */}


      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}

      {/* <EventBind /> */}

      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}

      {/* <Counter /> */}
      {/* <Message /> */}

      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet> */}
      {/* <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Diana" heroName="Wonderwoman" /> */}

      {/* <Welcome name="Bruce" heroName="Batman" /> */}
      {/* <Welcome name="Clark" heroName="Superman" /> */}
      {/* <Welcome name="Diana" heroName="Wonderwoman" /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
