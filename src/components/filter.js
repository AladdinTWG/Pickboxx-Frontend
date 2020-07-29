import React, { Component } from "react";
import RangeSlider from 'react-bootstrap-range-slider';


function Filter(){
    const [value, setValue] = React.useState(0);
        return ( 
            <span className="filterbar">
                <p>Enhance Your Search</p>
                <div className ="filteritem">
                    <input type="checkbox" name = "filter1" id = "filter1"/>
                    <span for="filter1">Filter1</span>
                </div>
                <div className ="filteritem">
                    <input type="checkbox" name = "filter1" id = "filter1"/>
                    <span for="filter1">Filter2</span>
                </div>
                <div className ="filteritem">
                    <input type="checkbox" name = "filter1" id = "filter1"/>
                    <span for="filter1">Filter3</span>
                </div>
                <div className ="filteritem">
                    <input type="checkbox" name = "filter1" id = "filter1"/>
                    <span for="filter1">Filter4</span>
                </div>
                <div className ="filteritem">
                    <input type="checkbox" name = "filter1" id = "filter1"/>
                    <span for="filter1">Filter5</span>
                </div>

                <label for="distance">Within how many miles?</label>
                <div>
                    <RangeSlider 
                    value={value}
                    onChange={changeEvent => setValue(changeEvent.target.value)}
                    />
                </div>
                    
                
                
                
            </span> 
        );
    
}
 
export default Filter;