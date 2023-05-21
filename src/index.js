import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNotFound from './component/PageNotFound';
import {store} from './store/store';
import { Provider } from 'react-redux';

import Home from './pages/Home';
import FindCar from './pages/FindCar';
import Coba from './pages/coba'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cars" element={<FindCar />} />
            <Route path="ho" element={<Coba />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
);


reportWebVitals();
