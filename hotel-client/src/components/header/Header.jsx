import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faPlane, faCar, faCab, faCalendarCheck, faPerson } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from "react";
import { format } from "date-fns"



export default function Header() {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }
    ]);

    const [openOccupants, setOpenOccupants] = useState(false)
    const [occupants, setOccupants] = useState({
        adults: 1,
        childrens: 0,
        rooms: 1,
    }
    );
    const handleOptions = (name, opr) => {
        setOccupants(prev => {
            return {
                ...prev, [name]: opr === "i" ? occupants[name] + 1 : occupants[name] - 1,
            }
        })

    }

    return (<div className="header">
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItems active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Close Attractions</span>
                </div>
                <div className="headerListItems">
                    <FontAwesomeIcon icon={faCab} />
                    <span>Airport Cab</span>
                </div>
            </div>
            <h1 className="headerTitle">An online hotel booking system for Pakistan</h1>
            <p className="headerDesc">With amazing dicounts, a huge database of hotels in all of Pakistan this is the best
                place to book hotel rooms for your next trip</p>
            <button className="headerBtn">Sign In / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon" />
                    <input type="text" placeholder="Where to?" className="headerSearchInput" />

                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarCheck} className="headerIcon" />
                    <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/mm/yy")} to ${format(date[0].endDate, "dd/mm/yy")}`}</span>
                    {openDate && <DateRange editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        className="date"
                        ranges={date} />}
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <span className="headerSearchText" onClick={() => { setOpenOccupants(!openOccupants) }} >{`${occupants.adults} adults : ${occupants.childrens} childrens : ${occupants.rooms}  rooms`}</span>
                    {openOccupants && <div className="options">
                        <div className="optionItems">
                            <span className="optionsText">Adults</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton" disabled={occupants.adults <= 1} onClick={() => { handleOptions("adults", "d") }}>-</button>
                                <span className="optionCounterNumber">{occupants.adults}</span>
                                <button className="optionCounterButton" disabled={occupants.adults >= 4} onClick={() => { handleOptions("adults", "i") }}>+</button>
                            </div>
                        </div>
                        <div className="optionItems">
                            <span className="optionsText">Children</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton" disabled={occupants.childrens <= 0} onClick={() => { handleOptions("childrens", "d") }}>-</button>
                                <span className="optionCounterNumber">{occupants.childrens}</span>
                                <button className="optionCounterButton" disabled={occupants.adults >= 4} onClick={() => { handleOptions("childrens", "i") }}>+</button>
                            </div>
                        </div>
                        <div className="optionItems">
                            <span className="optionsText">Rooms</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton" disabled={occupants.rooms <= 1} onClick={() => { handleOptions("rooms", "d") }}>-</button>
                                <span className="optionCounterNumber">{occupants.rooms}</span>
                                <button className="optionCounterButton" disabled={occupants.rooms >= 4} onClick={() => { handleOptions("rooms", "i") }}>+</button>
                            </div>
                        </div>

                    </div>}

                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn">Search</button>
                </div>
            </div>

        </div>
    </div>);
}
