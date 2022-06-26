import './App.css';
import Welcome from './Components/Check';
import Website from './Components/Website';
import ClassImpl from './ClassComponent/Welcome';
import Message from './Components/Message';
import FunctionClick from './Components/EventHandling/FunctionClick';
function App() {
  return (
    <div className="App">
     <h1> React Tutorial </h1>
      <Welcome/>
      <Website/>
     <getGreeting/>
     <ClassImpl/>
     <Message/>
     <FunctionClick/>
    {/* <EventBinding/> */}
    </div>
  );
}

export default App;
