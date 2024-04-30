import { Icon } from "Icons"
import { useHistory, Router } from "react-router-dom";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

function Navigation(){

    const history = createBrowserHistory();

    function handleClick() {
        history.push("/collection");
      }
      

    return(
        <nav className="flex items-center gap-x-4">
            <button onClick={handleClick} className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70">
                <Icon size={22} name="prev" />
            </button>
            <button onClick={() => history.goForward()} className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70">
                <Icon size={22} name="next" />
            </button>
        </nav>
    )
}

export default Navigation