import React, { useEffect, useState } from "react";

const TransationCell = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <div className= {props.payload.type === 'EXPENCE' ?"w-75 p-2 d-flex justify-content-between tran_box_Expence" : "w-75 p-2 d-flex justify-content-between tran_box_Income"}>
        <span className="">{props.payload.desc}</span>
        <span>{props.payload.amount}</span>
      </div>
    </div>
  );
};

export default function Transation(props) {
  const[serchText,updateSerch] = useState("")
  const[filterTransation,updateTransation] = useState(props.transation)
  const filterData = (serchText) =>{
    if(!serchText || !serchText.trim().length){
      updateTransation(props.transation)
      return;
    }
    let tran = [...props.transation]
    tran = tran.filter((payload) => payload.desc.toLowerCase().includes(serchText.toLowerCase().trim()))
    updateTransation(tran)
  }
  useEffect(()=> filterData(serchText),[props.transation])
  return (
    <>
      <div className="container">
        <div className="w-100 d-flex justify-content-center">
          <input
          value={serchText}
          onChange={(e) => { updateSerch(e.target.value); filterData(e.target.value) }}
            id="search-focus"
            type="search"
            className="form-control w-75"
            placeholder="Serch"
          />
        </div>
        {filterTransation?.length
          ? filterTransation.map((payload) => (
              <TransationCell payload={payload} />
            ))
          : ""}
      </div>
    </>
  );
}
