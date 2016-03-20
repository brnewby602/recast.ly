class App extends React.Component {

  constructor(props) {
    super(props); 

    this.state = {
      currentVideo: null,
      videos: null

    };

  }

  componentDidMount() {
    console.log("INSIDE MOUNT");
    searchYouTube('', function (videos) {
      debugger;
      console.log("IM HERE");
      this.setState(
        {
          currentVideo: videos.items[0],
          videos: videos.items
        }
      );
    }.bind(this));
  }


  render() {
    console.log("Inside App render");
    return ( <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videoList={this.state.videos} onUserInput={this.handleUserInput.bind(this)}/>
        </div>
      </div> );

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
