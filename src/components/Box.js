/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useState} from "react";

const Box = () => {
    const [fullName, setFullName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="MainBox">
            <div style={{ display: "flex", textAlign: "left", fontSize: "large"}}>

                <div className="Left">
                    <div style={{paddingTop:"20px", paddingLeft:"20px"}}>
                        <svg width="70px" height="70px" xmlns="http://www.w3.org/2000/svg">
                            <image href="https://www.freepnglogos.com/uploads/copyright-png/copyright-watermark-your-photos-photoshop-tutorial-34.png" height="80px" width="80px"  paddingRight="10px"  />
                        </svg>
                    </div>
                    <div>
                        <h3 style={{color:"#feffff", paddingLeft:"20px"}}>Find 3-D Objects, Mockups and Illustrations here</h3>
                    </div>
                    <div style={{paddingLeft:"5px"}}>
                        <svg width="350px" height="400px" xmlns="http://www.w3.org/2000/svg">
                            <image href="https://www.freepnglogos.com/uploads/shape-png/shape-transparent-shapes-png-download-clip-art-24.png" height="400px" width="350px" />
                        </svg>
                    </div>
                </div>

                <div className="Right" style={{textAlign: "center"}}>
                    <br />
                    <div style={{textAlign:"right", paddingRight:"50px"}}>
                        <select style={{borderStyle:"none"}}>
                            <option>English UK</option>
                            <option>Afrikaans ZA</option>
                        </select>
                    </div>
                    <br />
                    <div className="RightHeading">
                        <h3>Create Account</h3>
                    </div>

                    <div>
                        <div>
                            <>
                                <button style={{borderStyle:"none", backgroundColor:"#fefefe"}}><svg width="15px" height="10px" xmlns="http://www.w3.org/2000/svg">
                                            <image href="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" height="10px" width="10px"  paddingRight="10px"  />
                                        </svg>
                                    Sign up with Google
                                </button>
                            </>
                            
                            <button style={{borderStyle:"none", backgroundColor:"#fefefe"}}><svg width="15px" height="10px" xmlns="http://www.w3.org/2000/svg">
                                            <image href="https://www.freepnglogos.com/uploads/facebook-icons/facebook-icon-basic-round-social-iconset-icons-4.png" height="10px" width="10px"  paddingRight="10px"  />
                                    </svg>
                                Sign up with Facebook
                            </button>
                        </div>

                        <div>
                            <p>-OR-</p>
                        </div>

                        <div>
                            <form>
                                <div>
                                    <input type="text"
                                        placeholder="Full Name"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        style={{borderStyle:"none"}}
                                    />
                                </div>
                                <br />
                                <div>
                                    <input type="email"
                                        placeholder="Email Address"
                                        value={emailAddress}
                                        onChange={(e) => setEmailAddress(e.target.value)}
                                        style={{borderStyle:"none"}}
                                    />
                                </div>
                                <br />
                                <div>
                                    <input type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        style={{borderStyle:"none"}}
                                    />
                                </div>
                            </form>
                            <br />
                            <div>
                                <button type="submit"
                                    style={{color:"white", borderRadius:"5px", height: "40px", width: "180px", borderStyle: "none", backgroundColor: "#59bcbf"}}>
                                    Create Account
                                </button>
                            </div>
                            <br />
                            <div style={{ display: "flex", textAlign: "left",paddingLeft: "180px" }}>
                                <p>Already have an account?</p>
                                <button style={{color:"darkslateblue", borderStyle:"none", backgroundColor: "#feffff"}}>Login</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Box;