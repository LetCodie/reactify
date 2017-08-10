"use strict";

// var h1 = React.createElement('h1', { "className": 'success' }, 'Hello World!');
// ReactDOM.render(h1, document.getElementById('app'));
const Layout = React.createClass({
  propTypes: {
      children: React.PropTypes.element.isRequired
  },

  render: function() {
    return <div className="overlay m-5">
              <h1>{this.props.title}</h1>
              {this.props.children}
            </div>;
  }
});

const Login = React.createClass({
  render() {
    return <div>
              <form>
                <div className="form-group row">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                  </div>
                </div>
              </form>
    </div>;
  }
});

ReactDOM.render(
                <Layout title="Login!!"><Login /></Layout>
                ,
                document.getElementById('app'));
