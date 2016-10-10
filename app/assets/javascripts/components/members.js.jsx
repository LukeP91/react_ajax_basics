class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: this.props.data
    };
  }

  render() {
    let membersComponents = [];

    for(var index = 0; index < this.state.members.length; index++) {
      membersComponents.push(
        <MemberListItem
          member = {this.state.members[index]}
        />
      );
    }
    return (
      <div>
        <h3>Members of Junior Rails Developer Course:</h3>
        <ul>
          {membersComponents}
        </ul>
      </div>
    );
  }
}

class MemberListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <li>
          {this.props.member.name}
        </li>
    );
  }
}
