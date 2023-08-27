import { useEffect, useState } from 'react';
import './App.css';
import StockList from './components/StockList';
import SingleStock from './components/SingleStock';
import axios from 'axios';
import { LIST_STOCKS } from './endpoint';
import { StockContext } from './Context';
import LoadingComp from './components/LoadingComp';

function App() {

  const [selectedStock, setSelectedStock] = useState(null)
  const [stockList, setStockList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const axiosInstance = axios.create({
      timeout: 50000, // 50 seconds timeout
    });
        
      if(stockList&&stockList.length===0){
        setLoading(true)
        axiosInstance.get(LIST_STOCKS)?.then(res => {
          // console.log('STOCKLISTCALLED',res)
          setStockList(res.data)
          setLoading(false)
      })
      }else{
        const interval = setInterval(() => {
          setLoading(true)

          axiosInstance.get(LIST_STOCKS)?.then(res => {
              // console.log('STOCKLISTCALLED',res)
              setStockList(res.data)
              setLoading(false)
          })    
      }, stockList&&stockList.length===0 ? 0 : 60000);
      return()=>{
          clearInterval(interval)
      }
      }
    
        
},[loading, setLoading, stockList])

  return (
    <div className="App">
      <StockContext.Provider value={stockList}>
      {
        loading && stockList && stockList.length===0 ?
        <LoadingComp/>
        :
        selectedStock ?
        <SingleStock setSelectedStock={setSelectedStock} selectedStock={selectedStock}/>
        :
        <StockList selectedStock={selectedStock} setSelectedStock={setSelectedStock} />
      }
      </StockContext.Provider>
    </div>
  );
}

export default App;
