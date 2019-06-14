import React, { Component } from 'react';
import Spinner from '../spinner'


import './item-details.css';



const Record = ({item, field, label})=>{
    return(
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
}



export default class ItemDetails extends Component {


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

    const {name} = this.state.item;
    const {image, item} = this.state;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={image} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
              {
                  React.Children.map(this.props.children, (child)=>{
                      return React.cloneElement(child, {item})
                  })
              }
          </ul>
        </div>
      </div>
    )
  }
}

export {
    Record
};