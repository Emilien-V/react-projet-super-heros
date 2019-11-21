import React from "react";
import Checkbox from "../Checkbox"
import { connect } from 'react-redux';
import { selectHero, deselectHero } from '../../actions/creators';
import Button from '../Button'

import "./Card.scss"

const Card = props => {

    const {hero, small} = props
    const isSelected = [props.selectHeroes.hero1, props.selectHeroes.hero2].some(selectHero => selectHero && hero && selectHero.id === hero.id);
    return (
        <div className={`card ${hero ? hero.biography['publisher']: 'disabled'} ${small && 'small'} `}>
            <div className="card-circle">
            </div>
            <div className="card-text">
                {hero && <h5 >{hero.name}</h5>}
                {hero && !small &&
                    <>
                        <h6 >{hero.biography['full-name']}</h6>
                        <p >{hero.biography['publisher']}</p>
                    </>
                }
            </div>
            {/* <Button to={`/details/${hero && hero.id}`} className="mt-5">Checker</Button> */}
            {hero && !props.disabled &&

                <div className="checker">
                    <Checkbox 
                        publisher={hero.biography['publisher']} 
                        onCheck={() => {isSelected ? props.deselectHero(hero) : props.selectHero(hero)}}
                        check={isSelected}
                    />
                </div>
            }
            {hero && <img src={hero.image.url} alt="img-card" />}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {selectHeroes: state.selectHeroes};
}

export default connect(mapStateToProps, { selectHero, deselectHero })(Card);