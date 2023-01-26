import { useState } from "react";
import { ClearInterval } from "./components/ClearInterval";
import { Clock } from "./components/Clock";
import { MainFile } from "./components/customHook/MainFile";
import { FocusInput } from "./components/FocusInput";
import { FormValidation } from "./components/FormValidation";
import ClickCoutner from "./components/HOC/ClickCoutner";
import HoverCounter from "./components/HOC/HoverCounter";
import { MainRoutes } from "./components/MainRoutes";
import { OpitmisationMain } from "./components/optimisation/OptimisationMain";
import SearchList from "./components/SearchList";
import { ShowImg } from "./components/ShowImg";
import { UnControlledForm } from "./components/UnControlledForm";
import { UseRef } from "./components/UseRef";
import { Variable } from "./components/Variable";
import "./styles.css";

export default function App() {
  return (
    <>
      <div>
        {/* <ShowImg /> */}
        {/* <Clock /> */}
        {/* <Variable /> */}
        {/* <FocusInput /> */}
        {/* <FormValidation /> */}
        {/* <OpitmisationMain /> */}
        {/* <MainRoutes /> */}
        {/* <UseRef /> */}
        {/* <MainFile /> */}
        {/* <SearchList /> */}
        <ClickCoutner />
        <HoverCounter />
      </div>
    </>
  );
}
