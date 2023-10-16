import { BsSearch } from "react-icons/bs";
import classes from './Search.module.css';

export const Search = () => {
  return (
    <div className={classes.container}>
      <BsSearch />
      <input type="text" placeholder="Search ..." className={classes.inputStyle}/>
    </div>
  );
};
