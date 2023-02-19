import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import "../style/jejuResult.scss";

function JejuResult({ display }) {
const [time,setTime] = useState(display.std._text);
const [delay,setDelay] = useState(null);
  return (
    <div className="jejuResult">
      <ul>
        {display.map((item, idx) => {
          
          return (
            <li key={item.idx}>
              <div className="delayTime">
                <p>{time}</p>
                <span>
                  <BsArrowRightShort />
                </span>
                <p className="charge">{item.etd._text}</p>  
              </div>
              <div className="airName">
                <span>{item.airFln._text}</span>
                <p>{item.airlineKorean._text}</p>
              </div>
              <div className="nowStatus">
                <span>{item.rmkKor._text ? item.rmkKor._text : "지연"}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default JejuResult;
