import "./fproperties.css"
import imgFP1 from "../Images/froom.jpg"
import imgFP2 from "../Images/froom2.jpg"
import imgFP3 from "../Images/froom3.jpg"
import { Link } from "react-router-dom"
import useFetch from "../../hooks/useFetch"

export default function FProperties() {
    const { data, loading, error } = useFetch("http://localhost:8780/hotels?Featured=true&limit=3");
    const Images = [imgFP1, imgFP2, imgFP3]

    return (
        <div className="fp">
            {loading ? ("Loading...., thankyou for your patience") :
                (<>

                    {data.map((item, i) => (
                        <div className="FProperties" key={i}>
                            <img src={Images[i]} alt="" className="fpIMG" />
                            <span className="fpName">{item?.Title}</span>
                            <span className="fpCity">{item?.City}</span>
                            <span className="fpDetails">Starting at {item?.CheapestPrice}</span>
                            {item.Rating && <div className="fpRating">
                                <button>{item?.Rating}</button>
                                <span>Great</span>
                            </div>}
                        </div>
                    ))}

                </>)}
        </div>

    );
}
