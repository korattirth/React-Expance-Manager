import { useEffect, useState } from "react";
import { Overview } from "./Components/Overview";
import Transation from "./Components/Transation";
function App() {
  const [transations, updateTransation] = useState([]);
  const [isExpence, setExpence] = useState(0);
  const [isIncome, setIncome] = useState(0);
  const addTransation = (payload) => {
    const updateArray = [...transations];
    updateArray.push(payload);
    updateTransation(updateArray);
  };
  const calcBalance = (payload) => {
    let exc = 0;
    let inc = 0;
    transations.map((payload) => {
      payload.type === "EXPENCE"
        ? (exc = exc + payload.amount)
        : (inc = inc + payload.amount);
    });
    setExpence(exc);
    setIncome(inc);
  };
  useEffect(() => calcBalance(), [transations]);
  return (
    <div className="App">
      <div className="main_con">
        <div className="header m-3">
          <p>Expence Manage</p>
        </div>
        <Overview addTransation={addTransation} isExpence = {isExpence} isIncome = {isIncome} />
        <Transation transation={transations} />
      </div>
    </div>
  );
}

export default App;
