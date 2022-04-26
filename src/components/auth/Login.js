import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/auth';

const Login = () => {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser({ email: emailValue, password: passwordValue });
    navigate('/');
  };

  return (
    <section className='login is-fullheight-with-navbar has-background-grey-dark form-page'>
      <div className='container pt-6'>
        <div className='columns pt-6'>
          <form
            className='column is-half is-offset-one-quarter box has-background-grey-light'
            onSubmit={handleSubmit}
          >
            <div className='field'>
              <label
                htmlFor='email'
                className='label has-text-white has-text-centered'
              >
                Email
              </label>
              <div className='control'>
                <input
                  type='text'
                  className='input has-background-grey-lighter'
                  id='email'
                  value={emailValue}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <div className='field'>
              <label
                htmlFor='password'
                className='label has-text-white has-text-centered'
              >
                Password
              </label>
              <div className='control'>
                <input
                  type='password'
                  className='input has-background-grey-lighter'
                  id='password'
                  value={passwordValue}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>

            <button
              type='submit'
              value='Login'
              className='label button is-fullwidth is-italic'
            >
              Log me in!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
