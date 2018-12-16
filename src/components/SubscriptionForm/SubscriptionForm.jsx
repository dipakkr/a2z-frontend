import React from 'react';
import './SubscriptionForm.css';

const SubscriptionForm = (props) => {
    return (
        <div className="subscription-page-container">
            <h1>Subscribe to our <span style={{color: "#678"}}>Newsletter</span></h1>
                <div className="subscription-container">
                    <form action="https://xyz.us19.list-manage.com/subscribe/post?u=f47653ab77a99147b5fb1bdc4&amp;id=7b6a3dbf8d" method="post" name="mc-embedded-subscribe-form" novalidate>
                        <div>
                            <div>
                                <input type="text" name="NAME" required id="sub-name" placeholder="Name" />
                                <span className="ast">*</span>
                            </div>
                            <div>
                                <input type="email" name="EMAIL" className="required email" id="sub-email" placeholder="Email" />
                                <span className="ast">*</span>
                            </div>
                            <div>
                                <input type="text" name="ORG" required id="sub-org" placeholder="Organisation" />
                                <span className="ast">*</span>
                            </div>
                            <div>
                                <input type="number" name="CONTACT" className="" id="sub-contact" placeholder="Contact Number" />
                            </div>
                            <div>
                                <input type="text" name="CITY" required id="sub-city" placeholder="City" />
                                <span className="ast">*</span>
                            </div>
                            <div>
                                <select name="DESGN" required id="sub-desgn">
                                    <option value="" disabled selected>Designation</option>
                                    <option value="Student">Student</option>
                                    <option value="Working Professional">Working Professional</option>
                                    <option value="Other">Other</option>
                                </select>
                                <span className="ast">*</span>
                            </div>
                            <div>
                                <textarea name="SUGG" className="" id="sub-sugg" placeholder="Suggestions" />
                            </div>
                            <div id="mce-responses" className="clear">
                                <div className="response" id="mce-error-response" style={{ "display": "none" }}></div>
                                <div className="response" id="mce-success-response" style={{ "display": "none" }}></div>
                            </div>
                            <div style={{ "position": "absolute", "left": "-5000px" }} aria-hidden="true"><input type="text" name="b_f47653ab77a99147b5fb1bdc4_7b6a3dbf8d" tabindex="-1" value="" /></div>
                            <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="sub-button" className="button" /></div>
                        </div>
                    </form>
                </div>
        </div>
    );
}

export default SubscriptionForm;