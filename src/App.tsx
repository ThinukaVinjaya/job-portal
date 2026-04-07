
import './App.css';
import { MantineProvider, Slider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css'
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FingJobs from './Pages/FindJobs';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindTalentPage from './Pages/FindTalentPage';
import PostJobPage from './Pages/PostJobPage';
import JobDescPage from './Pages/JobDescPage';
import FindJobs from './Pages/FindJobs';
import TalentProfilePage from './Pages/TalentProfilePage';
import ApplyJobPage from './Pages/ApplyJobPage';
import CompanyPage from './Pages/CompanyPage';
import PostedJobPage from './Pages/PostedJobPage';
import JobHistoryPage from './Pages/JobHistoryPage';
import SignUp from './SignUpLogin/SignUp';
import SignUpPage from './Pages/SignUpPage';

function App() {

  const theme = createTheme({
    focusRing: 'never',
    fontFamily: 'Poppins, sans-serif',
    primaryColor: 'bright-sun',
    primaryShade: 4,
    colors: {
      'bright-sun': ['#fffbeb',
        '#fff3c6',
        '#ffe588',
        '#ffd149',
        '#ffbd20',
        '#f99b07',
        '#dd7302',
        '#b75006',
        '#943c0c',
        '#7a330d',
        '#461902',],
      'mine-shaft': [
        '#f6f6f6',
        '#e7e7e7',
        '#d1d1d1',
        '#b0b0b0',
        '#888888',
        '#6d6d6d',
        '#5d5d5d',
        '#4f4f4f',
        '#454545',
        '#3d3d3d',
        '#2d2d2d',
      ]
    },
  })

  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <BrowserRouter>
      <div className='relative'>
        <Header />
        <Routes>
          <Route path='/find-jobs' element={<FindJobs />} />
          <Route path='/find-talent' element={<FindTalentPage />} />
          <Route path='/jobs' element={<JobDescPage />} />
          <Route path='/company' element={<CompanyPage />} />
          <Route path="/apply-job" element={<ApplyJobPage />} />
          <Route path='/post-job' element={<PostJobPage />} />
          <Route path='/job-history' element={<JobHistoryPage />} />
          <Route path='/posted-job' element={<PostedJobPage />} />
          <Route path='/talent-profile' element={<TalentProfilePage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<SignUpPage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
        <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
