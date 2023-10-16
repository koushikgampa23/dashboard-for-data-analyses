import classes from "./Card.module.css";

interface Props {
  detail: {
    icon: JSX.Element;
    label: string;
    price: string;
    incrementIcon: JSX.Element;
    incrementPrice: string;
    salesLabel: string;
    iconColor: string;
  };
}

export const Card = ({ detail }: Props) => {
  return (
    <div className={classes.container}>
      {detail.icon}
      <div className={classes.cardLabel}>
        <span className={classes.optionLabel}>{detail.label}</span>
        <span className={classes.price}>{detail.price}</span>
        <div className={classes.sales}>
          <span className={classes.subPrice}>
            {detail.incrementIcon}
            {detail.incrementPrice}
          </span>
          <span>{detail.salesLabel}</span>
        </div>
      </div>
    </div>
  );
};
