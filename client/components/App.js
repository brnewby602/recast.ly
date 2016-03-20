class App extends React.Component {

  constructor(props) {
    super(props); 

    this.state = {
      currentVideo: null,
      videos: null

    };

  }

  componentDidMount() {

    
    this.searchYouTubeForVideos('cute cats');

  }


  render() {

    return ( <div>
        <Nav handleSearchClickEvent={this.handleSearchClickEvent.bind(this)}/>
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

  handleSearchClickEvent(searchString) {

    this.searchYouTubeForVideos(searchString);

  }

  searchYouTubeForVideos(searchString) {
    
    var options = { q: searchString };
    searchYouTube(options, function (videos) {
      
      this.setState(
        {
          currentVideo: videos.items[0],
          videos: videos.items
        }
      );
      
    }.bind(this));
  }

}

ReactDOM.render(<App videoList={window.exampleVideoData}/>, document.getElementById('app'));
