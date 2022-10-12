import {useNavigate} from "react-router-dom";
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
import {DB_URL} from '../../constants';

export default function NewMeetupForm() {
    const navigate = useNavigate();

    function validSubmissionHandler(meetupData) {
        fetch(
            DB_URL + 'meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        ).then(() => {
            navigate('/', {replace: true});
        });
    }

    function submitHandler(event) {
        event.preventDefault();

        const meetupData = {
            title: event.target.title.value,
            image: event.target.image.value,
            address: event.target.address.value,
            description: event.target.description.value,
        };

        validSubmissionHandler(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title'/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image'/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address'/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        id='description'
                        required
                        rows='5'
                    ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}


