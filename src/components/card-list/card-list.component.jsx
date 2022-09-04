import {Component} from "react";
import './card-list.css';

class CardListComponent extends Component {

    render() {
        return (
            <div className={'card-container'}>
                { this.props.monsters.map((monster) => (
                    <div className={'card'} key={monster.id}>
                        <img alt='monster' src={`https://robohash.org/${monster.id}?set=set2`}/>
                        <h2> { monster.name }</h2>
                    </div>
                )) }
            </div>
        )
    }
}

export default CardListComponent;