/* eslint-disable no-unused-vars */
import React from "react";
import useFuse from "../hooks/useFuse";
var FuseSearchWrapper = function (props) {
    var list = props.list, fuseOpts = props.fuseOpts, index = props.index, searchComponentBuilder = props.searchComponentBuilder, resultsBuilder = props.resultsBuilder;
    var _a = useFuse(list, fuseOpts, index), search = _a.search, results = _a.results;
    return (React.createElement(React.Fragment, null,
        searchComponentBuilder(search),
        resultsBuilder(results)));
};
export default FuseSearchWrapper;
