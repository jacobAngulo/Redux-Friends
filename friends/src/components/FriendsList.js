import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

class FriendsList extends React.Component {
  componentDidMount = () => {
    this.props.getData();
  };

  render() {
    if (this.props.fetching || !this.props.friends) {
      return (
        <div>
          <p>one sec</p>
        </div>
      );
    }
    return (
      <ul>
        {this.props.friends.map(friend => {
          return (
            <li key={friend.id}>
              <div>
                <p> {friend.name}</p>
                <p> {friend.age}</p>
                <p> {friend.email}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetching: state.fetching
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(FriendsList);
