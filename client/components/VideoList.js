class VideoList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var elem = !this.props.videoList ? <div>Loading</div> :
    (
      <div className="video-list media">
        {
          this.props.videoList.map( (video) => ( <VideoListEntry video={video} onUserInput={this.handleUserInput.bind(this)}/> ))
        }  
      </div>    
    );

    return elem;
  }

  handleUserInput(currentVideo) {
    this.props.onUserInput(this.props.videoList, currentVideo);
  }
}



// makes class definition available globally, not an instance
window.VideoList = VideoList;
