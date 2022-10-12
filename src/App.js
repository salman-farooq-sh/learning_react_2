import {BrowserRouter, Route, Routes} from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import {FavoriteMeetupsContextProvider} from "./store/FavoriteMeetupsContext";

export default function App() {
    return (
        <FavoriteMeetupsContextProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<AllMeetupsPage/>}/>
                        <Route path='/new-meetup' element={<NewMeetupPage/>}/>
                        <Route path='/favorites' element={<FavoritesPage/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </FavoriteMeetupsContextProvider>
    );
}