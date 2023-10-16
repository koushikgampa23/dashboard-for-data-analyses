import { Search } from "../../Components/Search/Search";
import classes from "./ProductSell.module.css";
import abstarctImage from "./abstarct3d.png";
import earthImage from "./earth.jpg";

export const ProductSell = () => {
  const productDetails = {
    title: {
      productName: "Product Name",
      stock: "Stock",
      price: "Price",
      totalSales: "Total Sales",
    },
    data: [
      {
        img: abstarctImage,
        title: "Abstract 3D",
        label: "Lorum ipsum dolor sit amel,consectetur adipiscing elit",
        stock: "32 instock",
        price: "$45.99",
        totalSales: "20",
      },
      {
        img: earthImage,
        title: "Sarphens illusion",
        label: "Lorum ipsum dolor sit amel,consectetur adipiscing elit",
        stock: "32 instock",
        price: "$45.99",
        totalSales: "20",
      },
    ],
  };
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <span className={classes.heading}>Product Sell</span>
        <div className={classes.subContainer}>
          <Search />
          <select className={classes.inputStyle}>
            <option>Last 30 days</option>
          </select>
        </div>
      </div>
      <table className={classes.tableStyle}>
        <thead>
          <tr>
            <th>{productDetails.title.productName}</th>
            <th>{productDetails.title.stock}</th>
            <th>{productDetails.title.price}</th>
            <th>{productDetails.title.totalSales}</th>
          </tr>
        </thead>
        <tbody>
          {productDetails.data.map((product, index) => {
            return (
              <tr key={index}>
                <td>
                  <div className={classes.imgContainer}>
                    <img src={product.img} className={classes.imgStyle} alt="Not Found" />
                    <div>
                      <span className={classes.subHeading}>
                        {product.title}
                      </span>
                      <br />
                      {product.label}
                    </div>
                  </div>
                </td>
                <td>{product.stock}</td>
                <td>{product.price}</td>
                <td>{product.totalSales}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
