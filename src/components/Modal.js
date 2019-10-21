import React from 'react'
import { Modal, Button } from 'react-bootstrap'; 

export default function ModalTrailer(props) {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <iframe width="560" height="315" 
                src={`https://www.youtube.com/embed/${props.keyVideo}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Modal>
        </div>
    )
}
