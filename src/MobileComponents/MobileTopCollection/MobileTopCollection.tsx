import classes from "../Mobile.module.scss"

const MobileTopCollection = () => {
    return (<div className={classes.topCollectionMobile}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 40,
                fontSize: 30,
                fontWeight: 600,
                fontFamily: "Poppins"
            }}>
                <span> Top Collection</span>
            </div>
            <div className={classes.tableTopCollection}>
                <span>
                    Collection
                </span>
                <span>
                    Volume
                </span>
            </div>
            <div className={classes.tableLine}>
                <div>
                    <span>pic </span>
                    <div>
                        <span>name </span>
                        <span>author</span>
                    </div>
                </div>
                <div>
                    <div>price</div>
                    <div>24h %</div>
                </div>
            </div>
        </div>
    )
}
export default MobileTopCollection;