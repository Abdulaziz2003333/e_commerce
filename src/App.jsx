import {useContext} from "react";
import {MyContext} from "./context/Context.jsx";
import {useTranslation} from "react-i18next";


function App() {
  const {changeLanguageFunc} = useContext(MyContext)

  const {t} = useTranslation()
  return (
      <div>
        <div>{t('hello')}</div>
          <button onClick={() => changeLanguageFunc('en')}>eng</button>
          <button onClick={() => changeLanguageFunc('uz')}>uz</button>
          <button onClick={() => changeLanguageFunc('ru')}>ru</button>
      </div>
  )
}

export default App
