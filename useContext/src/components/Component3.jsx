import React,  {useContext} from "react";
import {userContext} from "../App";

const Component3 = () => {
  const user = useContext(userContext);

  return (<div>{user}</div>);
};

export default Component3;
