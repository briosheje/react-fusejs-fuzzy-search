"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
var react_1 = __importDefault(require("react"));
var useFuse_1 = __importDefault(require("../hooks/useFuse"));
var FuseSearchWrapper = function (props) {
    var list = props.list, fuseOpts = props.fuseOpts, index = props.index, searchComponentBuilder = props.searchComponentBuilder, resultsBuilder = props.resultsBuilder;
    var _a = (0, useFuse_1.default)(list, fuseOpts, index), search = _a.search, results = _a.results;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        searchComponentBuilder(search),
        resultsBuilder(results)));
};
exports.default = FuseSearchWrapper;
