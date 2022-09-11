import "./featured.css"
import imgIsb from "../Images/Islamabad.jpg"
import imgKarachi from "../Images/Karachi.jpg"
import imgLahore from "../Images/Lahore.jpg"
import imgMultan from "../Images/Multan.jpg"
import useFetch from "../../hooks/useFetch"


export default function Featured() {
    //Custom Hook
    const { data, loading, error } = useFetch("http://localhost:8780/hotels/countCity?cities=Islamabad,Lahore,Karachi");

    return (
        <div className="featured">
            {loading ? ("Loading...., thankyou for your patience") : (<>
                <div className="featuredItems">
                    <img className="featuredImg" src={imgIsb} alt="Image Load Issue" />
                    <div className="featuredTitles">
                        <h1>Islamabad</h1>
                        <h2>{data[0]} Hotels aavailable</h2>
                    </div>
                </div>
                <div className="featuredItems">
                    <img src={imgLahore} alt="Image Load Issue" className="featuredImg" />
                    <div className="featuredTitles">
                        <h1>Lahore</h1>
                        <h2>{data[1]} available</h2>
                    </div>
                </div>
                <div className="featuredItems">
                    <img src={imgKarachi} alt="Image Load Issue" className="featuredImg" />
                    <div className="featuredTitles">
                        <h1>Karachi</h1>
                        <h2>{data[2]} Hotels available</h2>
                    </div>
                </div>
                <div className="featuredItems">
                    <img src={imgMultan} alt="Image Load Issue" className="featuredImg" />
                    <div className="featuredTitles">
                        <h1>Multan</h1>
                        <h2>5 Hotels available</h2>
                    </div>
                </div>
            </>)}
        </div>

    );
}
