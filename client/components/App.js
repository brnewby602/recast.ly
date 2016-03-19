class App extends React.Component {

  constructor(props) {
    super(props); 
  }

  getInitialState() {
    return {
      video: this.props.videoList[0]
    };
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.props.videoList[0]}/>
        </div>
        <div className="col-md-5">
          <VideoList videoList={this.props.videoList}/>
        </div>
      </div>
    );
  }

}

ReactDOM.render(<App videoList={window.exampleVideoData}/>, document.getElementById('app'));
