var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = {
  firstName: "Vaishnavi",
  lastName: "Reddy",
  location: "San Francisco",
  username: "vaishr",
  picURL: "profilepic.jpg"
};

var Name = React.createClass({
  render: function() {
    return (
      <div>
        <div>{this.props.first} {' '} {this.props.last}</div>
      </div>
    )
  }
})

var UserLocation = React.createClass({
  render: function() {
    return (
      <div>{this.props.location}</div>
    )
  }
}) 

var UserName = React.createClass({
  render: function() {
    return (
      <div>
        <div>{this.props.username}</div>
      </div>
    )
  }
})

var Link = React.createClass({
  changeURL: function() {
    window.location.replace(this.props.href);
  },
  render: function() {
    return (
      <span style={{color: 'blue', cursor: 'pointer'}} onClick={this.changeURL}>
        {this.props.children}
      </span>
    )
  }
})

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <Link href={'https://www.github.com/'+this.props.username}>
          {this.props.username}
        </Link> 
      </div>
    )
  }
})

// var ProfilePic = React.createClass({
//   render: function() {
//     <div>
//       <img src={this.props.picURL} />
//     </div>
//   }
// })


var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfileLink username = {this.props.user.username} />
        <UserLocation location = {this.props.user.location} />
        <UserName username = {this.props.user.username} />
      </div>
    )
  }
})

ReactDOM.render(<Avatar user = {USER_DATA} />, document.getElementById('app'));