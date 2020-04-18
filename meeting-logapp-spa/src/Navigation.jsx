import React, {Component} from 'react';
import {FaUsers } from 'react-icons/fa';
import { Link } from "@reach/router";


class Navigation extends React.Component {

  constructor () {
    super();
  }

  render () {

    const { user } = this.props;

    return (

        <div className="container bg-primary">
          <div className="row">
            
            <div className="col-4">
              <nav className="navbar navbar-dark">
                  <Link className="navbar-brand" to="/">
                    <FaUsers className="pr-2" /> Meeting Log 
                  </Link>
              </nav>
            </div>

            <div className="col-8">
              <nav className="navbar navbar-dark justify-content-end">
                {(user !==null ) ? 
                  <React.Fragment>

                    <Link className="navbar-brand" to="/meetings"> 
                      Meetings
                    </Link>

                    <Link className="navbar-brand" to="/"> 
                      Logout
                    </Link>

                  </React.Fragment>
                :
                  <React.Fragment> 

                    <Link className="navbar-brand" to="/register"> 
                      Register 
                    </Link>

                    <Link className="navbar-brand" to="/login"> 
                      Login
                    </Link>

                 </React.Fragment>
                }
              </nav>
            </div>
          </div>
        </div>
    );
  }

}

export default Navigation;
