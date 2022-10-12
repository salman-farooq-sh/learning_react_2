import {createContext, useEffect, useState} from "react";
import {LOCAL_STORAGE_FAVORITES} from "../constants";

export const FavoriteMeetupsContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: favoriteMeetup => {},
    removeFavorite: meetupId => {},
    meetupIsFavorite: meetupId => {},
});

export function FavoriteMeetupsContextProvider(props) {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const favorites = window.localStorage.getItem(LOCAL_STORAGE_FAVORITES);
        if (favorites !== null) {
            setFavorites(JSON.parse(favorites));
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem(LOCAL_STORAGE_FAVORITES, JSON.stringify(favorites));
    }, [favorites]);

    function addFavoriteHandler(favoriteMeetup) {
        setFavorites(prevFavorites => prevFavorites.concat(favoriteMeetup));
    }

    function removeFavoriteHandler(meetupId) {
        setFavorites(prevFavorites => prevFavorites.filter(meetup => meetup.id !== meetupId));
    }

    function meetupIsFavoriteHandler(meetupId) {
        return favorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: favorites,
        totalFavorites: favorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        meetupIsFavorite: meetupIsFavoriteHandler,
    };

    return <FavoriteMeetupsContext.Provider value={context}>
        {props.children}
    </FavoriteMeetupsContext.Provider>;
}