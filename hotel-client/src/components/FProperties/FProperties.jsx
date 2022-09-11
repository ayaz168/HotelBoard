import "./fproperties.css"
import imgFP1 from "../Images/froom.jpg"
import imgFP2 from "../Images/froom2.jpg"
import imgFP3 from "../Images/froom3.jpg"

export default function FProperties() {
    return (
        <div className="fp">
            <div className="FProperties">
                <img src={imgFP1} alt="" className="fpIMG" />
                <span className="fpName">The Marriot</span>
                <span className="fpCity">Islamabad</span>
                <span className="fpDetails">Starting at 29,000 PKR</span>
                <div className="fpRating">
                    <button>9.7 </button>
                    <span> Elite</span>
                </div>
            </div>
            <div className="FProperties">
                <img src={imgFP2} alt="" className="fpIMG" />
                <span className="fpName">Pearl Continental</span>
                <span className="fpCity">Bhurban</span>
                <span className="fpDetails">Starting at 26,000 PKR</span>
                <div className="fpRating">
                    <button>9.7 </button>
                    <span> Excellent</span>
                </div>
            </div>
            <div className="FProperties">
                <img src={imgFP3} alt="" className="fpIMG" />
                <span className="fpName">Sarena Hotel</span>
                <span className="fpCity">Islamabad</span>
                <span className="fpDetails">Starting at 18,000 PKR</span>
                <div className="fpRating">
                    <button>7.7 </button>
                    <span> Good</span>
                </div>
            </div>
        </div>

    );
}
