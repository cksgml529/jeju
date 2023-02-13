import axios from "axios";
import { useEffect } from "react";
import JejuSearch from "./components/JejuSearch";

const InData = ()=>{
  const callApi = async()=>{
    axios.get('/api').then((res)=>console.log(res));
  }
  useEffect(()=>{
  callApi();
},[]);
return <div>
  <JejuSearch/>
</div>;
};

export default InData;