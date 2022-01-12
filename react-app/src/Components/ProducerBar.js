import React, {useState} from "react";
import './ProducerBar.css';

export default ProducerBar;
function ProducerBar({placeholder, data}) {

    const [filteredData, setFilteredData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        if(data !== undefined){
            const predetermineWord = data.filter((value) => {
    
                return value !== undefined && value.toLowerCase().includes(searchWord.toLowerCase());
            });
            if (searchWord === "") {
                setFilteredData([]);
            }
            else {
                setFilteredData(predetermineWord);
            }
        }
    }

    return (
        <div className="searchP">
            <div className="searchInputsP">
                <input type="text" placeholder={placeholder} onChange={handleFilter}/>

            </div>
            
        {filteredData.length != 0 && (
            <div className="results">
                {filteredData.map((value, key) => {
                    return (
                        <a className="dataItem" href={"http://127.0.0.1:8000/api/anime_search/?producer=" + value} target="_blank">
                            <p>{value}</p>
                        </a>
                    );
                })}
            </div>
        )}    
        </div>
    );
}

