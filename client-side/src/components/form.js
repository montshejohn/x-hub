import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: " "
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.state({ value: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
               <div>
                    <p className="speech-bubble">Speech Bubble</p>
                </div>

                <label>

                    <input className='text-input' type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input className="button-submit" type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form;