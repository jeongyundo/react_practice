import React from 'react';
import logo from './logo.svg';
import './App.css';

//Class를 이용한 Car&Garage표시 this만으로 표시가 가능하다.

// class Car extends React.Component {
//   render() {
//     return <h2>I am a {this.props.brand}!</h2>;
//   }
// }

// class Garage extends React.Component {
//   render() {
//     return (
//       <div>
//       <h1>Who lives in my garage?</h1>
//       <Car brand="Ford" />
//       </div>
//     );
//   }
// }

//function을 이용한 Car&Garage표시 this를 필요로 하지 않고 직접 변수를 입력 받아야한다.
var Car = (id) => {
  return <h2>I am a {id.brand}!</h2>;
};

var Garage = () => {
  return (
          <div>
          <h1>Who lives in my garage?</h1>
          <Car brand="Ford" />
          </div>
        );
}



export default Garage;
