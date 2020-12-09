import React from 'react';
import ReactDOM from 'react-dom';

const myfristelement = <h1>Hello Bumble</h1>

const myelement = (
  <table>
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

const firsttextinput = <input type="text" />;

ReactDOM.render(myfristelement, document.getElementById('root'));
ReactDOM.render(myelement, document.getElementById('table'));
ReactDOM.render(myheader, document.getElementById('firstheader'));
ReactDOM.render(mathelement, document.getElementById('mathelement'));
ReactDOM.render(grocerylist, document.getElementById('grocerylist'));
ReactDOM.render(firsttextinput, document.getElementById('firsttextinput'));