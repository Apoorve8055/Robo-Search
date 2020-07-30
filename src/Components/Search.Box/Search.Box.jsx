import React from 'react';
import './Seach.Box.css';
export const SearchBox = ({placeholder,HandelSeach}) =><input 
    type="text" 
    className="box"
    placeholder={placeholder} 
    onChange={HandelSeach}/>;