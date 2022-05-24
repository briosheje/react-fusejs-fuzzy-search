import React, { ReactNode } from "react";
import Fuse from "fuse.js";
declare type SearchFunction<T> = (pattern: string | Fuse.Expression, options?: Fuse.FuseSearchOptions | undefined) => Fuse.FuseResult<T>[];
declare type FuseSearchWrapperOpts<T> = {
    list: readonly T[];
    fuseOpts?: Fuse.IFuseOptions<T> | undefined;
    index?: Fuse.FuseIndex<{}> | undefined;
    searchComponentBuilder: (search: SearchFunction<T>) => ReactNode;
    resultsBuilder: (results: Fuse.FuseResult<{}>[]) => ReactNode;
};
declare type FuseSearchWrapperComponent<T = {}> = React.FC<FuseSearchWrapperOpts<T>>;
declare const FuseSearchWrapper: FuseSearchWrapperComponent;
export { FuseSearchWrapperOpts };
export default FuseSearchWrapper;
