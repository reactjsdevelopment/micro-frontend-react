import * as React from 'react';

export class ClassBase extends React.Component {
  state = { username: '', favoritecolor: 'red', show: true };

  constructor({ props }) {
    super(props);
    this.state = { username: '', favoritecolor: 'red', show: true };
    this.shoot = this.shoot.bind(this);
  }

  myChangeHandler = (event) => {
    console.log(event.target.value);
    this.setState({ username: event.target.value });
  };

  shoot = () => {
    console.log(this.state, 'shoot');
    /*
    The 'this' keyword refers to the component object
    */
  };

  shoot2 = (a, b) => {
    console.log(a, b.type, 'shoot2');
    //      /*
    //      'b' represents the React event that triggered the function,
    //      in this case the 'click' event
    //      */
  };

  static getDerivedStateFromProps(props, state) {
    // console.log(props, state, 'getDerivedStateFromProps');
    return { favoritecolor: props.favcol };
  }

  shouldComponentUpdate() {
    // console.log('shouldComponentUpdate');
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log('getSnapshotBeforeUpdate');
    document.getElementById('div1').innerHTML =
      'Before the update, the favorite was ' + prevState.favoritecolor;
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate');

    document.getElementById('div2').innerHTML =
      'The updated favorite is ' + this.state.favoritecolor;
  }

  componentDidMount() {
    setTimeout(() => {
      // console.log('componentDidMount');
      this.setState({ favoritecolor: 'yellow' });
    }, 1000);
  }

  componentWillUnmount() {
    // console.log("The component named Header is about to be unmounted.");
  }

  //usual -  curried function
  handleIt = (e, v) => {
    console.log(e, v);
    return 1;
  };

  // solution
  handleEvent = (v) => {
    return (e) => console.log(e, v);
  };

  render() {
    let header;
    if (this.state.username) {
      header = <h1>Hell {this.state.username}</h1>;
    } else {
      header = 'events. functions, stateupdate';
    }

    return (
      <div>
        {header}
        {/* Handler Function in JSX

Callback Handlers in JSX

Inline Handler in JSX */}
        {/* <input onChange={this.handleIt(e, 1)} placeholder="1"/> */}
        {/* <input onChange={this.handleIt(e, 2)} placeholder="2"/> */}
        {/* <input onChange={this.handleEvent(1)} placeholder="1"/>
  <input onChange={this.handleEvent(2)} placeholder="2"/> */}
        <input type="text" onChange={this.myChangeHandler} />
        <button onClick={this.shoot}>shoot</button>
        <button onClick={(ev) => this.shoot2('Goal', ev)}>shoot2</button>
        <button onClick={this.shoot2.bind(this, 'Goal')}>
          shoot2 with bind
        </button>
        <div id="div1">used in lifecycle</div>
        <div id="div2">used in lifecycle hook</div>
        );
      </div>
    );
  }
}

export class NewType extends React.Component {
  render() {
    return <div>lazy loading</div>;
  }
}
