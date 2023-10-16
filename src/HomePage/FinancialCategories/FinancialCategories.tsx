import { AiOutlineArrowDown, AiOutlineDollarCircle } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import { BiUpArrowAlt } from "react-icons/bi";
import { Card } from "./Card";
import { IoMdWallet } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import classes from "./FinancialCategories.module.css";
import classnames from "classnames";

export const FinancialCategories = () => {
  const details = [
    {
      icon: (
        <AiOutlineDollarCircle
          className={classnames(classes.cardIcon, classes.card1)}
        />
      ),
      label: "Earning",
      price: "$198k",
      incrementIcon: <BiUpArrowAlt />,
      incrementPrice: "37.8%",
      salesLabel: "This Month",
      iconColor: "green",
    },
    {
      icon: <GrNotes className={classnames(classes.cardIcon, classes.card2)} />,
      label: "Earning",
      price: "$198k",
      incrementIcon: <AiOutlineArrowDown />,
      incrementPrice: "37.8%",
      salesLabel: "This Month",
      iconColor: "green",
    },
    {
      icon: (
        <IoMdWallet className={classnames(classes.cardIcon, classes.card3)} />
      ),
      label: "Earning",
      price: "$198k",
      incrementIcon: <AiOutlineArrowDown />,
      incrementPrice: "37.8%",
      salesLabel: "This Month",
      iconColor: "green",
    },
    {
      icon: (
        <FaBagShopping
          className={classnames(classes.cardIcon, classes.card4)}
        />
      ),
      label: "Earning",
      price: "$198k",
      incrementIcon: <AiOutlineArrowDown />,
      incrementPrice: "37.8%",
      salesLabel: "This Month",
      iconColor: "green",
    },
  ];

  const content = details.map((detail, index) => {
    return <Card detail={detail} key={index} />;
  });

  return <div className={classes.cardContainer}>{content}</div>;
};
