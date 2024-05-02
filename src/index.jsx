// React elements
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

// Router
import router from './router';

// Style
import './assets/styles/Fonts.scss';
import './assets/styles/Global.scss';

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
