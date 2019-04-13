import React from 'react';

import './card-details.css';

const CardDetails = () => {
  return (
    <div>
      <div className="jumbotron">
        <form>
          <fieldset>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.
              </small>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default CardDetails;
