import {useEffect, useState} from "react";
import MeetupList from "../components/meetups/MeetupList";
import {DB_URL} from "../constants";
import loadingAnimation from "./loading_animation_2.gif";
import classes from "./AllMeetups.module.css";

// const DUMMY_DATA = [{
//     id: 'm1',
//     title: 'This is a first meetup',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
// }, {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description: 'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!',
// },];

export default function AllMeetupsPage(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        fetch(
            DB_URL + 'meetups.json',
        ).then(response => {
            return response.json();
        }).then(data => {
            setLoadedMeetups(Object.entries(data).map(([meetupId, meetupData]) => {
                return {
                    id: meetupId,
                    ...meetupData,
                };
            }));
            setIsLoading(false);
        });

    }, [])

    if (isLoading) {
        return <section>
            <img className={classes.loadingAnimation} src={loadingAnimation} alt="Loading..."/>
        </section>;
    } else {
        return <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups}/>
        </section>;
    }
}