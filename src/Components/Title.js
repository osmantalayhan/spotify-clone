import { Link } from "react-router-dom";

function Title({ title, more = false }){
    return(
        <header className="flex items-center justify-between mb-4">
                <Link to={ more ?? '#' }>
                    <h3 className="text-2xl text-white font-bold tracking-tight hover:underline">{title}</h3>
                </Link>

                {more && (
                    <Link className={"text-xs font-semibold uppercase text-link tracking-widest hover:underline"} to={more}>
                        HEPSİNİ GÖR
                    </Link>
                )}
            </header>
    )
}

export default Title