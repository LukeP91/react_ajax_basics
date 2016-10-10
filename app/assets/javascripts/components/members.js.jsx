class Members extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let membersComponents = [];
    this.props.data.map(function(member){membersComponents.push(<MemberListItem member = {member}/>)});

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
