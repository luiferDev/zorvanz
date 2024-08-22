import Filters from "./Filters";
import '../styles/filter-header.css'

export default function Header() {
    return (
        <header className="filter__header" >
            <h2>
                ZORVANZ
            </h2>
            <Filters />
        </header>
    )
}
