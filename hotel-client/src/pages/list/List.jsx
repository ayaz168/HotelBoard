import "./List.css"
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import { DateRange } from 'react-date-range';
import { format } from "date-fns"
import { useLocation } from "react-router-dom"
import { useState } from "react";

export default function List() {
    const location = useLocation();
    console.log(location);
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [showDate, setShowDate] = useState(false);
    const [options, setOptions] = useState(location.state.occupants);



    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="listSearchTitle">Search</h1>
                        <div className="lsItem">
                            <label >Destination</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="lsItem">
                            <label >Check-In Date</label>
                            <span onClick={() => setShowDate(!showDate)}> {`${format(date[0].startDate, "dd/MM/yy")} to ${format(date[0].endDate, "dd/MM/yy")}`}</span>
                            {showDate && <DateRange
                                onChange={item => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}

                            />}
                        </div>
                        <div className="lsItem">
                            <label >Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Min Price <small>(per night)</small></span>
                                    <input type="number" min={1} className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Max Price <small>(per night)</small></span>
                                    <input type="number" min={10} className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Adult</span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.adults} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Children</span>
                                    <input type="number" min={0} className="lsOptionInput" placeholder={options.childrens} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Room</span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.rooms} />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    );
}
