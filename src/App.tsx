import React, { useEffect, useState } from 'react';
import './App.css';
import Switch from '@mui/material/Switch';
import { useTranslation } from 'react-i18next';
import i18n from './assets/i18n';

function App() {
  const [switchStatus, setSwitchStatus] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    switchStatus ? i18n.changeLanguage('tr') : i18n.changeLanguage('en');
  }, [switchStatus]);

  return (
    <div className='App'>
      <div>
        English
        <Switch
          checked={switchStatus}
          onChange={() => {
            setSwitchStatus(!switchStatus);
          }}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        Türkçe
      </div>
      {t('HomePage.Title')}
    </div>
  );
}

export default App;
