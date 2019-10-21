import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
// import CardDeck from 'react-bootstrap/CardDeck'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'


export default function MovieCard(props) {


    const onRatingSliderChange = (arr, val) => {
        const newMovie = arr.filter((el) => {
            if (el.vote_average > val.min && el.vote_average < val.max) {
                return true
            }
            return false
        })
        props.setMovie(newMovie)
        props.setRatingVal(val)
    }


    return (
        <div className="container-fluid my-auto">
            <div className="container mx-auto my-4 py-4">
                <div className="row justify-content-center text-center">
                    <Col lg={10} className="contentCol">
                        <Row>
                            <Col sm={12}>
                                
                                <p className="range">IMDb Rating</p>
                                <InputRange
                                    maxValue={10}
                                    minValue={0}
                                    value={props.ratingVal}
                                    onChange={value => onRatingSliderChange(props.origMovies, value)} />


                            </Col>
                        </Row>
                        <Row>
                            {props.movie && props.movie.map((el) => {
                                return (
                                    <Col sm={4}>

                                        <Card className="mb-3 bg-dark text-white card">
                                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} />
                                            <Card.ImgOverlay>
                                            <p className="rate">{el.vote_average}</p>
                                                <Card.Text>
                                                    <div className="cardText">
                                                        <h6 className="card-title">{el.original_title} </h6>
                                                        <p className="card-text">{el.release_date}</p>
                                                        <p className="card-text overview"> {el.overview}
                                                        </p>    
                                                        <button className="card-trailer"> TRAILER</button>
                                                    </div>
                                                </Card.Text>
                                            </Card.ImgOverlay>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                </div>
            </div>
        </div>
    )
}

//*rate*//
// <p className="rate">{el.vote_average}</p>


//*see more info*//
// <p className="card-text"><small className="text-muted"><a href="#">see more info</a> </small></p>


// *Circular Rate*
// <CircularProgressbar className = "rate"
// value={el.vote_average}
// maxValue={10}
// text={`${el.vote_average}`}
// strokeWidth={23}
// styles={buildStyles({
//     pathColor: 'orange',
//     textColor: 'white',
//     trailColor: '#d6d6d6'
// })}
// />

//*Horizental Card*
// <Card className="mb-3"> 
//     <Row noGutters={true}>                                        
//     <div class="col-lg-4">
//         <img src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} className="card-img" alt="..." />
//         </div>
//         <Col md={8}>
//             <Card.Body>
//                 <h5 className="card-title">{el.original_title} </h5>
//                 <p className="card-text">{el.release_date}</p>
//                 <p className="card-text">
//                 <CircularProgressbar 
//                 value={el.vote_average} 
//                 maxValue = {10} 
//                 text={`${el.vote_average}`}
//                 strokeWidth = {13}
//                 styles = {buildStyles({
//                     pathColor: `rgba(255, 100, 0, 0.6)`,
//                     textColor: 'orangered',
//                     trailColor: '#d6d6d6'
//                 })}
//                 /> 
//                 </p>
//                 <p className="card-text"><small className="text-muted"><a href ="#">see more info</a> </small></p>
//             </Card.Body>
//         </Col>
//     </Row>
// </Card>