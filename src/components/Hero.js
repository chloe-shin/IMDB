import React from 'react';
import {Container, Button, Row, Col} from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const URL_BASE = `https://image.tmdb.org/t/p/original`;

export default function Hero(props) {
   if (!props.movie) { return (

    <Container 
    className="background" 
    fluid={true} 
    style={{
        background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg')`,
        maxHeight: '600px',
        height:'auto',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(0,0,0,.8)'
    }}>
    <Row>
    <Col sm= {0} lg={3} md={1}> 
    </Col>
    <Col sm={12} lg={9} md={11}>
        <div className = "background-text">
        <div className = "titleDisplay">
        <CircularProgressbar 
            value={8.3} 
            maxValue = {10} 
            strokeWidth = {15}
            text={8.3} 
            className= "titleProgress"
            styles = {buildStyles({
                pathColor: `rgba(255, 150, 0, 0.7)`,
                textColor: 'white',
                trailColor: '#d6d6d6'
            })}
        /><br/>
        <h1 className="title"> Joker </h1> 
        </div>
        <p className="average"> 2019-10-04 </p> 

        <p className="hero-overview"> During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.</p> 
        <button className= "trailer"> WATCH TRAILER </button>

    </div>
    </Col>
    </Row>
</Container>
   )
        } else return (
        
            <Container 
            className="background" 
            fluid={true} 
            style={{
                background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('${URL_BASE}${props.movie.backdrop_path}`,
                maxHeight: '600px',
                height:'auto',
                backgroundSize: 'cover',
                backgroundColor: 'rgba(0,0,0,.8)'
            }}>
            <Row>
            <Col sm= {0} lg={3} md={1}> 
            </Col>
            <Col sm={12} lg={9} md={11}>
                <div className = "background-text">
                <div className = "titleDisplay">
                <CircularProgressbar 
                    value={props.movie.vote_average} 
                    maxValue = {10} 
                    strokeWidth = {15}
                    text={`${props.movie.vote_average}`} 
                    className= "titleProgress"
                    styles = {buildStyles({
                        pathColor: `rgba(255, 150, 0, 0.7)`,
                        textColor: 'white',
                        trailColor: '#d6d6d6'
                    })}
                /><br/>
                <h1 className="title"> {props.movie.original_title}</h1> 
                </div>
                <p className="average"> {props.movie.release_date}</p> 
    
                <p className="hero-overview"> {props.movie.overview}</p> 
                <button className= "trailer" onClick= {props.movie.video}> WATCH TRAILER </button>

            </div>
            </Col>
       

            </Row>
        </Container>
    )
}