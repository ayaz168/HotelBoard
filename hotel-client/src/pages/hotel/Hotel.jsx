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

export default function Hotel() {
    const imG = [Imgh6, Imgh2, Imgh3, Imgh4, Imgh5, Imgh1];
    const [slideIndex, setSlideIndex] = useState(0);
    const [openSlider, setOpenSlider] = useState(false);
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

    return (
        <div>
            <Navbar />
            <Header type="list" />
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
                    <button className="bookNow">
                        Reserve
                    </button>
                    <h1 className="hotelTitle">The Marriot</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Agha Khan Road F5, Islamabad</span>
                    </div>
                    <span className="hotelDistance">
                        Great Location in the heart of the city
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay just for 30,000 PKR
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
                            <h1 className="hotelTitle">Stay in the heart of Islamabad</h1>
                            <p className="hotelDesc">
                                Welcome to the Islamabad Marriott Hotel. Situated in the most beautiful
                                and green city of Pakistan, Islamabad, the capital city, has been ranked
                                second in the list of the World’s most beautiful capitals. The city is blessed
                                with breathtaking natural wonders alongside great infrastructure which is an added
                                attraction for foreigners and tourists. Pakistanis are known for their warm
                                welcoming nature, and we take pride in serving our guests.The five-star
                                international Islamabad Marriott Hotel is located at the footsteps of the iconic
                                and famous Margalla Hills and is within proximity to Rawal Lake, the city center,
                                hiking trails, and Pakistan Secretariat on Constitution Avenue. Owing to the great
                                location, the Hotel is just a short ride away from the cultural heritage sites
                                such as Saidpur Village, Faisal Mosque, Lok Virsa, and Shah Allah Ditta
                                Caves.It takes less than an hour to commute between the Hotel and Islamabad
                                International Airport, and an Air-port shuttle service is available on requests.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a short stay!</h1>
                            <span>
                                ISlmabad's best hotels
                            </span>
                            <h2>
                                <b>PKR 32,000</b> (1 nights)
                            </h2>
                            <button>Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>

        </div>
    );
}
