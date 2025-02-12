import SalesCard from "../Components/SalesCard";
import '../styles/TopListed.css'

export default function TopListed() {
    return (
        <>
            <div className="top-listed">
                <h1>Best Sales Item</h1>
                <div className="sales-cards">
                    <SalesCard />
                </div>
            </div>
        </>
    )
}