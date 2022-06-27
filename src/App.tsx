import React, {Component} from 'react';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <h1>The List!</h1>

        <div id="listbuilder">
        </div>

        <button id="add_button">
          Add Item
        </button>
      </div>
    )

    return (
      <App />
    );
  }
}

export default App;