function PlayLists() {
    return (
        <nav className="mx-6 mt-2 pt-2 flex-auto border-t border-white border-opacity-20 overflow-auto  overflow-y-hidden">
            <ul>
                {new Array(26).fill(
                    <li>
                        <a href="#" className="text-s font-semibold text-link hover:text-white flex h-8 items-center">
                            2. Çalma Listem
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default PlayLists