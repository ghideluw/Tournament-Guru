import React, { useState } from 'react';
// import './style.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../src/utils/helpers';

function EventForm() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [inGameUserName, setInGameUserName] = useState('');
    //   const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const age = moment().diff(moment("DD/MM/YYYY"));

    if (ageInYears > 100) {
        alert('More than 100 years old')
    } else if (ageInYears < 16) {
        alert('You must be at least 16 years of age!')
    } else {
        alert('Age is fine')
    }
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        }
        else if (inputType === 'inGameUserName') {
            setInGameUserName(inputValue);
        }
        else if (inputType === 'age') {
            setAge(inputValue);
        }
        else {
            setPhone(inputValue);
        };

        const handleFormSubmit = (e) => {
            // Preventing the default behavior of the form submit (which is to refresh the page)
            e.preventDefault();

            // check to see if email is not valid or if the userName is empty. Error message displayed if input invalid.
            if (!validateEmail(email) || !userName) {
                setErrorMessage('Email or username is invalid');
                // exit out of this code block if something is wrong so that the user can correct it
                return;
            }

        }
        alert(`Hello ${userName}`);

        // clear out the input after a successful registration.
        setUserName('');
        setEmail('');
        setInGameUserName('');
        setAge('');
        setPhone('');
    };

    return (
        <div>
            <p>Hello {userName}</p>
            <input
                value={userName}
                name="userName"
                onChange={handleInputChange}
                type="text"
                placeholder="username"
            />
            <form className="form">
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                />
                <input
                    value={inGameUserName}
                    name="inGameUserName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="In Game Username"
                />
                <input
                    name="age"
                    disabled={this.state.mode}
                    value={moment(this.state.item.age).format("DD-MMM-YYYY")}
                    onChange={this.handleInputChange}
                    type="integer"
                    placeholder="Age"

                />

                <input
                    value={phone}
                    name="phone"
                    onChange={handleInputChange}
                    type="tel"
                    autoComplete="tel"
                    placeholder="Phone"
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

export default EventForm;
