import Fuse from "fuse.js";
export default function useFuse<T>(list: readonly T[], fuseOpts?: Fuse.IFuseOptions<T> | undefined, index?: Fuse.FuseIndex<T> | undefined): {
    fuseInstance: Fuse<T>;
    search: (pattern: string | Fuse.Expression, options?: Fuse.FuseSearchOptions | undefined) => Fuse.FuseResult<T>[];
    results: Fuse.FuseResult<T>[];
};
