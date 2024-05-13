import React,{ useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../../../context/userContext';

export const Header = (props) => {
  const { isLoggedIn } = useAuth();
  
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                
                {/* Use Link component for navigation */}
                {isLoggedIn ? (
                    <Link to="/emotiondetection" className="btn btn-custom btn-lg page-scroll">
                      Get Started
                    </Link>
                  ) : (
                    <Link to="/loginsignup" className="btn btn-custom btn-lg page-scroll">
                      Get Started
                    </Link>
                  )         
                }

                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
