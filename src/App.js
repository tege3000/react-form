import React from 'react';

const App =  () => {

    return (
        <div className="border m-4 p-4">
          <form>
            <div className="form-group">
              <input
                className="form-control"
                required
                placeholder="Enter your name"
                name="name"
              />
            </div>
            <div className="form-group">
              <select className="form-control" name="player">
                <option>Player #1</option>
                <option>Player #2</option>
              </select>
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block">Submit</button>
            </div>
          </form>
        </div>
    );
};

export default App;
