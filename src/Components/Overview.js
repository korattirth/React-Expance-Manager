import React, { useState } from "react";

const AddExpence = (props) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("EXPENCE");

  const addTransation = () => {
    props.addTransation({
      amount: Number(amount),
      desc,
      type,
      id: Date.now(),
    });
    props.toggleCloseBtn();
  };

  return (
    <div className="container border">
      <div className="mt-3">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Details"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-center">
        <div>
          <input
            type="radio"
            name="expence"
            value="EXPENCE"
            checked={type === "EXPENCE"}
            onChange={(e) => setType(e.target.value)}
          />
          <label className="mr-2">Expence</label>
        </div>
        <div>
          <input
            type="radio"
            name="expence"
            value="INCOME"
            checked={type === "INCOME"}
            onChange={(e) => setType(e.target.value)}
          />
          <label>Income</label>
        </div>
      </div>
      <div>
        <button className="btn btn-dark w-100 mb-3" onClick={addTransation}>
          Add Transation
        </button>
      </div>
    </div>
  );
};

export const Overview = (props) => {
  const [isAddBtnVisible, settoggleAddBtn] = useState(false);
  const toggleAddBtn = () => {
    settoggleAddBtn(!isAddBtnVisible);
  };
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between m-3">
          <p className="fw-bolder">Balance : {props.isIncome - props.isExpence}</p>
          <button className="btn btn-dark" onClick={toggleAddBtn}>
            {isAddBtnVisible ? "Cancel" : "Add"}
          </button>
        </div>
        {isAddBtnVisible && (
          <AddExpence
            toggleCloseBtn={toggleAddBtn}
            addTransation={props.addTransation}
          />
        )}
        <div className="d-flex justify-content-evenly my-3">
          <div className="border w-50 mx-2 py-3 d-flex justify-content-center">
            <div>
              <span className="fw-bolder">Expence</span>
              <h3 className="text-danger">${props.isExpence}</h3>
            </div>
          </div>
          <div className="border w-50 mx-2 py-3 d-flex justify-content-center">
          <div>
              <span className="fw-bolder">Income</span>
              <h3 className="text-success">${props.isIncome}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
