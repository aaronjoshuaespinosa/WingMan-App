import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import './index.css';
import toggleSlice from './features/navSlice'
import { FaqsContextProvider } from './context/FaqsContext';
import { ComplaintsContextProvider } from './context/ComplaintContext'
import { AuthContextProvider } from './context/AuthContext'; 

export const store = configureStore({
  reducer: {
    Toggle: toggleSlice
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: true
    }),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
      <ComplaintsContextProvider>
        <FaqsContextProvider>
          <BrowserRouter>
              <Provider store={store}>
                  <App />
              </Provider>
          </BrowserRouter>
        </FaqsContextProvider>
      </ComplaintsContextProvider>
    </AuthContextProvider>
);