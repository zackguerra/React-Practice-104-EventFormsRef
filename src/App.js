import React, { Component } from "react";
import "./styles.css";

//class component
class App extends Component {
  state = {
    nameInput: ""
  };

  handleSubmit = e => {
    e.preventDefault(); //page does not refresh on submit
    console.log("Submitted name: ", this.state.nameInput);
  };

  render() {
    return (
      <div className="App">
        <h1>React Practice 104</h1>
        <h2>Event, Forms and Ref</h2>
        <br />
        <RefForm />
        <br />
        <form onSubmit={this.handleSubmit}>
          <div className="group">
            <input
              type="text"
              onBlur={() => {
                console.log("Blurred");
              }}
              onFocus={() => {
                console.log("Focused");
              }}
              onChange={event => {
                this.setState({ nameInput: event.target.value });
              }}
            />
            <label>Name: </label>
          </div>
          <input type="submit" className="btn" value="Submit" />
        </form>
      </div>
    );
  }
}

class RefForm extends Component {
  onKeyUp = (element, e) => {
    console.log(e.keyCode);
    //ascii code of 13 = ENTER
    if (e.keyCode === 13) {
      // this.lastName.focus();
      switch (element) {
        case "firstName":
          // this.lastName.focus();
          if (!this.firstName.value) {
            console.log("First name is required");
          } else {
            this.lastName.focus();
          }
          break;
        case "lastName":
          this.age.focus();
          break;
        case "age":
          this.submit.focus();
          break;
        default:
          this.submit.focus();
      }
    }
  };
  onSubmit = e => {
    e.preventDefault(); //prevent refreshing of page
    console.log(this.firstName.value); //access the value of input via "ref"
  };

  render() {
    return (
      <div className="msg">
        <div>
          <span>First Name:</span>
          <input
            type="text"
            ref={input => {
              this.firstName = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "firstName")}
          />
        </div>

        <div>
          <span>Last Name:</span>
          <input
            type="text"
            ref={input => {
              this.lastName = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "lastName")}
          />
        </div>

        <div>
          <span>Age:</span>
          <input
            type="text"
            ref={input => {
              this.age = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "age")}
          />
        </div>

        <div>
          <input
            type="submit"
            className="btn"
            value="Submit"
            onClick={this.onSubmit}
            onKeyUp={this.onKeyUp.bind(this, "submit")}
            ref={input => {
              this.submit = input;
            }}
          />
        </div>
      </div>
    );
  }
}

//functional component v1
// function App() {
//   return (
//     <>
//     </>
//   )
// }

//functional component v2
// const App = () => {
//   const [isLoading, setIsLoading] = useState(); //undefined
//   const [studentArr, setStudentArr] = useState([]); //only arr

//   return <></>;
// };

export default App;
