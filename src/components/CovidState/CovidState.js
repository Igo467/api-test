import React from "react";



function CovidState({covid}) {
  // return (
  //   <div>
  //     {covid.map((item, index) => (
  //       <div key={index}>
  //         <h2>{item.country}</h2>
  //         <p>Continent: {item.continent}</p>
  //         <p>Day: {item.day}</p>
  //         <h3>Cases</h3>
  //         <p>1M_pop: {item.cases['1M_pop']}</p>
  //         <p>Active: {item.cases.active}</p>
  //         <p>Critical: {item.cases.critical}</p>
  //         <p>New: {item.cases.new}</p>
  //         <p>Recovered: {item.cases.recovered}</p>
  //         <p>Total: {item.cases.total}</p>
  //         <h3>Deaths</h3>
  //         <p>1M_pop: {item.deaths['1M_pop']}</p>
  //         <p>New: {item.deaths.new}</p>
  //         <p>Total: {item.deaths.total}</p>
  //         <p>Population: {item.deaths.population}</p>
  //         {item.tests && (
  //           <>
  //             <h3>Tests</h3>
  //             <p>1M_pop: {item.tests['1M_pop']}</p>
  //             <p>Total: {item.tests.total}</p>
  //             <p>Time: {item.tests.time}</p>
  //           </>
  //         )}
  //       </div>
  //     ))}
  //   </div>
  // );
}

export default CovidState
