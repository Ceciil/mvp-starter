import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';
import { Link, animateScroll as scroll } from 'react-scroll';

import Main from './components/Main.jsx';
import Buttons from './components/Buttons.jsx';
import Search from './components/Search.jsx';
import Display from './components/Display.jsx';
import Choice from './components/Choice.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choiceBool: false,
      choice: null,
      dataBool: false,
      data: null,
      search: null
    };
    this.onSelect = this.onSelect.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSelect(event) {
    const category = event.target.innerHTML;
    axios
      .get(`/api/category/${category}`)
      .then(response => {
        function getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max));
        }
        const randomInt = getRandomInt(response.data.length);
        this.setState({
          choiceBool: true,
          choice: response.data[randomInt]
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onChange(event) {
    this.setState({ search: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const search = this.state.search;
    axios
      .get(`/api/${search}`)
      .then(response => {
        this.setState({
          dataBool: true,
          data: response.data.businesses
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let display, choice;

    if (this.state.choiceBool) {
      choice = <Choice data={this.state.choice} />;
    } else {
      choice = <div />;
    }

    if (this.state.dataBool) {
      display = <Display data={this.state.data} id='choice' />;
    } else {
      display = <div id='choice' />;
    }

    return (
      <div className='container fade-in'>
        <Main />
        <Link activeClass='active' to='pad' spy={true} smooth={true} duration={500}>
          <Buttons onClick={this.onSelect} />
        </Link>
        <Link onSubmit={() => { scroll.scrollTo(800) }}>
          <Search onChange={this.onChange} onSubmit={this.onSubmit} />
        </Link>
        {display}
        {choice}
        <div id='pad' />
        <div className='scrollToTop' onClick={() => { scroll.scrollToTop() }}>
          Scroll to top
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
