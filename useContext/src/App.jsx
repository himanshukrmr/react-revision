import React from "react";
import Component1 from "./components/Component1";
import ReducerExample from "./hooksExample/ReducerExample";
import UseMemo from "./hooksExample/UseMemo";

export const userContext = React.createContext('Default Value');

const App = () => {
  return (
    <div>
      {/* <userContext.Provider value={'Himanshu Learned ContextAPI'}>
        <Component1 />
      </userContext.Provider> */}
      {/* <ReducerExample/> */}
      <UseMemo/>
    </div>
  );
};

export default App;
