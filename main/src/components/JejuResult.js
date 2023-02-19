import { BsArrowRightShort } from "react-icons/bs";
import moment from "moment";
import "../style/jejuResult.scss";
import { useRef } from "react";

function JejuResult({ display }) {
  const array = display.slice(0,3);
  return (
    <div className="jejuResult">
      <ul>
        {array.map((item) => {
          return (
            <li>
              <div className="delayTime">
                <p>{moment(item.std._text,'HHmm').format('HH:mm')}</p>
                <span>
                  <BsArrowRightShort />
                </span>
                <p className="charge">{moment(item.etd._text,'HHmm').format('HH:mm')}</p>  
              </div>
              <div className="airName">
                <span>{item.line._text}</span>
                <p>{item.airFln._text}</p>
                <span>{item.airlineKorean._text}</span>
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
