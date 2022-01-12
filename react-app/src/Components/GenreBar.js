import React, {useState} from "react";
import'./GenreBar.css';

export default GenreBar;
function GenreBar({placeholder, data}) {

    const [filteredData, setFilteredData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        console.log("s:",searchWord)
        console.log("d:",data)
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
        <div className="searchG">
            <div className="searchInputsG">
                <input type="text" placeholder={placeholder} onChange={handleFilter}/>

            </div>
            
        {filteredData.length != 0 && (
            <div className="results">
                {filteredData.map((value, key) => {
                    return (
                        <a className="dataItem" href={"http://127.0.0.1:8000/api/anime_search/?genre=" + value} target="_blank">
                            <p>{value}</p>
                        </a>
                    );
                })}
            </div>
        )}    
        </div>
    );
}

