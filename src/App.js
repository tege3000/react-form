import React, {useState} from 'react';

const App =  () => {
    const [players, ] = useState(new Array(10).fill(0).map((_, idx) => `Player ${idx+1}`));

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
                { players.map((val, index) => (
                  <option key={index}>{val}</option>
                ))}
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
