import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';



class Counter extends Component
{
    constructor()
    {
        super()
        {
            this.state = {
                counter: 0
            }
        }
    }

    increament()
    {
        this.setState ({
             counter: this.state.counter+1
        })
    }

    decreament()
    {
        if(this.state.counter>0)
        {
            this.setState ({
                counter:this.state.counter-1
            })
        }
    }

    reset()
    {
        this.setState ({
            counter: this.state.counter=0
        })
    }
    render() {
        return (
            <div className="container-fluid ">
            <br></br>
            <div className="container Container-margin shadow-lg">
               <h1>React Counter App</h1>  
               <h2 className="text-center mt-5 fw-bold">{this.state.counter}</h2>
               <div className="btns shadow-lg">
                <button className="btn button shadow" onClick={() => this.increament()}>Increament</button>
                <button className="btn button shadow" onClick={() => this.reset()}>Reset</button>
                <button className="btn button shadow" onClick={() => this.decreament()}>Decreament</button>
               </div>
            </div>
           </div>
        );
    }
}


export default Counter;