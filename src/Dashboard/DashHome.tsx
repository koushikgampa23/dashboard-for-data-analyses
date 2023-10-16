import classes from "./DashHome.module.css";
import { RiDashboard2Line } from "react-icons/ri";
import { GiCube } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineWallet } from "react-icons/ai";
import { CiDiscount1 } from "react-icons/ci";
import { BiMessageAltDetail } from "react-icons/bi";
import { MdArrowRight } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const DashHome = () => {
  const options = [
    {
      icon: <RiDashboard2Line />,
      label: "Dashboard",
    },
    {
      icon: <GiCube />,
      label: "Product",
    },
    {
      icon: <FaRegUserCircle />,
      label: "Customers",
    },
    { icon: <AiOutlineWallet />, label: "Income" },
    { icon: <CiDiscount1 />, label: "Promote" },
    { icon: <BiMessageAltDetail />, label: "Help" },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <div>
          <span className={classes.heading}>Dashboard</span>
          {options.map((option,index) => {
            return (
              <div className={classes.optionStyle} key={index}>
                <div className={classes.optionContainer}>
                  {option.icon}
                  {option.label}
                </div>
                <MdArrowRight />
              </div>
            );
          })}
        </div>
        <div className={classes.footer}>
        <FaUserCircle className={classes.iconStyle}/>
          <div className={classes.managerName}>
            <span>Evano</span><br/>
            <span className={classes.designation}>Project Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHome;
