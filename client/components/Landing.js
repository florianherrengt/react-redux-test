import React, { Component } from 'react';
import { fetchData } from '../actions/landing';
import { Row, Col } from 'react-bootstrap';

const styles = {
    hero: {
        'width': '100%',
        'background-color': '#1E88E5',
        'height': '300px',
        'margin-top': '-20px',
        'display': 'flex',
        'align-items': 'center'
    },
    width100: {
        'width': '100%'
    }
};

class Landing extends Component {
    render() {
        return (
            <div>
                <div id="hero" className="vertical-center" style={styles.hero}>
                    <div className="text-center" style={styles.width100}>
                        <h1>The menu builder</h1>
                    </div>
                </div>
                <div>
                    <Row>
                        <Col md={6}><div className="text-center">Text here</div></Col>
                        <Col md={6}><div className="text-center">Image here</div></Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col md={6}><div className="text-center">Image here</div></Col>
                        <Col md={6}><div className="text-center">Text here</div></Col>
                    </Row>
                </div>
            </div>
        );
    }
}

Landing.fetchData = fetchData;

export default Landing;
