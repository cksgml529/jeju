import axios from "axios";
import { useEffect, useState } from "react";
import "../style/jejusearch.scss";

const InData = () => {
  // const now = new Date();
  // const todayTime = new Date(
  //   now.getTime() - now.getTimezoneOffset() * 60000
  // ).toISOString();
  // const [startTime, setStartTime] = useState(todayTime);
  const [selectAir, setselectAir] = useState("제주");
  const [startHour, setStartHour] = useState(0);
  const [startMin, setStartMin] = useState(0);
  const [endHour, setEndHour] = useState(0);
  const [endMin, setEndMin] = useState(0);
  const [filter, setFilter] = useState("");
  const [airPort, setAirPort] = useState("");
  const [plane, setPlane] = useState("");

  const [open, setOpen] = useState(false);
  const onClickItem = (e) => setselectAir(e.target.value);
  const callApi = async () => {
    axios.get("/api").then((res) => console.log(res));
  };
  useEffect(() => {
    callApi();
  }, []);
  return (
    <div>
      <div className="jeju">
        <h1>제주공항</h1>
        <div className="startEnd">
          <button>
            <span>출발</span>
          </button>
          <button>
            <span>도착</span>
          </button>
        </div>

        <div className="searchAir">
          <div className="selectPort">
            <h3>공항선택</h3>
            <ul className="list">
              <li onClick={() => setOpen(!open)}>
                {selectAir}
                <ul classname={open ? "on" : null}>
                  <li>
                    <button value="서울/김포" onClick={onClickItem}>
                      서울/김포
                    </button>
                  </li>
                  <li>
                    <button value="부산/김해" onClick={onClickItem}>
                      부산/김해
                    </button>
                  </li>
                  <li>
                    <button value="대구" onClick={onClickItem}>
                      대구
                    </button>
                  </li>
                  <li>
                    <button value="울산" onClick={onClickItem}>
                      울산
                    </button>
                  </li>
                  <li>
                    <button value="무안" onClick={onClickItem}>
                      무안
                    </button>
                  </li>
                  <li>
                    <button value="광주" onClick={onClickItem}>
                      광주
                    </button>
                  </li>
                  <li>
                    <button value="여수" onClick={onClickItem}>
                      여수
                    </button>
                  </li>
                  <li>
                    <button value="포항경주" onClick={onClickItem}>
                      포항경주
                    </button>
                  </li>
                  <li>
                    <button value="양양" onClick={onClickItem}>
                      양양
                    </button>
                  </li>
                  <li>
                    <button value="사천" onClick={onClickItem}>
                      사천
                    </button>
                  </li>
                  <li>
                    <button value="군산" onClick={onClickItem}>
                      군산
                    </button>
                  </li>
                  <li>
                    <button value="횡성/원주" onClick={onClickItem}>
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

          <div className="Time">
            <h3>시간</h3>
            <div className="selectTime">
              <div className="startTime">
                <select className="startHour">
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
                <select className="startMin">
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
                <select className="endHour">
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
                <select className="endtMin">
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
            <div className="sort">
              <h3>구분</h3>
              <ul>
                <li>
                  {filter}
                  <ul>
                    <li>
                      <button value="전체">전체</button>
                    </li>
                    <li>
                      <button value="국내선">국내선</button>
                    </li>
                    <li>
                      <button value="국제선">국제선</button>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="mBtn">
                <button className="mBtnSelect">선택</button>
              </div>
              <button className="mBtnClose">팝업닫기</button>
            </div>
            <div className="airline">
              <ul>
                <li>
                  {airPort}
                  <ul>
                    <li>
                      <button value="선택">선택</button>
                    </li>
                    <li>
                      <button value="대한항공">대한항공</button>
                    </li>
                    <li>
                      <button value="아시아나">아시아나</button>
                    </li>
                    <li>
                      <button value="에어부산">에어부산</button>
                    </li>
                    <li>
                      <button value="에어서울">에어서울</button>
                    </li>
                    <li>
                      <button value="제주항공">제주항공</button>
                    </li>
                    <li>
                      <button value="진에어">진에어</button>
                    </li>
                    <li>
                      <button value="티웨이">티웨이</button>
                    </li>
                    <li>
                      <button value="하이에어">하이에어</button>
                    </li>
                    <li>
                      <button value="플라이강원">플라이강원</button>
                    </li>
                    <li>
                      <button value="에어로케이항공">에어로케이항공</button>
                    </li>
                    <li>
                      <button value="에어프레미아">에어프레미아</button>
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
              <form>
                <input
                  type="text"
                  name="planename"
                  value={plane}
                  placeholder="편명 입력"
                />
              </form>
            </div>
          </div>
        </div>
        <button className="totalSearch">조회</button>
      </div>
    </div>
  );
};

export default InData;
