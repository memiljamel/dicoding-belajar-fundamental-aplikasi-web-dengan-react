import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextField from 'src/components/TextField';
import Button from 'src/components/Button';
import LocaleContext from 'src/context/LocaleContext';
import useInput from 'src/hooks/useInput';
import { login } from 'src/data/network-data';
import { header, login as loginPage } from 'src/utils/content';

function Login({ onLoginSuccess }) {
  const { locale } = React.useContext(LocaleContext);

  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (email.length === 0) {
      alert('email is not allowed to be empty.');
      return;
    }

    const atposition = email.indexOf('@');
    const dotposition = email.lastIndexOf('.');
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 > email.length) {
      alert('please provide a valid email address.');
      return;
    }

    if (password.length === 0) {
      alert('password is not allowed to be empty.');
      return;
    }

    if (password.length < 6) {
      alert('password must be at least 6 characters.');
      return;
    }

    const { error, data } = await login({ email, password });
    if (!error) {
      onLoginSuccess(data);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white relative before:min-h-[24px] before:flex-grow before:block before:h-6 after:min-h-[24px] after:flex-grow after:block after:h-6 dark:bg-slate-900">
      <div className="w-full max-w-[400px] p-0 mx-auto" role="presentation">
        <form className="sm:dark:bg-slate-800 sm:shadow-04dp rounded-xl p-4 sm:px-8 sm:py-6 m-0" onSubmit={onSubmitHandler}>
          <div className="mb-6">
            <h1 className="p-0 m-0 text-slate-900 text-center text-xl font-Roboto font-medium text-ellipsis overflow-hidden whitespace-nowrap dark:text-slate-200">{header[locale].appName}</h1>
          </div>
          <div className="mb-4">
            <TextField 
              text={loginPage[locale].email} 
              name="email" 
              type="email" 
              value={email} 
              onValueChange={onEmailChange}
            />
          </div>
          <div className="mb-6">
            <TextField 
              text={loginPage[locale].password} 
              name="password" 
              type="password" 
              value={password} 
              onValueChange={onPasswordChange} 
            />
          </div>
          <div className="flex justify-between items-center p-0 mb-0">
            <Link className="font-Roboto font-medium text-ellipsis text-sm text-sky-500 outline-none hover:text-sky-600 focus:text-sky-600" to="/register">{loginPage[locale].link} </Link>
            <Button text={loginPage[locale].submit}  type="submit" onButtonClick={() => {}} />
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default Login;