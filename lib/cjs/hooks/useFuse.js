"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fuse_js_1 = __importDefault(require("fuse.js"));
var react_1 = require("react");
function useFuse(list, fuseOpts, index) {
    var _a = (0, react_1.useState)([]), results = _a[0], setResults = _a[1];
    var fuseInstance = (0, react_1.useMemo)(function () {
        return new fuse_js_1.default(list, fuseOpts, index);
    }, [list, fuseOpts, index]);
    var search = (0, react_1.useCallback)(function (pattern, options) {
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
exports.default = useFuse;
