import React from 'react';

import { SignInContainer, SignInButtonContainer } from './sign-in.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <SignInContainer>
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} onChange={this.handleChange} label='email' required />

                    <FormInput name='password' type='password' value={this.state.passwordl} onChange={this.handleChange} label='password' required />

                    <SignInButtonContainer>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '} SIGN IN WITH GOOGLE {' '}
                        </CustomButton>
                    </SignInButtonContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;