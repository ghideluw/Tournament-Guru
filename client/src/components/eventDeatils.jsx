import React, { useState } from 'react';
// import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


function EventDetailsForm() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [title, setTitle] = useState('');
  const [game, setGame] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [prizePool, setPrizePool] = useState('');


  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'title') {
      setTitle(inputValue);
    } else if (inputType === 'game') {
      setGame(inputValue);
    } 
    else if (inputType === 'date') {
        setDate(inputValue);
      }
      else if (inputType === 'description') {
        setDescription(inputValue);
      }
      else {
      setPrizePool(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();


    //  we want to clear out the input after a successful registration.
    setTitle('');
    setGame('');
    // setDate('');
    setDescription('');
    setPrizePool('');
  };

  return (
    <div>
      
      <form className="form">
        <input
          value={title}
          name="title"
          onChange={handleInputChange}
          type="text"
          placeholder="event name"
        />
        <input
          value={game}
          name="game"
          onChange={handleInputChange}
          type="text"
          placeholder="game name"
        />
        <input
          value={date}
          name="date"
          onChange={handleInputChange}
          type="text***"
          placeholder="date"
        />
        {/* <input 
        name="date" 
        type="date" 
        disabled={ this.state.mode } 
        value={ moment(this.state.item.date).format("DD-MMM-YYYY") } 
        onChange={ this.handleInputChange } 
        /> */}
         
         <input
          value={description}
          name="description"
          onChange={handleInputChange}
          type="text"
          placeholder="description"
        />
        <input
          value={prizePool}
          name="Prize pool"
          onChange={handleInputChange}
          type="float"
          placeholder="Prize pool"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default EventDetailsForm;

