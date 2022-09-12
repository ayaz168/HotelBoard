import "./searchItem.css"
import imgRoom from "../Images/froom.jpg"
import { Link } from "react-router-dom"

export default function SearchItem({ item }) {
    return (
        <div className="searchHotel">
            <img src={imgRoom} alt="Room Image"
                className="hotelImg"
            />
            <div className="hotelDesc">
                <h1 className="hotelTitle">{item.Title}</h1>
                <span className="hotelDistance">{item.DistanceFromMainCity
                } from city</span>
                <span className="hotelTaxiOp">Airport cab aservice</span>
                {item.Rating && <div className="hotelRating">
                    <button>Rating: {item.Rating}</button>
                </div>}
                <span className="hotelSubtitle">
                    Luxury rooms
                </span>
                <span className="hotelFeatures">
                    {item.Description}
                </span>
                <span className="hotelCancelOp">Cancellation allowed*</span>

            </div>
            <div className="hotelDetails">
                <div className="hotelDetailTexts">
                    <span className="hotelPrice">{item.CheapestPrice}</span>
                    <span className="hotelTaxOp">Tax Included</span>
                    <Link to={`/hotels/${item._id}`} style={{ color: "inherit", textDecoration: "none" }}>
                        <button className="hotelCheckButton">Check availability</button>
                    </Link>
                </div>
            </div>
        </div>


    );
}
