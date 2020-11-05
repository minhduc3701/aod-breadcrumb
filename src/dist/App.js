"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Breadcrumb_1 = require("aod-dependencies/Breadcrumb");
var Toggle_1 = require("aod-dependencies/Toggle");
var icons_1 = require("aod-dependencies/@uifabric/icons");
var AppStyle_1 = require("./AppStyle");
icons_1.initializeIcons();
function App() {
    var _a = react_1["default"].useState(""), darkMode = _a[0], setDarkMode = _a[1];
    //<BreadcrumbGetData>
    var onClickActionBreadcrumb = function () {
        console.log("click");
    };
    //</BreadcrumbGetData>
    var onChangeMode = function () {
        if (darkMode === "dark") {
            setDarkMode("light");
        }
        if (darkMode !== "dark") {
            setDarkMode("dark");
        }
    };
    var BreadcrumbData = [
        {
            id: "ad",
            text: "Add-on",
            data: "./aa",
            child: [
                {
                    id: "365",
                    text: "RC365",
                    data: "./aa",
                    child: [
                        {
                            id: "fe",
                            text: "Frontend",
                            data: "./aa",
                            child: [
                                {
                                    id: "nmd",
                                    text: "Đức",
                                    data: "./xadan",
                                    child: [
                                        {
                                            id: "tree",
                                            text: "TreeView",
                                            data: "./aa",
                                            child: [
                                                { id: "", text: "Node", data: "./aa", child: [] },
                                            ]
                                        },
                                        { id: "cal", text: "Calendar", data: "./aa", child: [] },
                                        { id: "btn", text: "Button", data: "./aa", child: [] },
                                    ]
                                },
                            ]
                        },
                        { id: "be", text: "Backend Frontend", data: "./aa", child: [] },
                    ]
                },
                { id: "fe2", text: "Frontend", data: "./aa", child: [] },
            ]
        },
    ];
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(AppStyle_1.Wrapper, { theme: darkMode },
            react_1["default"].createElement("div", { className: "toggle-wrapper" },
                react_1["default"].createElement(Toggle_1.Toggle, { label: "Dark mode", onChange: onChangeMode })),
            react_1["default"].createElement(Breadcrumb_1["default"], { child: BreadcrumbData, 
                // <BreadcrumbDarkMode>
                darkMode: "dark", 
                // </BreadcrumbDarkMode>
                onClick: onClickActionBreadcrumb }))));
}
exports["default"] = App;
