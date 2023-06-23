import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import profile_picture from './download.jpeg';
// import reportWebVitals from './reportWebVitals';

const user = {
  firstName: "Lucky",
  lastName: "Goergia",
  dateOfBirth: '1998/02/16',
  adress: 'Mellow saint avenue Orange Groove Jhb',
  country: 'South Africa',
  email: 'luckyGeorgia123@gmail.com',
  telephone: '073-562-7890',
  company: 'SMG motors',
  profile_picture: {profile_picture},
  shopping_cart: [],


}
console.log(user)

const element = (
  <h2>
    Details: {user}
  </h2>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {element}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

