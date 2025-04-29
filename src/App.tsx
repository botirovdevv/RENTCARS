import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import Navbar from "./components/Navbar"

import './i18n/i18n'
import TestWarning from "./mui/testWarning"

const App = () => {
  return (
    <BrowserRouter>
      <TestWarning />
        <Navbar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App