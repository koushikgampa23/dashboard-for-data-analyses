import { FaHandSparkles } from "react-icons/fa";
import { Search } from "../../Components/Search/Search";
import classes from "./Greeting.module.css";

export const Greeting = () => {
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <span className={classes.header}>Hello Sharuk</span>
        <FaHandSparkles className={classes.iconStyle}/>
      </div>
      <Search />
    </div>
  );
};
