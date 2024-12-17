import classes from "./TopCollection.module.scss";
import { connect, ConnectedProps } from "react-redux";
import { fetchLinesAsync } from "@/Api/AsyncThunk/FetchLinesAsync.ts";
import { RootState } from "@/ReduxFeatures/Store/Store.ts";
import { LineSlice } from "@/ReduxFeatures/LineSlice/LineSlice.ts";
import { useEffect } from "react";
import { linesOnPage } from "@/MobileComponents/MobileTopCollectionComponent/MobileTopCollection.tsx";
import TableTitle from "@/DesktopComponents/TopCollectionComponent/TopCollectionFolder/TableTitle/TableTitle.tsx";
import LineTC from "@/DesktopComponents/TopCollectionComponent/TopCollectionFolder/LineTC/LineTC.tsx";
import ExploreAll from "@/HelpersComponents/ExploreAll/ExploreAll.tsx";

const connector = connect(
  (state: RootState) => ({
    LineArray: state.LineSlice.lines,
    isError: state.LineSlice.isError,
    isPending: state.LineSlice.isPending,
    isLoaded: state.LineSlice.isLoaded,
  }),
  { fetchLinesAsync }
);
type CollectionProps = ConnectedProps<typeof connector>;
const TopCollection = connector(
  ({
    LineArray,
    isError,
    isPending,
    isLoaded,
    fetchLinesAsync,
  }: CollectionProps) => {
    useEffect(() => {
      fetchLinesAsync(linesOnPage);
    }, [fetchLinesAsync]);

    if (isPending) {
      return <div>...loading...</div>;
    }
    if (isError) {
      return <div>ERROR!</div>;
    }
    if (!LineArray.length) {
      return <div>There are no collections unfortunately</div>;
    }
    if (isLoaded) {
      return (
        <>
          <div className={classes.table}>
            <TableTitle />
            <>
              {LineArray.map((lineItem: LineSlice) => (
                <LineTC key={lineItem.id} line={lineItem} />
              ))}
            </>
          </div>
          <div className={classes.explore}>
            <ExploreAll />
          </div>
        </>
      );
    }
    return null;
  }
);

export default TopCollection;
