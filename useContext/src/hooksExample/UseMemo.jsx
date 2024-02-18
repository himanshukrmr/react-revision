import React, { useMemo, useState } from "react";

function UseMemo() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const isEven = useMemo(() =>{
    let i = 0;
    while(i<2000000000) i++;
    return countOne%2 === 0;
},[countOne]);

  return (
    <div>
      <button
        onClick={() => {
          setCountOne(countOne + 1);
        }}
      >
        Counter 1 = {countOne}
      </button>
      <span> {isEven ? "Even" : "Odd" }</span>
      <button
        onClick={() => {
          setCountTwo(countTwo + 1);
        }}
      >
        Counter 2 = {countTwo}
      </button>
    </div>
  );
}

export default UseMemo;
