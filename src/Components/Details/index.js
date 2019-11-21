import React from 'react';
import { connect } from 'react-redux';
import HeroDetails from '../HeroDetails';
import Container from '../Container';
import Header from '../Header';

import "./Details.scss";

const Details = (props) => {
    // console.log(props.match.params.id)
    const hero = props.heroes.find(hero => hero.id === props.match.params.id);

    
    if(hero) {
        return(
            <Container id="details" header={<Header/>}>
                <HeroDetails {...hero} />
            </Container>
        );
    } else {
        return(
            <p>Attendez</p>
        )
    }
    
}

const mapStateToProps = (state) => {
    return { heroes: state.heroes };
}

export default connect(mapStateToProps, null)(Details);