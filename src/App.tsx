import classes from './App.module.css';
import DashHome from "./Dashboard/DashHome";
import Home from "./HomePage/Home";

function App() {
  return (
    <div className={classes.container}> 
      <DashHome />
      <Home />
    </div>
  );
}

export default App;
