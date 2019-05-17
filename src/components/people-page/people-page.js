import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';


import './people-page.css';
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends Component {
    swapiService = new SwapiService();


    state = {
        selectedPerson: 1,
        hasError: false
    }


    onPersonSelected = (id)=>{
        this.setState({
            selectedPerson: id
        })
    }

    componentDidCatch(){
        this.setState({
            hasError: true
        })
    }

  render() {

        const {getData} = this.props;

        if(this.state.hasError){
            return <p style={{color: 'white'}}>Sorry! Something went wrong. We are already working on it.</p>
        }

      return (
          <div className="row mb2">
              <div className="col-md-6">
                  <ItemList getData = {this.swapiService.getAllPeople} onItemSelected = {this.onPersonSelected}/>
              </div>
              <div className="col-md-6">
                  <PersonDetails personId = {this.state.selectedPerson}/>
              </div>
          </div>
      )
  }
}
