import React from 'react';
import MyNavbar from './components/Navbar';
import Banner from './components/Banner';
import Menu from './components/Menu';
import BookingForm from './components/BookingForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div style={{ backgroundColor: "#222", minHeight: "100vh" }}>
            <MyNavbar />
            <Banner />
            <Menu />
            <BookingForm />
        </div>
    );
};

export default App;
