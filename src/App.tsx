import './App.css'

import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation("translation");

  return (
    <>
      <p>{t('test.entry')}</p>
      <button onClick={() => i18n.changeLanguage("en")}>
        change to english
      </button>
      <button onClick={() => i18n.changeLanguage("pl")}>
        change to polish
      </button>
    </>
  )
}

export default App
