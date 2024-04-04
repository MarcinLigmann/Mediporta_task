import React, { useState } from 'react';
import './App.css';
import 'react-loading-skeleton/dist/skeleton.css'
import PageSize from './components/pageSize';
import SelectBar from './components/selectBar';
import TagsBoard from './components/tagsBoard';
import Header from './components/header';
import Footer from './components/footer';



function App() {
  const [quantity, setQuantity] = useState<number>(0);

  return (
    <div className='p-5'>
      <Header />
      <div className='flex justify-between p-5 content-end'>
        <SelectBar />
      
        <PageSize quantity={quantity}/>
      </div>
      
      <TagsBoard setQuantity={setQuantity}/>
      <Footer />
    </div>
  );
}

export default App;
