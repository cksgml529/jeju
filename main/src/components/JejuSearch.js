import React, { useState } from 'react';

function JejuSearch(props) {
  const [start,setStart] = useState('');
  return (
    <div>
      <h1>제주항공</h1>
      <form>
        <h3>출발공항</h3>
        <select>
          <option value={start}>서울/김포</option>
          <option value={start}>제주</option>
        </select>
      </form>
    </div>
  );
}

export default JejuSearch;