import React from 'react';
import "./Playlist.css";
import Tracklist from "../tracklist/tracklist";
class Playlist extends React.Component{
    constructor(props) {
      super(props)
    
      this.handleNameChange= this.handleNameChange.bind(this);
    }
    handleNameChange(event){
        this.props.onNameChange(event.target.value);
    }
    
    render(){
        return(
        <div className="Playlist">
            <input onChange={this.handleNameChange} defaultValue="New Playlist"></input>
            <Tracklist tracks={this.props.playlistTracks}
            // onAdd={this.props.doThese}
             isRemoval={true}
             onRemove={this.props.onRemove}/>
             <button className="Playlist-save" onClick={this.props.onSave}>Save to Spotify</button>
            
           </div>
        );
    }
}

export default Playlist;