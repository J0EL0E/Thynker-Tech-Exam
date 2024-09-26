import React from 'react'
import SearchForm from './components/SearchForm';
import Webviewer from './components/Webviewer';
import HeadersUI from './components/HeadersUI';
import HorizontalLine from './components/HorizontalLine';
import BottomNavbar from './components/BottomNavbar';
import ImageRendered from './components/ImageRendered';
import InfoButton from './components/InfoButton';
import SearchLogo from './assets/Web search-pana.png';
import { useState } from 'react'
import '../src/styles/input.css'


function App() {
  
  const [keyword, setKeyword] = useState('')

  const URL = `https://${keyword}.com`;
  return (
    <div className='container'>
      <HeadersUI />
      <HorizontalLine />
      <InfoButton />
      <SearchForm value={keyword} func={(event) => {
        setKeyword(event.target.value)
      }} />
       {keyword !== '' &&  <Webviewer url={URL}/> }
       {keyword == '' && <ImageRendered source={SearchLogo} alt="search-logo" /> }
      <BottomNavbar />
    </div>
  )
}

export default App;
