import React, {Component} from 'react';
import AdminMode from './AdminMode';
import './App.scss';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';


class App extends Component {
  render() {
    return (
      <div className="App container">
        <AdminMode/>
        <div className="columns">
          <div className="column">
            <CommentForm/>
          </div>
          <div className="column">
            <CommentsList/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
