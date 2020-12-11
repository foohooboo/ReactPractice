import React from 'react';
import ReactDOM from 'react-dom';
import Car from './car';
import Truck from './truck';
import Garage from './garage';
import NewUserForm from './new_user_profile_form';
import './App.css';

const myfristelement = <h1 style={{color:'greenyellow'}}>Hello Bumble</h1>

const myelement = (
  <table style={{backgroundColor:'grey'}}>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <th>Elsa</th>
    </tr>
    <tr>
      <th>John</th>
    </tr>
  </table>
);

const myheader = <h2>I Love JSX</h2>;

const mathelement = <h2>I love chicken {5*5} times more than you!</h2>

const grocerylist = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

const firsttextinput = <input style={{color:'blue', backgroundColor:'blueviolet'}} type="text" />;

// const mycar = new Car();
const mynewcarinfo = {make: 'Ford', model: 'Camero'};
const mynewcar = <Car brand={mynewcarinfo} color='green' />;

const userform = <NewUserForm />;

ReactDOM.render(userform, document.getElementById('userinfo'));
ReactDOM.render(myfristelement, document.getElementById('root'));
ReactDOM.render(myelement, document.getElementById('table'));
ReactDOM.render(myheader, document.getElementById('firstheader'));
ReactDOM.render(mathelement, document.getElementById('mathelement'));
ReactDOM.render(grocerylist, document.getElementById('grocerylist'));
ReactDOM.render(firsttextinput, document.getElementById('firsttextinput'));
// ReactDOM.render(<Car color='blue'/>, document.getElementById('vehicleelement1'));
// also works..
ReactDOM.render(mynewcar, document.getElementById('vehicleelement1')); 
ReactDOM.render(Truck(), document.getElementById('vehicleelement2')); 
// also works..
// ReactDOM.render(<Truck />, document.getElementById('vehicleelement2')); 
ReactDOM.render(<Garage />, document.getElementById('garageelement')); 
