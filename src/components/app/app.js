import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import SwapiService from '../../services/swapi-service'
import ItemList from '../item-list'

import './app.css';
import Row from "../row/row";
import ItemDetails from "../item-details/item-details";

class App extends Component{
    swapiService = new SwapiService();



    render(){

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData = {this.swapiService.getPerson}
                getImageUrl={this.swapiService.getPersonImage}
            />
        )
        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData = {this.swapiService.getStarship}
                getImageUrl={this.swapiService.getStarshipImage}
            />
        )
        return (
            <div className='main'>
                <Header />
                <RandomPlanet />
                {/*<PeoplePage/>*/}
                <Row
                    left={personDetails}
                    right={starshipDetails}/>
            </div>
        );
    }
}

export default App;