import React, { Component } from 'react'
import "./style/SectionM6.css";

export default class SectionMain6 extends Component {
  render() {

    const Submit = (e) =>{
        e.preventDefault();
    };

    return (
      <section className='SectionMain6' id='SectionMain6'>
        <div className='SectionMain6-div1'>
            <h1>
                Send us a request to book a cool trip
            </h1>
        </div>
        <div className='SectionMain6-div2' >
            <form action="" onSubmit={Submit}>
                <div>
                    <input type="text" name='Name' placeholder='Name' required />
                </div>
                <div>
                    <input type="text" name='Email' placeholder='Email' required />
                </div>
                <div>
                    <input type="text" name='Messanger'  placeholder='Messanger' required/>
                </div>
                <div>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
      </section>
    )
  }
}