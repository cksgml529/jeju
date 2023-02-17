import { useState } from "react";
import moment from "moment";
import "../style/jeju.scss";
import JejuResult from "./JejuResult";

function JejuList({ data }) {
  // 출발 or 도착
  const [go, setGo] = useState(true);
  //선택된 공항
  const [selectAir, setselectAir] = useState("제주");
  //현재시간
  const now = moment().format(`HH`);
  //시간
  const [startHour, setStartHour] = useState(now);
  const [startMin, setStartMin] = useState("00");
  const [endHour, setEndHour] = useState(Number(now) + 2);
  const [endMin, setEndMin] = useState("00");
  //분류
  const [filter, setFilter] = useState("전체");
  const [sortValue, setSortValue] = useState("전체");
  //항공사
  const [airPort, setAirPort] = useState("전체");
  const [portValue, setPortValue] = useState("전체");
  //편명
  const [plane, setPlane] = useState("");
  //   선택된 data값
  const [total, setTotal] = useState([]);

  //공항 리스트 열기
  const [openAir, setOpenAir] = useState(false);
  //구분 리스트 열기
  const [openSort, setOpenSort] = useState(false);
  //항공사 리스트 열기
  const [openCo, setOpenCo] = useState(false);

  //선택된 공항코드 값 받기
  const [airCode, setAirCode] = useState("CJU");

  // 공항 선택시 텍스트 출력+공항코드 가져오기
  const onClickAir = (e) => {
    setselectAir(e.target.innerText);
    setAirCode(e.target.dataset["apcd"]);
  };
  //   시간
  const onStartHour = (e) => {
    setStartHour(e.target.value);
  };
  const onStartMin = (e) => {
    setStartMin(e.target.value);
  };
  const onEndHour = (e) => {
    setEndHour(e.target.value);
  };
  const onEndMin = (e) => {
    setEndMin(e.target.value);
  };

  // 구분
  const onClickSort = (e) => {
    setFilter(e.target.innerText);
    // 국내.국제 value저장
    setSortValue(e.target.value);
  };
  // 항공사
  const onClickCo = (e) => {
    setAirPort(e.target.innerText);
    // 항공사 value 저장
    setPortValue(e.target.value);
  };
  //   편명 입력
  const onChangeTxt = (e) => {
    const { value } = e.target.value;
    setPlane(value);
  };
  //   조회버튼
  const totalScan = () => {
    const status = data.filter(
      (item) =>
        item.io._text === "O" &&
        go &&
        item.boardingKor._text === selectAir &&
        item.std._text >= String(startHour) + startMin &&
        item.std._text < String(endHour) + endMin &&
        item.line._text === sortValue
    );
    const statusNo = data.filter(
      (item) =>
        item.io._text === "I" &&
        !go &&
        item.arrivedKor._text === selectAir &&
        item.line._text === sortValue &&
        item.airlineKorean._text === portValue
    );

    setTotal(status);
  };
  return (
    <div className="jeju">
      <h1>제주공항</h1>

      <div className="searchAir">
        <div className="startEnd">
          <button className={go ? "on" : null} onClick={() => setGo(true)}>
            <span>출발</span>
          </button>
          <button className={go ? null : "on"} onClick={() => setGo(false)}>
            <span>도착</span>
          </button>
        </div>
        <div className="selectOption">
          <div className="selectPort">
            <h3>공항선택</h3>
            <ul className="list">
              <li onClick={() => setOpenAir(!openAir)}>
                {selectAir}
                <ul className={openAir ? "on" : null}>
                  <li className={selectAir === "서울/김포" ? "on" : null}>
                    <button data-apcd="GMP" onClick={onClickAir}>
                      서울/김포
                    </button>
                  </li>
                  <li className={selectAir === "부산/김해" ? "on" : null}>
                    <button data-apcd="PUS" onClick={onClickAir}>
                      부산/김해
                    </button>
                  </li>
                  <li className={selectAir === "제주" ? "on" : null}>
                    <button data-apcd="CJS" onClick={onClickAir}>
                      제주
                    </button>
                  </li>
                  <li className={selectAir === "대구" ? "on" : null}>
                    <button data-apcd="TAE" onClick={onClickAir}>
                      대구
                    </button>
                  </li>
                  <li className={selectAir === "울산" ? "on" : null}>
                    <button data-apcd="USN" onClick={onClickAir}>
                      울산
                    </button>
                  </li>
                  <li className={selectAir === "청주" ? "on" : null}>
                    <button data-apcd="CJJ" onClick={onClickAir}>
                      청주
                    </button>
                  </li>
                  <li className={selectAir === "무안" ? "on" : null}>
                    <button data-apcd="MWX" onClick={onClickAir}>
                      무안
                    </button>
                  </li>
                  <li className={selectAir === "광주" ? "on" : null}>
                    <button data-apcd="KWJ" onClick={onClickAir}>
                      광주
                    </button>
                  </li>
                  <li className={selectAir === "여수" ? "on" : null}>
                    <button data-apcd="RSU" onClick={onClickAir}>
                      여수
                    </button>
                  </li>
                  <li className={selectAir === "포항경주" ? "on" : null}>
                    <button data-apcd="KPO" onClick={onClickAir}>
                      포항경주
                    </button>
                  </li>
                  <li className={selectAir === "양양" ? "on" : null}>
                    <button data-apcd="YNY" onClick={onClickAir}>
                      양양
                    </button>
                  </li>
                  <li className={selectAir === "사천" ? "on" : null}>
                    <button data-apcd="HIN" onClick={onClickAir}>
                      사천
                    </button>
                  </li>
                  <li className={selectAir === "군산" ? "on" : null}>
                    <button data-apcd="KUV" onClick={onClickAir}>
                      군산
                    </button>
                  </li>
                  <li className={selectAir === "횡성/원주" ? "on" : null}>
                    <button data-apcd="WJU" onClick={onClickAir}>
                      횡성/원주
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="mBtn">
              <button className="mBtnSelect">선택</button>
            </div>
            <button className="mBtnClose">팝업닫기</button>
          </div>

          <div className="time">
            <h3>시간</h3>
            <div className="selectTime">
              <div className="startTime">
                <select
                  className="startHour"
                  onChange={onStartHour}
                  defaultValue={startHour}
                >
                  <option value="00">00</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                </select>
                <select className="startMin" onChange={onStartMin}>
                  <option value="00">00</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                  <option value="32">32</option>
                  <option value="33">33</option>
                  <option value="34">34</option>
                  <option value="35">35</option>
                  <option value="36">36</option>
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">30</option>
                  <option value="41">31</option>
                  <option value="42">32</option>
                  <option value="43">33</option>
                  <option value="44">34</option>
                  <option value="45">35</option>
                  <option value="46">36</option>
                  <option value="47">37</option>
                  <option value="48">38</option>
                  <option value="49">39</option>
                  <option value="50">50</option>
                  <option value="51">51</option>
                  <option value="52">52</option>
                  <option value="53">53</option>
                  <option value="54">54</option>
                  <option value="55">55</option>
                  <option value="56">56</option>
                  <option value="57">57</option>
                  <option value="58">58</option>
                  <option value="59">59</option>
                </select>
              </div>
              <span>~</span>
              <div className="endTime">
                <select
                  className="endHour"
                  onChange={onEndHour}
                  defaultValue={endHour}
                >
                  <option value="00">00</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                </select>
                <select className="endMin" onChange={onEndMin}>
                  <option value="00">00</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                  <option value="32">32</option>
                  <option value="33">33</option>
                  <option value="34">34</option>
                  <option value="35">35</option>
                  <option value="36">36</option>
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">30</option>
                  <option value="41">31</option>
                  <option value="42">32</option>
                  <option value="43">33</option>
                  <option value="44">34</option>
                  <option value="45">35</option>
                  <option value="46">36</option>
                  <option value="47">37</option>
                  <option value="48">38</option>
                  <option value="49">39</option>
                  <option value="50">50</option>
                  <option value="51">51</option>
                  <option value="52">52</option>
                  <option value="53">53</option>
                  <option value="54">54</option>
                  <option value="55">55</option>
                  <option value="56">56</option>
                  <option value="57">57</option>
                  <option value="58">58</option>
                  <option value="59">59</option>
                </select>
              </div>
            </div>
          </div>

          <div className="sort">
            <h3>구분</h3>
            <ul>
              <li onClick={() => setOpenSort(!openSort)}>
                {filter}
                <ul className={openSort ? "on" : null}>
                  <li className={filter === "선택" ? "on" : null}>
                    <button value="선택" onClick={onClickSort}>
                      선택
                    </button>
                  </li>
                  <li className={filter === "국내선" ? "on" : null}>
                    <button value="국내" onClick={onClickSort}>
                      국내선
                    </button>
                  </li>
                  <li className={filter === "국제선" ? "on" : null}>
                    <button value="국제" onClick={onClickSort}>
                      국제선
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="mBtn">
              <button className="mBtnSelect">선택</button>
            </div>
            <button className="mBtnClose">팝업닫기</button>
          </div>

          <div className="airLine">
            <h3>항공사</h3>
            <ul className="airList">
              <li onClick={() => setOpenCo(!openCo)}>
                {airPort}
                <ul className={openCo ? "on" : null}>
                  <li className={airPort === "전체" ? "on" : null}>
                    <button value="전체" onClick={onClickCo}>
                      전체
                    </button>
                  </li>
                  <li className={airPort === "대한항공" ? "on" : null}>
                    <button value="대한항공" onClick={onClickCo}>
                      대한항공
                    </button>
                  </li>
                  <li className={airPort === "아시아나" ? "on" : null}>
                    <button value="아시아나항공" onClick={onClickCo}>
                      아시아나
                    </button>
                  </li>
                  <li className={airPort === "에어부산" ? "on" : null}>
                    <button value="에어부산" onClick={onClickCo}>
                      에어부산
                    </button>
                  </li>
                  <li className={airPort === "에어서울" ? "on" : null}>
                    <button value="에어서울" onClick={onClickCo}>
                      에어서울
                    </button>
                  </li>
                  <li className={airPort === "제주항공" ? "on" : null}>
                    <button value="제주항공" onClick={onClickCo}>
                      제주항공
                    </button>
                  </li>
                  <li className={airPort === "진에어" ? "on" : null}>
                    <button value="진에어" onClick={onClickCo}>
                      진에어
                    </button>
                  </li>
                  <li className={airPort === "티웨이" ? "on" : null}>
                    <button value="티웨이항공" onClick={onClickCo}>
                      티웨이
                    </button>
                  </li>
                  <li className={airPort === "하이에어" ? "on" : null}>
                    <button value="하이에어" onClick={onClickCo}>
                      하이에어
                    </button>
                  </li>
                  <li className={airPort === "플라이강원" ? "on" : null}>
                    <button value="플라이강원" onClick={onClickCo}>
                      플라이강원
                    </button>
                  </li>
                  <li className={airPort === "에어로케이항공" ? "on" : null}>
                    <button value="에어로케이항공" onClick={onClickCo}>
                      에어로케이항공
                    </button>
                  </li>
                  <li className={airPort === "에어프레미아" ? "on" : null}>
                    <button value="에어프레미아" onClick={onClickCo}>
                      에어프레미아
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="mBtn">
              <button className="mBtnSelect">선택</button>
            </div>
            <button className="mBtnClose">팝업닫기</button>
          </div>
          <div className="planeName">
            <h3>편명</h3>
            <form>
              <input
                type="text"
                name="planename"
                value={plane}
                placeholder="편명 입력"
                onChange={onChangeTxt}
              />
            </form>
          </div>
          <div>
            <button onClick={totalScan} className="totalSearch">
              조회
            </button>
          </div>
        </div>
        {total ? <JejuResult display={total} /> : null}
      </div>
    </div>
  );
}

export default JejuList;
