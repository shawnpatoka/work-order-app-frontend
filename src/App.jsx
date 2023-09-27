import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material"
import themeMain from './assets/themeMain'
import { themeDark } from './assets/themeDark'
import Navigation from "./components/Navigation";
import MainSection from "./components/MainSection";
import HomePage from './pages/HomePage'
import WorkOrdersPage from './pages/WorkOrdersPage'
import ClientsJobSitesPage from './pages/ClientsJobSitesPage'
import PeoplePage from './pages/PeoplePage'
import ReportsPage from './pages/ReportsPage'
import { Box } from '@mui/material';

function App() {

  const [useDarkMode, setUseDarkMode] = useState(false)

  return (
    <>
      <ThemeProvider theme={useDarkMode ? themeDark : themeMain}>
        <BrowserRouter >
          <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh' }}>
            <Navigation useDarkMode={useDarkMode} setUseDarkMode={setUseDarkMode} />
            <Box sx={{ flexGrow: 1, overflowY: 'auto', bgcolor: 'primary.light' }}>
              <Routes>
                <Route path="/" index element={<HomePage />} />
                <Route path="/work-orders" index element={<WorkOrdersPage />} />
                <Route path="/clients-job-sites" index element={<ClientsJobSitesPage />} />
                <Route path="/people" index element={<PeoplePage />} />
                <Route path="/reports" index element={<ReportsPage />} />
              </Routes>
            </Box>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
