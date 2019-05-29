import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service'

import './app.css';
import Row from "../row/row";
import ItemDetails, {Record} from "../item-details/item-details";
import ItemList from '../item-list'

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
            <ItemDetails
                itemId={5}
                getData = {this.swapiService.getStarship}
                getImageUrl={this.swapiService.getStarshipImage}
            >
                <Record field='model' label='Model'/>
                <Record field='length' label='Length'/>
                <Record field='costInCredits' label='Cost'/>
            </ItemDetails>
        )

        const itemList = (<ItemList
            getData = {this.swapiService.getAllPeople}
            onItemSelected = {()=>{}}>
                {({name})=> <span>{name}</span>}
            </ItemList>
            )
        return (
            <div className='main'>
                <Header />
                <RandomPlanet />
                {/*<PeoplePage/>*/}
                <Row
                    left={itemList}
                    right={starshipDetails}/>
            </div>
        );
    }
}

export default App;