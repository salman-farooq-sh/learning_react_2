import {Link, NavLink} from "react-router-dom";

import classes from "./MainNavigation.module.css";
import {useContext} from "react";
import {FavoriteMeetupsContext} from "../../store/FavoriteMeetupsContext";

export default function MainNavigation(props) {
    const favoritesContext = useContext(FavoriteMeetupsContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>All Meetups</NavLink>
                    </li>
                    <li>
                        <NavLink to='/new-meetup'>Add New</NavLink>
                    </li>
                    <li>
                        <NavLink to='/favorites'>
                            My Favorites
                            <span className={classes.badge}>{favoritesContext.totalFavorites}</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}