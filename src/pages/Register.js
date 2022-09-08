import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from 'src/components/TextField';
import Button from 'src/components/Button';
import LocaleContext from 'src/context/LocaleContext';
import useInput from 'src/hooks/useInput';
import { register } from 'src/data/network-data';
import { header, register as registerPage } from 'src/utils/content';

function Register() {
  const navigate = useNavigate();

  const { locale } = React.useContext(LocaleContext);

  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    if (name.length === 0) {
      alert('name is not allowed to be empty.');
      return;
    }

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

    const { error } = await register({ name, email, password });
    if (!error) {
      navigate('/');
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
              text={registerPage[locale].name}
              name="name" 
              type="text" 
              value={name} 
              onValueChange={onNameChange} 
            />
          </div>
          <div className="mb-4">
            <TextField 
              text={registerPage[locale].email}
              name="email" 
              type="email" 
              value={email} 
              onValueChange={onEmailChange}
            />
          </div>
          <div className="mb-6">
            <TextField 
              text={registerPage[locale].password} 
              name="password" 
              type="password" 
              value={password} 
              onValueChange={onPasswordChange} 
            />
          </div>
          <div className="flex justify-between items-center mb-0">
            <Link className="font-Roboto font-medium text-ellipsis text-sm text-sky-500 outline-none hover:text-sky-600 focus:text-sky-600" to="/">{registerPage[locale].link}</Link>
            <Button text={registerPage[locale].submit} type="submit" onButtonClick={() => {}} />
          </div>
        </form>

      </div>
    </div>
  );
}

export default Register;