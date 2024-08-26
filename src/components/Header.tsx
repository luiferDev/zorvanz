import Filters from "./Filters";
import '../styles/filter-header.css'

export default function Header() {
    return (
        <aside className="filter__header" >
            <h2>
                ZORVANZ
            </h2>
            <div className="filters__container__header">
                <Filters />
            </div>
        </aside>
    )
}
