import { useTranslation } from 'react-i18next';
import Navbar from './components/navbar';

function App() {

  const { t, i18n } = useTranslation("translation");

  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
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
