import {NavLink} from "react-router-dom";

import classes from "./MainNavigation.module.css";
import {useContext} from "react";
import {FavoriteMeetupsContext} from "../../store/FavoriteMeetupsContext";

export default function MainNavigation(props) {
    const favoritesContext = useContext(FavoriteMeetupsContext);

    function navLinkStyle({isActive}) {
        return isActive ? {
            color: "white",
        } : undefined;
    }

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <NavLink end to='/' style={navLinkStyle}>All Meetups</NavLink>
                    </li>
                    <li>
                        <NavLink end to='/new-meetup' style={navLinkStyle}>Add New</NavLink>
                    </li>
                    <li>
                        <NavLink end to='/favorites' style={navLinkStyle}>
                            My Favorites
                            <span className={classes.badge}>{favoritesContext.totalFavorites}</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}