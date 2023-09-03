import React from "react";

export default function Money({price}) {

  const moneys = [];

  for (let i = 0; i < price; i++) {
    moneys.push(<img src="../../public/img/moneda.png" alt="Moneda" className="h-5" key={i} />);
  }

  return(
    <div className="flex">{moneys}</div>
  )
}