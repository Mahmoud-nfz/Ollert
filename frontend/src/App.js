import Login from './components/LoginPage';
import Home from './components/Home';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { fetchUser }  from './api/users';

function App() {
    const [user, setUser] = React.useState(null);
    React.useEffect(async () => {
        setUser(await fetchUser());
    }, []);

    if (!user){
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        );
    }
        
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home user={user} />} />
                <Route path="/home" element={<Home user={user} />} />
                <Route path="/profile" element={<Profile user={user} />} />
            </Routes>
        </Router>
    );
}

export default App;
