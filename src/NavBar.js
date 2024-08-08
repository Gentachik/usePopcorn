import {Logo} from "./Logo";
import {Search} from "./Search";
import {NumResults} from "./NumResults";

export function NavBar() {

    return <nav className="nav-bar">
        <Logo/>
        <Search/>
        <NumResults/>
    </nav>
}