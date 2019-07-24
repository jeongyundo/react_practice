import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Garage from "./App";
import Car from "./App2";
import Header from "./App3";
import Header2 from "./App4";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Garage />, document.getElementById('root'));
// 4열의 import App from './App';를 호출한 값(즉 <App />을 root값에 대입한다. 

ReactDOM.render(<p>Hallo</p>, document.getElementById('sandy'));

ReactDOM.render(<Car />, document.getElementById('root2'));

ReactDOM.render(<Header favcol="blue"/>, document.getElementById('root3'));
ReactDOM.render(<Header2 favcol="yellow"/>, document.getElementById('root4'));
//<p>Hallo</p>를 통해서 sandy라는 아이디에 값을 대입한다.

//const myelement = <h1>I Love JSX!</h1>;
//Jsx를 사용하여 표현, jsx는 html을 자바스크립트를 이용하지 않고 그대로 표현하는것

//const myelement = React.createElement('h1', {}, 'I do not use JSX!');
//일반적으로 Jsx를 사용하지 않고 createElement혹은 appendchild를 사용해서 표현한다.

const myelement = <input type="text" />;
//element는 input과 같은 기능을 부여하는 태그도 대입이 가능하다.

//ReactDOM.render(myelement, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
