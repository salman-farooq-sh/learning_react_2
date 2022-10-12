import {useState, useEffect} from 'react';
import DB_URL from "../constants";
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    const [x, setX] = useState(0);

    setTimeout(() => {
        setX(1);
    }, 5000)

    useEffect(() => {
        // setIsLoading(true);
        // fetch(
        //     DB_URL + 'meetups.json'
        // )
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((data) => {
        //         const meetups = [];
        //
        //         for (const key in data) {
        //             const meetup = {
        //                 id: key,
        //                 ...data[key]
        //             };
        //
        //             meetups.push(meetup);
        //         }
        //
        //         setIsLoading(false);
        //         setLoadedMeetups(meetups);
        //     });
        //

        alert(123);
    }, [x]);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups}/>
        </section>
    );
}

export default AllMeetupsPage;
