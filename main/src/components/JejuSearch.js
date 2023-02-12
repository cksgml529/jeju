import axios from 'axios';
import {useEffect} from 'react';

function JejuSearch() {

    return (
        <div>
            <h1>제주공항</h1>
            <form>
                <select>
                <p>공항</p>
                    <option>서울/김포</option>
                    <option>부산/김해</option>
                    <option>제주</option>
                    <option>부산</option>
                    <option>전주</option>
                </select>
            </form>
        </div>
    );
}

export default JejuSearch;