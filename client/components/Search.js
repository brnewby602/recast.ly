class Search extends React.Component {
  
  constructor(props) {
    super(props);
  } 

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" />
        <button className="btn hidden-sm-down" onClick={this.clickHandler.bind(this)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
      ); 
  }

  clickHandler() {

    this.props.handleSearchClickEvent($('.form-control').val());

    //console.log("hello = " + $('.form-control').val());
  }
}


window.Search = Search;
