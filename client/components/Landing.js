import React, { Component } from 'react';
import { fetchData } from '../actions/landing';
import { Row, Col } from 'react-bootstrap';

const styles = {
    hero: {
        width: '100%',
        backgroundImage: 'url(\'/img/landing.jpg\')',
        height: '520px',
        marginBottom: '40px',
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Lato',
        fontSize: '50px',
        color: 'white'
    },
    heading: {
        width: '100%',
        textShadow: '2px 3px 2px rgb(43, 35, 35)'
    },
    feature: {
        content: {
            margin: '40px',
            lineHeight: '23px'
        },
        col: {
            marginBottom: '40px'
        },
        h1: {
            fontSize: '18px',
            textTransform: 'uppercase',
            marginBottom: '10px',
            fontWeight: 'bold'
        }
    }
};

class Hero extends Component {
    render() {
        return (
            <div id="hero" className="vertical-center" style={styles.hero}>
                <div className="text-center" style={styles.heading}>
                    <h1>{this.props.heading}</h1>
                </div>
            </div>
        );
    }
}

class Feature extends Component {
    render() {
        return (
            <div style={styles.feature.content}>
                <Row>
                    <Col md={6} style={styles.feature.col}>
                        <div>
                            <h1 style={styles.feature.h1}>{this.props.headerLeft}</h1>
                            <p>{this.props.contentLeft}</p>
                        </div>
                    </Col>
                    <Col md={6} style={styles.feature.col}>
                        <div>
                            <h1 style={styles.feature.h1}>{this.props.headerRight}</h1>
                            <p>{this.props.contentRight}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

class Landing extends Component {
    render() {
        const locales = this.props.locales.landing;
        const firstRowLocales = locales.firstRow;
        const secondRowLocales = locales.secondRow;
        return (
            <div>
                <Hero heading={this.props.locales.landing.heroHeader} />
                <div>
                    <Feature
                        headerLeft={firstRowLocales.headerLeft}
                        contentLeft={firstRowLocales.contentLeft}
                        headerRight={firstRowLocales.headerRight}
                        contentRight={firstRowLocales.contentRight} />
                    <Feature
                        headerLeft={secondRowLocales.headerLeft}
                        contentLeft={secondRowLocales.contentLeft}
                        headerRight={secondRowLocales.headerRight}
                        contentRight={secondRowLocales.contentRight} />
                </div>
            </div>
        );
    }
}

Landing.fetchData = fetchData;

export default Landing;
