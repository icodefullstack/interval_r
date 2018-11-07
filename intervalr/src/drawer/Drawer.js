import React, {Component} from 'react';
import AudioFile from './AudioFile.js';
import './drawer.css';
class Drawer extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="drawer">
                <div className="title">
                {this.props.title}                
                </div>
<AudioFile filename='tesfile'/>
<AudioFile filename='tesfile'/>
<AudioFile filename='tesfile'/>
<AudioFile filename='tesfile'/>
            </div>
        )
    }
    componentDidMount(){
        console.log("mounted drawer")
    }
}
export default Drawer;