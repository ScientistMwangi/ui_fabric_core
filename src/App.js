import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  //topography fontwight semibold,bold,regular,fontsize  //communicationPrimary
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row ">
        <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2 ms-bgColor-themeDarker">
          A
        </div>
        <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10  ms-bgColor-tealDark">
          B
        </div>
      </div>
      <div>
        <span className="ms-font-su ms-fontColor-themePrimary">
          Big blue text
        </span>
      </div>
      <p className="ms-fontSize-42 ms-fontWeight-bold">Icons</p>
      <ul type="square">
        <li>
          <i className="ms-Icon ms-Icon--Mail" aria-hidden="true" />
        </li>
        <li>
          <i className="ms-Icon ms-Icon--AccessLogo" aria-hidden="true" />
        </li>
        <li>
          <i className="ms-Icon ms-Icon--ContactInfo" aria-hidden="true" />
        </li>
        <li>
          <i className="ms-Icon ms-Icon--FabricSyncFolder" aria-hidden="true" />
        </li>
      </ul>
      <div className="ms-BrandIcon--icon96 ms-BrandIcon--word" />
      <div className="ms-BrandIcon--icon48 ms-BrandIcon--project" />
      <div className="ms-BrandIcon--icon48 ms-BrandIcon--csv" />
      <div className="ms-BrandIcon--icon16 ms-BrandIcon--visio" />
      <div className="ms-Grid-row ">
        <div className="ms-Grid-col ms-sm3 ms-md3 ms-lg3 ms-bgColor-themePrimary">
          {" "}
        </div>
        <div className="ms-Grid-col ms-sm3 ms-md3 ms-lg3 ms-bgColor-redDarkBorderHover">
          {" "}
        </div>
        <div className="ms-Grid-col ms-sm3 ms-md3 ms-lg3 ms-bgColor-themePrimary">
          {" "}
        </div>
        <div className="ms-Grid-col ms-sm3 ms-md3 ms-lg3 ms-bgColor-themePrimary">
          {" "}
        </div>
      </div>
    </div>
  );
}

export default App;
