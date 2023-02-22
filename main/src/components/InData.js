
import React from "react";
import JejuSearch from "./JejuSearch";

function InData() {
  const API = () => {
    const callApi = async () => {
      axios.get("/api").then((res) => console.log(res));
    };
    useEffect(() => {
      callApi();
    }, []);
  };
  return (
    <div>
      <JejuSearch />
    </div>
  );
}

export default InData;
