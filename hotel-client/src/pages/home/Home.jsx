import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar"
import MailList from "../../components/mailList/MailList";
import FProperties from "../../components/FProperties/FProperties";
import PropertyList from "../../components/propertyList/PropertyList";
import Footer from "../../components/footer/Footer";
import "./home.css"

export default function Home() {
    return (
        <div >
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />

                <h1 className="homeTitle">Types of properties</h1>

                <PropertyList />
                <h1 className="homeTitle">MOst Famous</h1>

                <FProperties />

                <MailList />
                <Footer />


            </div>
        </div>
    );
}
