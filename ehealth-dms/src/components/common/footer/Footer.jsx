import React from 'react';
import Container from '@material-ui/core/Container';

class Footer extends React.Component{
    render(){
        return (
            <footer className={"footer"
                + (this.props.default ? " footer-default":"")
            }>
                    <hr />
                <Container className="footer-display" fluid={this.props.fluid ? true:false}>
                    <div className="copyright">
                        &copy; 2020-{(new Date()).getYear()}, <a href="#!" target="_blank" rel="noopener noreferrer"> SDG Cohort 2 Team 341-A </a>
                    </div>
                </Container>
            </footer>
        );
    }
}

export default Footer;
