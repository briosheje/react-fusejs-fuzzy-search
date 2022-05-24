import Fuse from "fuse.js";
import { useCallback, useMemo, useState } from "react";

export default function useFuse<T>(
  list: readonly T[],
  fuseOpts?: Fuse.IFuseOptions<T> | undefined,
  index?: Fuse.FuseIndex<T> | undefined
) {
  const [results, setResults] = useState<Fuse.FuseResult<T>[]>([]);

  const fuseInstance = useMemo(() => {
    return new Fuse(list, fuseOpts, index);
  }, [list, fuseOpts, index]);

  const search = useCallback(
    (
      pattern: string | Fuse.Expression,
      options?: Fuse.FuseSearchOptions | undefined
    ) => {
      const fuseResults = fuseInstance.search(pattern, options);
      setResults(fuseResults);

      return fuseResults;
    },
    [fuseInstance]
  );

  return {
    fuseInstance,
    search,
    results,
  };
}
