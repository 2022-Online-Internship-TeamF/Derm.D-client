import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { createStore } from "redux";
import axios from 'axios'
import { CookiesProvider } from 'react-cookie';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

const theme = createTheme({
  typography: {
    fontFamily: "'Noto Sans KR', sans-serif",
  },
})

const ListitemData = [{name: '여드름',eng_name: 'Acne'},
{name: '뾰루지', eng_name: 'bbyoruzi',},
{name: '흉터', eng_name: 'hoongtur',},
{name: '상처', eng_name: 'sangchu',},
{name: '화상', eng_name: 'hwasang',},
];

function reducer(state = ListitemData, action){
  return state
}

let store = createStore(reducer)

axios.defaults.baseURL = "";
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <BrowserRouter>
          <Provider store={store}>
            <App/>
          </Provider>
        </BrowserRouter>
      </CookiesProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
