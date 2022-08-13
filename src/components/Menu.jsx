import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <div className="Menu">
            <NavLink to="/"><h1>Pupster App</h1></NavLink>
            <NavLink to="/"><h2>About</h2></NavLink>            
            <NavLink to="/discover"><h2>Discover</h2></NavLink>            
            <NavLink to="/search"><h2>Search</h2></NavLink>            
        </div>
    );
}

export default Menu;
