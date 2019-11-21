import React, { useEffect } from "react";
import Card from "../Card"
import SideMenu from '../SideMenu'
import Header from "../Header"
import Container from "../Container"

import "./List.scss";
import { connect } from 'react-redux';
import { fetchFirstHeroes } from '../../actions/creators';


const List = (props) => {

    useEffect(() => {
        if(props.heroes.length === 0){
            props.fetchFirstHeroes();
        }
    },[]);

    console.log(props.heroes)


    return (
        <Container id="list" header={<Header/>}>
            <SideMenu />
           <div className="d-flex flex-wrap justify-content-center container">
           {props.heroes.map((hero,index) => {
                   return(
                        <Card hero={hero} key={index}/>
                   );
               }
               )}
            </div>
        </Container>
    );
}

const mapStateToProps = (state) => {

    return {heroes: state.heroes};
}

export default connect(
    mapStateToProps,
     { fetchFirstHeroes })
     (List);