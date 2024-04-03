import React from 'react';
import './App.css';
import 'react-loading-skeleton/dist/skeleton.css'
import PageSize from './components/pageSize';
import SelectBar from './components/selectBar';
import TagsBoard from './components/tagsBoard';
import { Header } from './components/header';
import { Footer } from './components/footex';



function App() {


  return (
    <div className='p-5'>
      <Header />
      <div className='flex justify-between p-5 content-end'>
        <SelectBar />
      
        <PageSize />
      </div>
      
      <TagsBoard />
      <Footer />
    </div>
  );
}

export default App;
