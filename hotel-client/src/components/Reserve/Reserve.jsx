import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch"
import "./Reserve.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";
const axios = require("axios");

export default function Reserve({ setOpen, hotelId }) {
  const { data, loading, error } = useFetch(`http://localhost:8780/hotels/room/${hotelId}`);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [showMessage, setShowMessage] = useState(false); //TO Show Confirmation Message
  const { dates } = useContext(SearchContext);
  const navigate = useNavigate();
  console.log(data);

  const getDatesInRange = (startX, endX) => {
    const start = new Date(startX);
    const end = new Date(endX);
    const date = new Date(start.getTime());
    let lX = []
    while (date <= end) {
      lX.push(new Date(date).getTime()); //.getTime() as storing dates in a time stamp format
      date.setDate(date.getDate() + 1);
    }
    return lX;
  };
  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    //if any of datestamp in allDates is in unavailable dates don't let it get checked
    const isFound = roomNumber.unavailableDates.some(date =>
      allDates.includes(new Date(date).getTime()));
    return !isFound; //if true that means dates unavailable
  }

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;

    setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter(item => item !== value))//if checked take the previous rooms and
  }

  const handleClick = async () => {
    try {
      await Promise.all(selectedRooms.map(roomN => {
        const res = axios.put(`http://localhost:8780/rooms/available/${roomN}`, { dates: allDates });
        return res.data;
      })

      )
      setOpen(false);
      navigate("/");
      //setShowMessage(true);
    } catch (err) {

    }

  }

  return (
    <div className="reserve">
      <div className="reserveContainer">
        <FontAwesomeIcon icon={faCircleXmark} className="reserverClose" onClick={() => setOpen(false)} />
        <span>  Select Rooms:</span>

        {data?.map(item => (
          <div className="reserveItem">
            <div className="reserveItemInfo">
              <div className="reserveTitle">{item.Title}</div>
              <div className="reserveDescription">{item.Description}</div>
              <div className="reserveOccupants">Maximum Occupancy: <b>{item.MaxOccupants}</b></div>
              <div className="reservePrice">{item.RoomPrice}</div>
            </div>
            <div className="reserveSelectRooms">


              {item.roomNumbers.map(roomNumber => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input disabled={!isAvailable(roomNumber)} type="checkbox" value={roomNumber._id} onChange={handleSelect} />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="reserveButton">Reserve Now</button>
      </div>
    </div>);
}
