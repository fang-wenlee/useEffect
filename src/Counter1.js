import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  //ComponentDidMount, ran one time when component mounting
  // useEffect(() => {
  //   console.log("The user Effect ran");
  // }, []);

  //ComponentDidMount, ran one time when component mounting
  //however, dependency relay on variable count
  //it will run once evertime the count change; this is equilance
  // to componentDidUpdate

  // useEffect(() => {
  //   console.log("The user Effect ran");
  // }, [count]);
  //=============================================
  // useEffect(() => {
  //   console.log("The user Effect ran");
  // });
  //=============================================
  // return for ComponentWillUnmoounted
  // useEffect(() => {
  //   console.log("The user Effect ran ");
  //   // return () => {
  //   //   console.log("the component unMounted");
  //   // };
  // }, [count, count2]);

  useEffect(() => {
    console.log("The count has updated ", { count });
    return () => {
      console.log("the component unMounted", { count });
    };
  }, [count]);
  return (
    <div>
      <h6> Counter </h6>
      <p>
        {" "}
        current count: {count} Count 2: {count2}{" "}
      </p>
      <button onClick={() => setCount(count + 1)}>increment the count</button>
      <button onClick={() => setCount(count - 1)}>decrement the count </button>

      <button onClick={() => setCount2(count2 + 1)}>
        Increment the count{" "}
      </button>
    </div>
  );
};
export default Counter;
