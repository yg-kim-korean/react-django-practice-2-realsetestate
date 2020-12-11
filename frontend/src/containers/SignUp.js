import React, { useState } from 'react'
import { connect } from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import {signup} from '../actions/auth';
import PropTypes from 'prop-types';
import { setAlert } from '../actions/alert'
const SignUp = ({setAlert,signup,isAuthenticated}) => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })
    const {name,email,password,password2} = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e =>{
        e.preventDefault();
        if (password!==password2)
            setAlert('Passwords do not Match','error')
        else
            signup({name,email,password, password2});
    };
    if (isAuthenticated) //로그인 되면
        return <Redirect to='/' />;
    
    return (
        <div className="auth">
            <Helmet>
                <title>Realest Estate - Sign Up</title>
                <meta name='description'
                content='sign up page' />
            </Helmet>
            <h1 className='auth__title'>Sign Up</h1>
            <p className='auth__lead'>Create your Account</p>
            <form className='auth__form' onSubmit={e => onSubmit(e)}>
                <div className='auth__form__group'>
                    <input className='auth__form__input' type='text' name='name' value={name} placeholder='Type Name...' onChange={e=>onChange(e)} required />
                </div>
                <div className='auth__form__group'>
                    <input className='auth__form__input' type='email' name='email' value={email} placeholder='Type Email...' onChange={e=>onChange(e)} required />
                </div>
                <div className='auth__form__group'>
                    <input 
                    className='auth__form__input' type='password' name='password' value={password} placeholder='Type Password...' onChange={e=>onChange(e)} required minLength='6'
                    />
                </div>
                <div className='auth__form__group'>
                    <input 
                    className='auth__form__input' type='password' name='password2' value={password2} placeholder='Type Confirm Password...' onChange={e=>onChange(e)} required minLength='6'
                    />
                </div>
                <button className='auth__form__button'>Register</button>
            </form>
            <p className='auth__authtext'>
                Already have an account? <Link className='auth__authtext__link' to='/login'>Login</Link>
            </p>
        </div>
    )
}
SignUp.propTypes={
    setAlert : PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, {setAlert,signup})(SignUp);


