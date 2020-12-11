import React from 'react';

class Car extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            brand: {
                make: 'default state',
                model: 'default state'
            },
            year: 'default state',
            color: 'default state'
        };
    }
    // inop if the getDerivedStateFromProps function is overriding it with the hard-coded props
    changeColor = () => {
        this.setState({color:'blue'});
    }
    // inop if the getDerivedStateFromProps function is overriding it with the hard-coded props
    componentDidMount() {
        setTimeout(() => {
            this.setState({color: 'orange'})
        }, 2000)
    }
    // getDerivedStateFromProps happens RIGHT before render, each and every time it is rendered
    // setting all props here is fine, but only if ALL setState calls are a result of NEW PROPS, otherwise old props
    // will always steamroll the new changes
    // exception: the shouldComponenetUpdate method will be called between them...
    // static getDerivedStateFromProps(props, state) {
    //     return {
    //         brand: {
    //             make: props.brand.make ? props.brand.make : 'Unknown',
    //             model: props.brand.model ? props.brand.model : 'Unknown'
    //         },
    //         year: props.year ? props.year : 'unknown',
    //         color: props.color ? props.color : 'unknown'
    //     };
    // }
    render() {
        // return <h2>A {this.state.year} {this.state.color} {this.state.brand.make} {this.state.brand.model}!</h2>;
        return (
            <div>
                <h1>My {this.state.brand.make}:</h1>
                <p>
                    It is a {this.state.color} {this.state.brand.model} <br />
                    from {this.state.year}. 
                </p>
                <button
                    type="button"
                    onClick={this.changeColor}
                >Change Color to Blue</button>
            </div>
        );
    }
}

export default Car