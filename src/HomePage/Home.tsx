import classes from "./Home.module.css";
import { FinancialCategories } from "./FinancialCategories/FinancialCategories";
import { ProductSell } from "./ProductSell/ProductSell";
import { Greeting } from "./Greeting/Greeting";
import { Overview } from "./Overview/Overview";
import { CustomerChart } from "./CustomerChart/CustomerChart";

const Home = () => {
  return (
    <div className={classes.container}>
      <Greeting />
      <div className={classes.subContainer}>
        <FinancialCategories />
        <div className={classes.chartContainer}>
          <Overview />
          <CustomerChart />
        </div>
        <ProductSell />
      </div>
    </div>
  );
};

export default Home;
