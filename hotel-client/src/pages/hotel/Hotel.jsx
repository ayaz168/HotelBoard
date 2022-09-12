import "./hotel.css"
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar"
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Imgh1 from "../../components/Images/h1.jpg"
import Imgh2 from "../../components/Images/h2.jpg"
import Imgh3 from "../../components/Images/h3.jpg"
import Imgh4 from "../../components/Images/h4.jpg"
import Imgh5 from "../../components/Images/h5.jpg"
import Imgh6 from "../../components/Images/h6.jpg"
import { useState } from "react";
import { useContext } from "react";
import useFetch from "../../hooks/useFetch"
import { useLocation } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Reserve from "../../components/Reserve/Reserve";

export default function Hotel() {
    const { user } = useContext(AuthContext);
    const location = useLocation();//returns path "hotels/<id>"

    const { data, loading, error } = useFetch(`http://localhost:8780/hotels/find/${location.pathname.split("/")[2]}`);
    const { dates, options } = useContext(SearchContext);//getiing search data from Search context
    const navigate = useNavigate();

    //Function to create number of days from date
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayCalculate(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const nDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return nDays;
    }
    const daYs = dayCalculate(dates[0].endDate, dates[0].startDate);

    const imG = [Imgh6, Imgh2, Imgh3, Imgh4, Imgh5, Imgh1];
    const [slideIndex, setSlideIndex] = useState(0);
    const [openSlider, setOpenSlider] = useState(false);
    const [openRoom, setOpenRoom] = useState(false);
    const handleOpen = (i) => {
        setSlideIndex(i);
        setOpenSlider(true);
    }
    const maxImg = 5;
    const handleSlide = (operation) => {
        let newIndex;

        if (operation === "l") {
            newIndex = slideIndex === 0 ? 5 : slideIndex - 1;
        } else {
            newIndex = slideIndex === 5 ? 0 : slideIndex + 1;
        }

        setSlideIndex(newIndex)
    };

    const handleClicker = () => {
        if (user) {
            setOpenRoom(true);

        } else {
            navigate("/login");
        }
    }

    return (
        <div>
            <Navbar />
            <Header type="list" />
            {loading ? ("Pleae wait loading data...") :
                (<>
                    <div className="hotelContainer">
                        {openSlider && (<div className="slider">
                            <FontAwesomeIcon
                                icon={faCircleXmark}
                                className="close"
                                onClick={() => setOpenSlider(false)}
                            />
                            <FontAwesomeIcon
                                icon={faCircleArrowLeft}
                                className="arrow"
                                onClick={() => handleSlide("l")}
                            />
                            <div className="sliderWrapper">
                                <img src={imG[slideIndex]} alt="Photo Load Error" className="sliderImg" />
                            </div>
                            <FontAwesomeIcon
                                icon={faCircleArrowRight}
                                className="arrow"
                                onClick={() => handleSlide("r")}
                            />
                        </div>)}

                        <div className="hotelWrapper">
                            <button onClick={handleClicker}
                                className="bookNow">
                                Reserve
                            </button>
                            <h1 className="hotelTitle">{data.Title}</h1>
                            <div className="hotelAddress">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span>{data.Address}, {data.City}</span>
                            </div>
                            <span className="hotelDistance">
                                Great Location in the heart of the city
                            </span>
                            <span className="hotelPriceHighlight">
                                Book a stay just for {data.CheapestPrice} PKR
                            </span>
                            <div className="hotelImages">
                                {
                                    imG.map((imgg, i) => (
                                        <div className="hotelImgWrapper">
                                            <img onClick={() => handleOpen(i)} src={imgg} className="hotelImg" alt="Load Error" />
                                        </div>
                                    ))
                                }

                            </div>
                            <div className="hotelDetails">
                                <div className="hotelDetailsTexts">
                                    <h1 className="hotelTitle">Stay in the heart of {data.City}</h1>
                                    <p className="hotelDesc">
                                        {data.Description}
                                    </p>
                                </div>
                                <div className="hotelDetailsPrice">
                                    <h1>Perfect for a stay!</h1>
                                    <span>
                                        {data.City} best hotel
                                    </span>
                                    <h2>
                                        <b>PKR {daYs * data.CheapestPrice}</b> ({daYs} nights)
                                    </h2>
                                    <button onClick={handleClicker}>Book Now!</button>
                                </div>
                            </div>
                        </div>
                        <MailList />
                        <Footer />
                    </div></>)}
            {openRoom && <Reserve setOpen={setOpenRoom} hotelId={location.pathname.split("/")[2]} />}

        </div>
    );
}
