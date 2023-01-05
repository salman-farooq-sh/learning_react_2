import MeetupList from "../components/meetups/MeetupList";
import {useContext} from "react";
import {FavoriteMeetupsContext} from "../store/FavoriteMeetupsContext";

export default function FavoritesPage(props) {
    const favoritesContext = useContext(FavoriteMeetupsContext);

    let content;
    if (favoritesContext.totalFavorites === 0) {
        content = <p>You haven't added anything to favorites yet.</p>;
    } else {
        content = <MeetupList meetups={favoritesContext.favorites}/>;
    }

    return <section>
        <h1>My Favorites</h1>
        {content}
    </section>;
}