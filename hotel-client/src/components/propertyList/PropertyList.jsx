import "./propertyList.css"
import imgApartment from "../Images/Apartments.jpg"
import imgHotels from "../Images/Hotels.jpg"
import imgResorts from "../Images/Resorts.jpg"
import imgRooms from "../Images/Rooms.jpg"
export default function PropertyList() {
    return (

        <div className="PropertyList">

            <div className="PropertyItems">
                <img src={imgHotels} alt="" className="PropertyListImg" />
                <div className="PropertyListTitles">
                    <h1>Hotels</h1>
                    <h2>35 Hotels</h2>
                </div>
            </div>

            <div className="PropertyItems">
                <img src={imgResorts} alt="" className="PropertyListImg" />
                <div className="PropertyListTitles">
                    <h1>Resorts</h1>
                    <h2>20 Resorts</h2>
                </div>
            </div>
            <div className="PropertyItems">
                <img src={imgApartment} alt="" className="PropertyListImg" />
                <div className="PropertyListTitles">
                    <h1>Apartments</h1>
                    <h2>50 Apartments</h2>
                </div>
            </div>
            <div className="PropertyItems">
                <img src={imgRooms} alt="" className="PropertyListImg" />
                <div className="PropertyListTitles">
                    <h1>Rooms</h1>
                    <h2>120 Rooms</h2>
                </div>
            </div>
        </div>

    );
}
