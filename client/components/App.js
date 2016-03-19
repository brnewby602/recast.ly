class App extends React.Component {

  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer/>
        </div>
        <div className="col-md-5">
          <VideoList videoList={this.props.videoList}/>
        </div>
      </div>
    );
  }

}

ReactDOM.render(<App videoList={window.exampleVideoData}/>, document.getElementById('app'));
