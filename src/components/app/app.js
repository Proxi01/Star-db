import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import SwapiService from '../../services/swapi-service'
import ItemList from '../item-list'

import './app.css';

class App extends Component{
    swapiService = new SwapiService();

    render(){
        return (
            <div className='main'>
                <Header />
                <RandomPlanet />
                <PeoplePage/>
                <ItemList getData = {this.swapiService.getAllPlanets}
                    renderItem = {(item)=> (<span>{item.name}<button>!</button></span>)}
                />
            </div>
        );
    }
}

export default App;