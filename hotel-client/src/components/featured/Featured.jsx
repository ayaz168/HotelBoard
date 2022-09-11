import "./featured.css"
import imgIsb from "../Images/Islamabad.jpg"
import imgKarachi from "../Images/Karachi.jpg"
import imgLahore from "../Images/Lahore.jpg"
import imgMultan from "../Images/Multan.jpg"


export default function Featured() {
    return (
        <div className="featured">
            <div className="featuredItems">
                <img className="featuredImg" src={imgIsb} alt="Image Load Issue" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Islamabad</h1>
                    <h2>10 Hotels available</h2>
                </div>
            </div>
            <div className="featuredItems">
                <img src={imgKarachi} alt="Image Load Issue" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Karachi</h1>
                    <h2>50 Hotels available</h2>
                </div>
            </div>
            <div className="featuredItems">
                <img src={imgLahore} alt="Image Load Issue" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Lahore</h1>
                    <h2>30 Hotels available</h2>
                </div>
            </div>
            <div className="featuredItems">
                <img src={imgMultan} alt="Image Load Issue" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Multan</h1>
                    <h2>5 Hotels available</h2>
                </div>
            </div>
        </div>

    );
}
