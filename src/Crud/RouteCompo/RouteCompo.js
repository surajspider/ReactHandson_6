import React, { useState } from 'react';
import Home from '../Home';
import Student from '../Student';
import Contact from '../Contact';
import Editstudent from '../Editstudent';
import { StoreData } from '../Store/Store';
import { Routes, Route, NavLink } from 'react-router-dom';
import Addstudent from '../Addstudent';

function RouteCompo() {
    const [data, dataf] = useState([
        { name: "John", age: "23", course: "MERN", batch: "oct" },
        { name: "Doe", age: "23", course: "MERN", batch: "oct" },
        { name: "Mars", age: "25", course: "MERN", batch: "jan" },
        { name: "linda", age: "28", course: "MERN", batch: "feb" },
        { name: "Harris", age: "29", course: "MERN", batch: "mar" },
    ]);
    return (
        <div>
            <br />
            <div className='navflex'>
                <NavLink className="nav" style={({ isActive }) => ({ backgroundColor: isActive ? "white" : "black" })} to="/"><h1>Home</h1></NavLink>
                <NavLink className="nav" style={({ isActive }) => ({ backgroundColor: isActive ? "white" : "black" })} to="/student"><h1>Student</h1></NavLink>
                <NavLink className="nav" style={({ isActive }) => ({ backgroundColor: isActive ? "white" : "black" })} to="/contact"><h1>Contact</h1></NavLink>
            </div>
            <Routes>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="/student" element={
                    <StoreData.Provider value={[data, dataf]}>
                        <Student />
                    </StoreData.Provider>}></Route>
                <Route path="/editstu" element={<StoreData.Provider value={{ data, dataf }}>
                    <Editstudent />
                </StoreData.Provider>}></Route>
                <Route path="/addstu" element={<StoreData.Provider value={{ data, dataf }}>
                    <Addstudent />
                </StoreData.Provider>}></Route>
            </Routes >
        </div >
    )
}

export default RouteCompo