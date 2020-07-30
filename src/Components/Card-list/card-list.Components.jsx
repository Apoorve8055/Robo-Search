import React from 'react';
import './card-list.css';
import {Card} from '../Card/Card.components';

export const CardList = props => {
        return(<div className="card-list">
        {props.list.map((robo)=><Card key={robo.id} roboData={robo} />)}
    </div>);
}
