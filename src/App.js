import React, {useState} from 'react';

const App =  () => {
    const [players, ] = useState(new Array(10).fill(0).map((_, idx) => `Player ${idx+1}`));
    const [firstName, setFirstName] = useState("");
    const [player, setPlayer] = useState("");
    const [info, setInfo] = useState("");
    const [error, setError] = useState("");


    const handleInputChange = event => {
      const {name, value} = event.target;
      switch(name) {
        case "name":
          setFirstName(value);
          break;
        case "player":
          setPlayer(value);
          break;
      }
    }
    
    const handleSubmit = event => {
      event.preventDefault();

      if(event.target.checkValidity()) {
        // if form is valid, do something
        setInfo(firstName + " " + player);
      }
      else {
        if(!firstName || firstName.trim().length < 1) {
          setError("please enter your first name");
        }
      }
    }

    return (
        <div className="border m-4 p-4">
          <form onSubmit = {handleSubmit} noValidate>
            <div className="form-group">
              <input
                className="form-control"
                required
                value = {firstName}
                onChange = {handleInputChange}
                placeholder="Enter your name"
                name="name"
              />
              <div className="mt-2">
                {error ? <span className="alert alert-danger">{error}</span> : null}
              </div>
            </div>
            <div className="form-group">
              <select className="form-control" name="player" value={player} onChange={handleInputChange}>
                <option>Select a Player</option>
                { players.map((val) => (
                  <option>{val}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block">Submit</button>
            </div>
          </form>
          {info ? <div className = "alert alert-primary"> {info}</div> : null}
        </div>
    );
};

export default App;
