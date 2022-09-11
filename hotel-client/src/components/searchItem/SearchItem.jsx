import "./searchItem.css"
import imgRoom from "../Images/froom.jpg"

export default function SearchItem() {
    return (
        <div className="searchItem">
            <img src={imgRoom} alt="Room Image"
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">ABC </h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$112</span>
                    <span className="siTaxOp">Tax Inclusive</span>
                    <button className="siCheckButton">Check availability</button>
                </div>
            </div>
        </div>


    );
}
