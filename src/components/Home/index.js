import React, { Component } from 'react';
import newsfeedData from "./data";


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            linkList: newsfeedData,
            isLoading: false,
            error: null,
        };
    }

    render() {
        return (
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-12 offset-md-1 col-md-11">
                            <div className="swiper-container hero-slider">
                                <div className="swiper-wrapper">
                                    {this.state.linkList.map((newsfeed) => {
                                        return(

                                        // Load list of newsfeed here                                            
                                        <div className="swiper-slide slide-content d-flex align-items-center">
                                            <div className="single-slide">
                                                <h1 data-aos="fade-right" data-aos-delay="200">{newsfeed.title}<br /> {newsfeed.title_description}
                                                </h1>
                                                <p data-aos="fade-right" data-aos-delay="600">{newsfeed.description}</p>
                                                <a data-aos="fade-right" data-aos-delay="900" href="infoterkini.html" className="btn btn-primary">Lihat lebih lanjut</a>
                                            </div>
                                        </div>);

                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <span className="arr-left"><i className="fa fa-angle-left"></i></span>
                    <span className="arr-right"><i className="fa fa-angle-right"></i></span>
                </div>
                <div className="texture"></div>
                <div className="diag-bg"></div>
            </section>
        );
    }
}

export default Home;