import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';


export default function Lateral() {

    return (
        <div className='MainMenu'>
            <div className='content'>

                <div className='imgEx'>
                     <img src='assets/images/logo.svg'/>
                    <h3>Elite<span>Wheels</span></h3>
                </div>

                    <div className='options' >
                <Link to='/'>
                        <div id='selected' >
                        <i class="fa-solid fa-house"></i>
                           <img src='./assets/images/Vector.svg'></img>
                            <a>Home</a>
                        </div>
                </Link>

                <Link to='/clientsControl'>
                    <div id='selected'>
                        <i class="fa-solid fa-user"></i>
                        <img src='./assets/images/bxs_user.png'></img>
                        <a>Clientes</a>
                    </div>
                </Link>
                <Link to='/carcontrol'>
                <div id='selected'>
                    <i class="fa-solid fa-car-rear"></i>
                    <img src='./assets/images/Group.png'></img>
                    <a>Veiculos</a>
                </div>
                </Link>
                <Link to='/location'>

                <div id='selected'>
                    <i class="fa-solid fa-key"></i>
                    <img src='./assets/images/Vector.png'></img>
                    <a>Locação</a>
                </div>
                </Link>

            </div>
        </div>  
        </div >)
}