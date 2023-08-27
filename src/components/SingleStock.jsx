import React, { useContext, useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { StockContext } from '../Context';

export default function SingleStock(props) {

  const [currStock, setCurrStock] = useState(null)
  const stockList = useContext(StockContext)
  const [dataArr, setDataArr] = useState(props.selectedStock.priceRec)

  useEffect(()=>{
    if(!currStock){
      setCurrStock(stockList.find(el => el.id===props.selectedStock.id))
    }
    else{
    setInterval(() => {
      setCurrStock(stockList.find(el => el.id===props.selectedStock.id))
      setDataArr(stockList.find(el => el.id===props.selectedStock.id).priceRec)
    }, 50000);
    return()=>{
      clearInterval()
    }
    }
},[setCurrStock, currStock, props.selectedStock, stockList])

  return (
    <div className='flex flex-col items-center justify-start p-4 w-10/12 overflow-auto' style={{ height:'80vh' }}>
        <div className='flex flex-row items-center justify-between text-white w-full'>
            <div onClick={()=>{ props.setSelectedStock(null) }} className='cursor-pointer' >Back</div>
            <div className='font-extrabold text-3xl'>{props.selectedStock.stockName}</div>
            <div className='font-extrabold text-2xl'>$ {currStock ? currStock.currPrice : props.selectedStock.currPrice}</div>
        </div>
        <div className='rounded-sm border border-slate-500 p-4 w-full h-4/5 mt-10 text-white'>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={dataArr}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="dateText" tick={{ stroke : 'white' }} padding={{ left:20 }} interval={dataArr<=10 ? 0 : dataArr/10} />
                  <YAxis tick={{ stroke : 'white' }} padding={{ bottom:20 }} />
                  <Tooltip />
                  <Legend />
                  <ReferenceLine y={0} stroke="white" />
                  <Line type="monotone" dataKey="priceDiff" stroke="#8884d8" strokeWidth={5} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}
