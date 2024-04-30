import { Icon } from "Icons"

function Search() {
    return(
        <div className="mr-auto ml-4 relative">
            <label htmlFor="search-input" className="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0">
                <Icon name="search" size={24} />
            </label>
            <input type="text" id="search-input" className="h-10 pl-12 w-[22.75rem] outline-none max-w-full bg-white rounded-3xl placeholder-blach/50 text-black font-semibold text-sm" placeholder="Sanatçılar, şarkılar veya podcast'ler" />
        </div>
    )
}

export default Search