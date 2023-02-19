// import { useEffect, useState } from "react";
// import axios from "axios";
// import JejuList from "./JejuList";

// const InData = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios
//       .get("/api")
//       .then((res) => {
//         console.log(res.data.response.body.items.item);
//       })
//       .catch(setData([]));
//   }, []);
//   return (
//     <div>
//       <JejuList data={data} />
//     </div>
//   );
// };

// export default InData;
import { useEffect, useState } from "react";
import axios from "axios";
import JejuList from "./JejuList";

function Jeju() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api").then((res) => {
      setData(res.data.response.body.items.item);
      
    });
  }, []);
  return (
    <div>
      <JejuList data={data} />
    </div>
  );
}

export default Jeju;
