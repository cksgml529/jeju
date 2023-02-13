import axios from "axios";
import { useEffect, useState } from "react";
import XMLParser from "react-xml-parser";

const url =
  "http://openapi.airport.co.kr/service/rest/FlightScheduleList/getDflightScheduleList";

function JejuSearch() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(url, {
      params: {
        seviceKey: process.env.REACT_APP_SURVICE_KEY,
        numOfRows: 10,
        pageNo: 10,
      },
    });
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>제주공항</h1>
      <p>항공사 홈페이지:</p>
      <p>항공사:</p>
      <p>출발공항:</p>
      <p>출발시간:</p>
      <p>도착공항:</p>
      <p>도착시간:</p>
      {/* <form>
        <p>출발공항</p>
        <select>
          <option value="GMP/ICN">서울/김포</option>
          <option value="PUS">부산/김해</option>
          <option value="CJU">제주</option>
          <option value="TAE">대구</option>
        </select>
        <p>도착공항</p>
        <select>
          <option value="GMP/ICN">서울/김포</option>
          <option value="PUS">부산/김해</option>
          <option value="CJU">제주</option>
          <option value="TAE">대구</option>
        </select>
        <button>조회</button>
      </form> */}
    </div>
  );
}

export default JejuSearch;
