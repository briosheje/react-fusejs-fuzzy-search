/* eslint-disable no-unused-vars */
import React, { ReactNode } from "react";
import Fuse from "fuse.js";

import useFuse from "../hooks/useFuse";

type SearchFunction<T> = (
  pattern: string | Fuse.Expression,
  options?: Fuse.FuseSearchOptions | undefined
) => Fuse.FuseResult<T>[];

type FuseSearchWrapperOpts<T> = {
  list: readonly T[];
  fuseOpts?: Fuse.IFuseOptions<T> | undefined;
  index?: Fuse.FuseIndex<{}> | undefined;
  searchComponentBuilder: (search: SearchFunction<T>) => ReactNode;
  resultsBuilder: (results: Fuse.FuseResult<{}>[]) => ReactNode;
};

type FuseSearchWrapperComponent<T = {}> = React.FC<FuseSearchWrapperOpts<T>>;

const FuseSearchWrapper: FuseSearchWrapperComponent = (props) => {
  const { list, fuseOpts, index, searchComponentBuilder, resultsBuilder } =
    props;

  const { search, results } = useFuse(list, fuseOpts, index);

  return (
    <>
      {searchComponentBuilder(search)}
      {resultsBuilder(results)}
    </>
  );
};

export { FuseSearchWrapperOpts };
export default FuseSearchWrapper;
