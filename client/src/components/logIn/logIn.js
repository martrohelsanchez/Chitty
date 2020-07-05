import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import styles from './logIn.module.css';

function LogIn({ setUserInfo}) {
    const [input, setInput] = useState('');
    const [err, setErr] = useState(null);
    const history = useHistory();

    function logIn(e) {
        axios.post('http://localhost:5000/logIn', {
            username: input.trim()
        })
            .then(({data}) => {
                if (data.isAuth) {
                    setInput('');
                    setUserInfo(data);
                    history.push('/chat');
                } // if isAuth is false, server send 401 status
            })
            .catch(({response}) => {
                if (response.status === 401) {
                    setErr('Wrong nickname or password');
                } else {
                    setErr('Sorry, something went wrong. Please try again later')   
                }
            })
        setErr(null)
    }

    function onInputChange(e) {
        setInput(e.target.value);
    }

    function directToSignUp() {
        history.push('/signUp')
    }

    return (
        <div className={styles.logInContainer}>
            <h3 className={styles.promptNickname}>Log In</h3>
            <h3 className={styles.promptNickname}>Enter your nickname?</h3>
            <input 
                className={styles.nicknameInput} 
                type="input"
                value={input}
                autoFocus
                onChange={onInputChange}
                onKeyDown={({ key }) => key === 'Enter' ? logIn() : null}
            />
            {<div className={styles.err}>{err}</div>}
            <button className={styles.logInBtn} onClick={logIn}>
                Log In
            </button>
            <br />
            <p style={{textAlign: 'center'}}>
                Doesn't have an account yet?
            </p>
            <button className={styles.signUpBtn} onClick={directToSignUp}>
                Sign Up
            </button>
        </div>
    )
}

export default LogIn