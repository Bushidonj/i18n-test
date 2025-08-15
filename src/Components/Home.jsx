import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import i18next, { t } from 'i18next';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const language = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'es', name: 'Spanish', dir: 'ltr' },
  { code: 'fr', name: 'French', dir: 'ltr' },
  { code: 'fa', name: 'فارسی', dir: 'rtl' },
];

const Home = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(language[0].name);

  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const handleChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <div>
      <div>
        <FormControl sx={{ maxWidth: '80%', margin: '5% 10%' }} fullWidth>
          <InputLabel id="demo-simple-select-autowidth-label">{lang}</InputLabel>
          <Select
            fullWidth
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={lang}
            onChange={handleChange}
            defaultValue={language[0].name}
            onClick={() => setOpen(!open)}
            open={open}
            label={lang}
          >
            {language.map(({ code, name }) => (
              <MenuItem key={code} value={name} onClick={() => i18next.changeLanguage(code)}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div style={{ display: 'block', width: '90%', marginLeft: '5%', marginRight: '5%', marginTop: '2.5%' }}>
        <h1>{t('welcome')}</h1>
        <h2>{t('hello')}</h2>
        <h3>{t('this is an english app')}</h3>
        <h4>{t('this is a multi language app')}</h4>
        <h5>{t('you can change the language of app manually')}</h5>
      </div>
    </div>
  );
};

export default Home;
