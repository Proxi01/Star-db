import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner'


import './item-details.css';

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    loading: true,
    image: null,
  };

  componentDidMount(){
    this.updatePerson();
  }

  updatePerson(){
    const {itemId, getData, getImageUrl} = this.props;
    if(!itemId){
      return;
    }
      getData(itemId)
        .then((item)=>{
            this.setState({
                item,
                loading: false,
                image: getImageUrl(item),
            });
        })
  }


  componentDidUpdate(prevProps){
    if(this.props.itemId !== prevProps.itemId){
        this.updatePerson();
        this.setState({
            prevProps,
            loading: true
        })
    }
  }


  render() {

      if(this.state.loading){
          return <Spinner/>;
      }

    const {id, name, gender, birthYear, eyeColor} = this.state.item;
    const {image} = this.state;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={image} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
