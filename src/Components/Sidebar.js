import logo from "img/logo.svg"
import Menu from "Components/Sidebar/Menu"
import { Icon } from "Icons"
import PlayLists from "Components/Sidebar/Playlists"
import DownloadApp from "Components/Sidebar/DownloadApp"
import { useSelector } from "react-redux"
import SidebarCover from "./Sidebar/SidebarCover"

function Sidebar() {

    const sidebar = useSelector(state => state.player.sidebar)

    return(
        <aside className="w-60 py-6 flex flex-shrink-0 flex-col bg-black">
            
            <a href="#" className="mb-7 px-6">
                <img src={logo} alt="" className="h-10" />
            </a>

            <Menu />

            <nav className="mt-6">
                <ul>
                    <li>
                        <a href="#" className="py-2 px-6 flex text-sm group text-link font-semibold hover:text-white items-center">
                            <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white rounded-sm text-black group-hover:bg-opacity-100 bg-opacity-60">
                                <Icon name="plus" size={12} />
                            </span>
                            Çalma Listesi Oluştur
                        </a>
                    </li>
                    <li>
                        <a href="#" className="py-2 px-6 flex text-sm group text-link font-semibold hover:text-white items-center">
                            <span className="w-6 h-6 flex items-center justify-center mr-4 rounded-sm text-white bg-gradient-to-br from-purple-700 to-blue-300 opacity-70 group-hover:opacity-100">
                                <Icon name="heartfilled" size={12} />
                            </span>
                            Beğenilen Şarkılar
                        </a>
                    </li>
                </ul>
            </nav>

            <PlayLists/>

            <DownloadApp/>

            {sidebar && <SidebarCover />}

        </aside>
    )
}

export default Sidebar