import React from 'react';
import "./FifthPage.scss";
const FifthPage: React.FC = () => {
    return (
        <section className="section">
            <div className="fifth-page">
                <div className="fifth-list">
                    <div className="fifth-item">
                        <h2>Partnership</h2>
                        <a href="mailto:looc.tzlee@gmail.com">
                            <p className="fifth-contact">looc.tzlee@gmail.com</p>
                            <p className='icon'>✉</p>
                        </a>
                    </div>
                    <div className="fifth-item">
                        <h2>Recruiting</h2>
                        <a href="mailto:looc.tzlee@gmail.com">
                            <p className="fifth-contact">looc.tzlee@gmail.com</p>
                            <p className='icon'>✉</p>
                        </a>
                    </div>
                    <div className="fifth-item">
                        <h2>Learn more.</h2>
                        <div className="learn-more">
                            <p className="fifth-contact">Learn more about us <span>{">"}</span></p>

                        </div>
                    </div>
                </div>
                <div className="fifth-text">
                    Let's  <br />
                    Make the world
                    Together.
                </div>
            </div>
        </section>
    );
};



export default FifthPage;