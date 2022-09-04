import './card-list.css';

const CardList = ({monsters}) => (
    <div className={'card-container'}>
        { monsters.map((monster) => (
            <div className={'card'} key={monster.id}>
                <img alt='monster' src={`https://robohash.org/${monster.id}?set=set2`}/>
                <h2> { monster.name }</h2>
            </div>
        )) }
    </div>
)

export default CardList;