import Filters from "./Filters";


export default function Header() {
    return (
        <aside className="bg-[#12184a] shadow-[3px_3px_3px_3px_black] text-[aliceblue] h-full mt-0 mb-4 mx-4 rounded-3xl lg:h-full lg:ml-12 lg:mr-0 lg:my-0">
            <h2 className="text-2xl pt-8 pl-6">Filtros</h2>
            <div className="p-5">
                <Filters />
            </div>
        </aside>
    )
}
