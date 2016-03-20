class VideoPlayer extends React.Component {
  
  constructor (props) {
    super(props);
  }

  render () {
    var elem = !this.props.video ? <div>Loading</div> :
     (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${this.props.video.id.videoId}?autoplay=1`} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{this.props.video.snippet.title}</h3>
          <div>{this.props.video.snippet.description}</div>
        </div>
      </div>  
    );
    
    return elem;
  }
}

window.VideoPlayer = VideoPlayer;
