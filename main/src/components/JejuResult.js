import { BsArrowRightShort } from "react-icons/bs";
import moment from "moment";
import "../style/jejuResult.scss";

function JejuResult({ display }) {
  return (
    <div className="jejuResult">
      {display.length === 0 ? (
        <p>현재 운항중인 항공사가 존재하지 않습니다.</p>
      ) : (
        <ul>
          {display.map((item) => {
            return (
              <li>
                <div className="delayTime">
                  <p>{moment(item.std._text, "HHmm").format("HH:mm")}</p>
                  <span>
                    <BsArrowRightShort />
                  </span>
                  <p className="charge">
                    {moment(item.std._text, "HHmm").format("HH:mm")}
                  </p>
                </div>
                <div className="airName">
                  <span>{item.line._text}</span>
                  <p>{item.airFln._text}</p>
                  <p>{item.airlineKorean._text}</p>
                </div>
                <div className="nowStatus">
                  <span>{item.rmkKor._text ? item.rmkKor._text : "지연"}</span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default JejuResult;
