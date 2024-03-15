import React from 'react';
import logo from '@assets/img/logo.svg';
import '@pages/sidepanel/SidePanel.css';
// import useStorage from '@src/shared/hooks/useStorage';
// import exampleThemeStorage from '@src/shared/storages/exampleThemeStorage';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';

const SidePanel = () => {
  // const theme = useStorage(exampleThemeStorage);

  return (
    <div
      className="App"
      style={
        {
          // backgroundColor: theme === 'light' ? '#fff' : '#000',
        }
      }>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/sidepanel/SidePanel.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          // style={{ color: theme === 'light' && '#0281dc', marginBottom: '10px' }}
        >
          Learn React!
        </a>
        <button
          style={
            {
              // backgroundColor: theme === 'light' ? '#fff' : '#000',
              // color: theme === 'light' ? '#000' : '#fff',
            }
          }
          // onClick={exampleThemeStorage.toggle}
        >
          Toggle theme
        </button>
      </header>
    </div>
  );
};

export default withErrorBoundary(withSuspense(SidePanel, <div> Loading ... </div>), <div> Error Occur </div>);