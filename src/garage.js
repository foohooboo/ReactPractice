import React from 'react';
import Car from './car';

class Garage extends React.Component {
    render() {

        const car1brandinfo = {make: 'Chevy', model: 'Cobalt'};
        const car1color = 'yellow';

        return (
            <div>
                <h1>Cars in my Garage:</h1>
                <Car brand={car1brandinfo} color={car1color} />
            </div>
        );
    }
}

export default Garage