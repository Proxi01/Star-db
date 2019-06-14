import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service'

import './app.css';
import Row from "../row/row";
import ItemDetails, {Record} from "../item-details/item-details";
import { PersonList, PlanetList, StarshipList, PersonDetails, PlanetDetails, StarshipDetails} from '../sw-components'

class App extends Component{
    swapiService = new SwapiService();



    render(){

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData = {this.swapiService.getPerson}
                getImageUrl={this.swapiService.getPersonImage}>
                <Record field='gender' label='Gender'/>
                <Record field='eyeColor' label='Eye Color'/>
            </ItemDetails>
        )
        const starshipDetails = (
            <StarshipDetails itemId={11}/>
        )

        const itemList = (
            <PersonList>
                {({name})=><span>{name}</span>}
            </PersonList>
        )
        return (
            <div className='main'>
                <Header />
                <RandomPlanet />
                {/*<PeoplePage/>*/}
                <Row
                    left={starshipDetails}
                    right={<StarshipList>{({name})=><span>{name}</span>}</StarshipList>}/>
                <PersonDetails itemId={11}/>
                <PlanetDetails itemId={11}/>
            </div>
        );
    }
}

export default App;