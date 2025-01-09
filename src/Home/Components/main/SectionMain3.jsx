import React, { Component } from 'react'
import Stats_Name from './data/SM3_Stadistic';

export default class SectionMain3 extends Component {
  render() {

    const Stadistic = (props) =>{
        return(
            <div>
                <h4>{props.number}</h4>
                <span>{props.name}</span>
            </div>
        )
    };

    const Stadisticlist =Stats_Name.map(
        St =>{
            return(
                <Stadistic number = {St.Stats} name = {St.name}/>
            )
        }
    );

    return (
      <section className='SectionMain3'>
        <div className='SectionMain3-div1'>
            <h1>About Us</h1>
        </div>
        <div className='SectonMain3-div2'>
            <div className='SM3-div2-div1'>
                <img src="" alt="" />
            </div>
            <div className='SM3-div2-div2'>
                <div className='SM3-dv2-div2-div1'>
                    <h3>Get to khow us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta debitis error, voluptatibus saepe
                        aliquam aspernatur delectus pariatur perspiciatis!Saepe quibusdam libero dicta hic accusamus.
                         Repellendus, neque animi! Odit, eveniet dignissimos!</p>
                </div>
                <div className='SM3-dv2-div2-div1'>
                    <button>Read more</button>
                    <div>
                        {Stadisticlist}
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
  }
}
