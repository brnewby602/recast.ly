class VideoList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="video-list media">
        {
          this.props.videoList.map( (video) => ( <VideoListEntry video={video} onUserInput={this.props.onUserInput}/> ))
        }  
      </div>    
    );
  }
}

// makes class definition available globally, not an instance
window.VideoList = VideoList;
