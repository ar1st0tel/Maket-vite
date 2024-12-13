import classes from "./TableTitle.module.scss";

const TableTitle = () => {
  return (
    <>
      <div className={classes.header}>Top Collection</div>
      <div className={classes.title}>
        <div className={classes.collection}>Collection</div>
        <div>Volume</div>
        <div>24h %</div>
        <div>Floor Price</div>
        <div>Owners</div>
        <div>Items</div>
      </div>
    </>
  );
};
export default TableTitle;
