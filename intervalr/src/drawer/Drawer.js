import React, {Component} from 'react';
import AudioFile from './AudioFile.js';
class Drawer extends Component{
    render(){
        return(
            <div>
                Drawer
<AudioFile filename='tesfile'/>
            </div>
        )
    }
    componentDidMount(){
        console.log("mounted drawer")
    }
}
export default Drawer;