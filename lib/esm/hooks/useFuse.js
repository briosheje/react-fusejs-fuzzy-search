import Fuse from "fuse.js";
import { useCallback, useMemo, useState } from "react";
export default function useFuse(list, fuseOpts, index) {
    var _a = useState([]), results = _a[0], setResults = _a[1];
    var fuseInstance = useMemo(function () {
        return new Fuse(list, fuseOpts, index);
    }, [list, fuseOpts, index]);
    var search = useCallback(function (pattern, options) {
        var fuseResults = fuseInstance.search(pattern, options);
        setResults(fuseResults);
        return fuseResults;
    }, [fuseInstance]);
    return {
        fuseInstance: fuseInstance,
        search: search,
        results: results,
    };
}
