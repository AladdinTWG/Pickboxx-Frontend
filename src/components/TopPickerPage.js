import React,{Component} from "react";
import { Link } from "react-router-dom";
import TopPicker from "./TopPicker";

class TopPickerPage extends Component {
    constructor(props) {
        super(props);
        this.state={ };
    }
    render() { 
        return ( 
            <div>
                <div className="toppicker_array">
                        <TopPicker name="User 1" score = "100" position = "1"/>
                        <TopPicker />
                        <TopPicker />
                        <TopPicker />
                    
                </div>
                <div className="toppicker_array">
                        <TopPicker name="User 1" score = "100" position = "1"/>
                        <TopPicker />
                        <TopPicker />
                        <TopPicker />
                    
                </div>
            </div>
            
         );
    }
}
 
export default TopPickerPage;