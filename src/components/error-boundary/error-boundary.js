import React, {Component} from "react";

class ErrorBoundary extends Component{

    state = {
        hasError: false

    }

    componentDidCatch(){
        this.setState({
            hasError: true
        })
    }

    render(){
        if(this.state.hasError){
            return <p style={{color: 'white'}}>Sorry! Something went wrong. We are already working on it.</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;