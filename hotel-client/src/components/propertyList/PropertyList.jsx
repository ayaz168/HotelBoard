import "./propertyList.css"
import imgApartment from "../Images/Apartments.jpg"
import imgHotels from "../Images/Hotels.jpg"
import imgResorts from "../Images/Resorts.jpg"
import imgRooms from "../Images/Rooms.jpg"
import useFetch from "../../hooks/useFetch"

export default function PropertyList() {
    const { data, loading, error } = useFetch("http://localhost:8780/hotels/countType");
    console.log(data);


    const Images = [imgHotels, imgResorts, imgApartment, imgRooms];
    return (

        <div className="PropertyList">

            {loading ? ("Loading...., thankyou for your patience") : (
                <>
                    {data &&
                        Images.map((imG, i) => (

                            <div className="PropertyItems" key={i}>
                                <img src={imG} alt="" className="PropertyListImg" />
                                <div className="PropertyListTitles">
                                    <h1>{data[i]?.type}</h1>
                                    <h2>{data[i]?.count} available</h2>

                                </div>
                            </div>
                        ))}

                </>
            )}
        </div>

    );
}
