import React from 'react';
import './CampusStar.css';

const CampusStar = (props) => {
    return (
            <div className="campus-star-page-container">
                <h1> Campus Connect Program </h1>
                <br />
                <p className="about-p1">Want to create a better ecosystem at your Campus? Be the part of change you want to see in world. Register for our Campus Connect Program. </p>
                <div className="campus-star-container">
                <form action="https://xyz.us19.list-manage.com/subscribe/post?u=f47653ab77a99147b5fb1bdc4&amp;id=04a9e4d392" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" novalidate>
                        <div>
                            <div>
                                <input type="text" name="FNAME" required id="star-name" placeholder="First Name" />
                                <span className="ast">*</span>
                            </div>
                            <div>
                                <input type="text" name="LNAME" id="star-name" placeholder="Last Name" />
                            </div>
                            <div>
                                <input type="email" name="EMAIL" className="required email" id="star-email" placeholder="Email" />
                                <span className="ast">*</span>
                            </div>
                            <div>
                                <input type="text" name="COLLEGE" required id="star-org" placeholder="College Name" />
                                <span className="ast">*</span>
                            </div>
                            <div>
                                <select name="YEAR" required id="star-year">
                                    <option value="" disabled selected>Year</option>
                                    <option value="1st">1st</option>
                                    <option value="2nd">2nd</option>
                                    <option value="3rd">3rd</option>
                                    <option value="4th">4th</option>
                                    <option value="Other">Other</option>
                                </select>
                                <span className="ast">*</span>
                            </div>
                            <div>
                                <input type="number" name="MMERGE6" className="" id="star-contact" placeholder="Contact Number" />
                            </div>
                            <div>
                                <input type="text" name="CITY" required id="star-city" placeholder="City" />
                                <span className="ast">*</span>
                            </div>
                            <div>
                                <input type="text" name="LINKEDIN" id="star-prof" placeholder="LinkedIn Profile" />
                            </div>
                            <div id="mce-responses" className="clear">
                                <div className="response" id="mce-error-response" style={{ "display": "none" }}></div>
                                <div className="response" id="mce-success-response" style={{ "display": "none" }}></div>
                            </div>
                            <div style={{ "position": "absolute", "left": "-5000px" }} aria-hidden="true"><input type="text" name="b_f47653ab77a99147b5fb1bdc4_7b6a3dbf8d" tabindex="-1" value="" /></div>
                            <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="star-button" className="button" /></div>
                        </div>
                    </form>
                </div>
        </div>
    );
}

export default CampusStar;