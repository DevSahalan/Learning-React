import React, { useState, useCallback } from "react";
import Title from "./memo-usecallback/Title";
import Counter from "./memo-usecallback/Counter";
import Button from "./memo-usecallback/Button";

function App3() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(10000);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Counter text="age" counter={age} />
      <Button text="age" handleIncreament={incrementAge} />
      <Counter text="salary" counter={salary} />
      <Button text="salary" handleIncreament={incrementSalary} />
    </div>
  );
}

export default App3;

// codeevolution
