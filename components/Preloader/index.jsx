import React, { Component } from 'react'
// import "./style.sass";
export default class index extends Component {
    _renderDots(){
        const result = [];
        for(let i = 0; i < 6; i++){
          result.push(<div key={i} className='clock__dots'/>);
        }
        return result
      }
    render() {
        return (
            <div className="pl">
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__text">Loading…</div>
            </div>
        )
    }
}
