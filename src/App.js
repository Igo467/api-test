import './App.css';
import { BsChevronDown, BsThreeDotsVertical } from "react-icons/bs";
import { FaClock, FaFlask, FaSkull, FaHeartBroken, FaChartLine, FaRegThumbsUp, FaPlusCircle, FaExclamationTriangle, FaProcedures } from "react-icons/fa";
import { useEffect, useState } from 'react';

function App() {
  const [covid, setCovid] = useState([]);
  const [trfl, setTrfl] = useState(false);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd97bba4197mshb6fbe782438fe21p1a1f3ajsnc5f1cf38dec6',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
    };

    fetch('https://covid-193.p.rapidapi.com/statistics', options)
      .then(response => response.json())
      .then(response => setCovid(response.response))
      .catch(err => console.error(err));
  }, []);

  console.log(covid);

  return (
    <div>
      <div className='box-fix'>
        {trfl ? (
          <BsThreeDotsVertical
            onClick={() => {
              setTrfl(!trfl);
            }}
            className='icon'
            size={"4vh"}
            color={"white"}
          />
        ) : (
          <>
            <BsChevronDown
              onClick={() => {
                setTrfl(!trfl);
              }}
              className='icon'
              size={"3.5vh"}
              color={"white"}
            />
          </>
        )}
      </div>

      <div className="bass-text">
        {/* <CovidState covid={covid}/> */}
      </div>

      <div className="covid-container">
        {covid.map((item, index) => (
          <div className="covid-item" key={index}>
            <h2>{item.country}</h2>
            <p>Continent: {item.continent}</p>
            <p>Day: {item.day}</p>
            <h3>Cases</h3>
            <p>1M_pop: {item.cases['1M_pop']}</p>
            <p>Active: {item.cases.active} <FaRegThumbsUp /></p>
            <p>Critical: {item.cases.critical} <FaExclamationTriangle /></p>
            <p>New: {item.cases.new} <FaPlusCircle /></p>
            <p>Recovered: {item.cases.recovered} <FaProcedures /></p>
            <p>Total: {item.cases.total} <FaChartLine /></p>
            <h3>Deaths</h3>
            <p>1M_pop: {item.deaths['1M_pop']}</p>
            <p>New: {item.deaths.new} <FaHeartBroken /></p>
            <p>Total: {item.deaths.total} <FaSkull /></p>
            <p>Population: {item.deaths.population}</p>
            {item.tests && (
              <>
                <h3>Tests</h3>
                <p>1M_pop: {item.tests['1M_pop']}</p>
                <p>Total: {item.tests.total} <FaFlask /></p>
                <p>Time: {item.tests.time} <FaClock /></p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
