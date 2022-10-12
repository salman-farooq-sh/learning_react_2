import {Link} from "react-router-dom";

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
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add New</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>
                            My Favorites
                            <span className={classes.badge}>{favoritesContext.totalFavorites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}