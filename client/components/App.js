class App extends React.Component {

  constructor(props) {
    super(props); 

    this.state = {
      currentVideo: this.props.videoList[0],
      videos: this.props.videoList

    };

    searchYouTube('', function() {} );
  }
/*
  compondentDidMount() {
    searchYouTube(options, function (result) {
      this.setState({
        currentVideo: this.videoList[0],
        videos: this.videoList
      });
    });
  }
  */

  render() {
    var elem = !this.props ? <div>Loading</div> :
      ( <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videoList={this.state.videos} onUserInput={this.handleUserInput.bind(this)}/>
        </div>
      </div> );

    return elem;
    


  }

  handleUserInput(videoList, currentVideo) {

    this.setState(
      {
        currentVideo: currentVideo,
        videos: videoList
      }
    );
  }

}

ReactDOM.render(<App videoList={window.exampleVideoData}/>, document.getElementById('app'));
