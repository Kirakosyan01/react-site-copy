import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './Components/Pages/HomePage/HomePage.jsx';
import { Navigation } from './Components/Navigation/Navigation.jsx';
import { LearnPage } from './Components/Pages/LearnPage/LearnPage.jsx';
import { ReferencePage } from './Components/Pages/ReferencePage/ReferencePage.jsx';
import { CommunityPage } from './Components/Pages/CommunityPage/CommunityPage.jsx';
import { BlogPage } from './Components/Pages/BlogPage/BlogPage.jsx';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/learn' element={<LearnPage />}/>
        <Route path='/reference' element={<ReferencePage />}/>
        <Route path='/community' element={<CommunityPage />}/>
        <Route path='/blog' element={<BlogPage />}/>
      </Routes>
    </div>
  );
}

export default App;
