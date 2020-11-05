import React from "react";
import "./App.css";
import Breadcrumb from "aod-dependencies/Breadcrumb";
import { Toggle } from "aod-dependencies/Toggle";
import { initializeIcons } from "aod-dependencies/@uifabric/icons";
import { Wrapper } from "./AppStyle";

initializeIcons();

function App() {
  const [darkMode, setDarkMode] = React.useState<string>("");
  //<BreadcrumbGetData>
  const onClickActionBreadcrumb = () => {
    console.log("click");
  };
  //</BreadcrumbGetData>
  const onChangeMode = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
    }
    if (darkMode !== "dark") {
      setDarkMode("dark");
    }
  };
  const BreadcrumbData = [
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
                      ],
                    },
                    { id: "cal", text: "Calendar", data: "./aa", child: [] },
                    { id: "btn", text: "Button", data: "./aa", child: [] },
                  ],
                },
              ],
            },
            { id: "be", text: "Backend Frontend", data: "./aa", child: [] },
          ],
        },
        { id: "fe2", text: "Frontend", data: "./aa", child: [] },
      ],
    },
  ];
  return (
    <div className="App">
      <Wrapper theme={darkMode}>
        <div className="toggle-wrapper">
          <Toggle label="Dark mode" onChange={onChangeMode} />
        </div>
        <Breadcrumb
          child={BreadcrumbData}
          // <BreadcrumbDarkMode>
          darkMode="dark"
          // </BreadcrumbDarkMode>
          onClick={onClickActionBreadcrumb}
        />
      </Wrapper>
    </div>
  );
}

export default App;
