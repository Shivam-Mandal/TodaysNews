import React, { Component} from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.hoverInColor = this.hoverInColor.bind(this);
        this.hoverOutColor = this.hoverOutColor.bind(this);
    }

    hoverInColor(e) {
        e.target.style.color = "#ffc107";
    }
    hoverOutColor(e) {
        e.target.style.color = "white";
    }
    render() {
        const colorPanel = {
            color: "white",
            backgroundColor: " rgba(var(--bs-secondary-color-rgb),.9)"
        }
        
        return (
            <>
                <footer className="text-center text-lg-start  text-muted">
                    <section className="border-bottom pt-2 mt-4" style={colorPanel}>
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4 text-warning">
                                        <i className="fas fa-gem me-3"></i>{this.props.title}
                                    </h6>
                                    <p>
                                        Here you can use rows and columns to organize your footer content. Lorem ipsum
                                        dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Useful links
                                    </h6>
                                    <span className='mb-0'><Link className="nav-link" id='business' onMouseOver= {this.hoverInColor} onMouseOut={this.hoverOutColor} aria-current="page" to="/general">Home</Link></span>
                                    <span className='mb-0'><Link className="nav-link" id='business'onMouseOver= {this.hoverInColor} onMouseOut={this.hoverOutColor}  to="/business">Business</Link></span>
                                    <span className='mb-0'><Link className="nav-link" id='entertainment'onMouseOver= {this.hoverInColor} onMouseOut={this.hoverOutColor}  to="/entertainment">Entertainment</Link></span>
                                    <span className='mb-0'><Link className="nav-link" id='general'onMouseOver= {this.hoverInColor} onMouseOut={this.hoverOutColor}  to="/general">General</Link></span>
                                    <span className='mb-0'><Link className="nav-link" id='health' onMouseOver= {this.hoverInColor} onMouseOut={this.hoverOutColor} to="/health">Health</Link></span>
                                    <span className='mb-0'> <Link className="nav-link" id='science'onMouseOver= {this.hoverInColor} onMouseOut={this.hoverOutColor}  to="/science">Science</Link></span>
                                    <span className='mb-0'> <Link className="nav-link" id='sports'onMouseOver= {this.hoverInColor} onMouseOut={this.hoverOutColor}  to="/sports">Sports</Link></span>
                                    <span className='mb-0'><Link className="nav-link" id='technology'onMouseOver= {this.hoverInColor} onMouseOut={this.hoverOutColor}  to="/technology">Technology</Link></span>
                                </div >

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                    <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                    <p>
                                        <i className="fas fa-envelope me-3"></i>
                                        info@example.com
                                    </p>
                                    <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                    <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                                </div>
                            </div >
                        </div >
                    </section >
                    <div className="text-center p-4" style={colorPanel} >
                        © 2021 Copyright :
                        <a className="text-reset fw-bold" href="https://github.com/Shivam-Mandal/"> shivammandal.com</a>
                    </div>
                </footer >
            </>
        )
    }

}