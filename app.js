"use strict";

// var h1 = React.createElement('h1', { "className": 'success' }, 'Hello World!');
// ReactDOM.render(h1, document.getElementById('app'));
const Layout = React.createClass({
  render() {
    return <div className="overlay">
      <div className="box">
        <h2>title</h2>
      </div>

      <footer>this is footer.</footer>
    </div>;
  }
});
ReactDOM.render(<Layout />, document.getElementById('app'));
