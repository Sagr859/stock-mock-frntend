import React, { useEffect } from 'react';
import SelectBar from './SelectBar';
import StockCard from './StockCard';
import { useContext } from 'react';
import { StockContext } from '../Context';

function StockList(props) {

    const stockList = useContext(StockContext)

    useEffect(() => {
        props?.setSelectedStock(null)
        console.log('UpdatedStockListUseEffect')
    }, [props]);

    return (
        <div className='flex flex-col p-4 w-10/12 items-center overflow-hidden'>
            <div className='p-2 text-4xl font-bold'>
                Today's Stock    
            </div>
            <SelectBar selectedStock={props.selectedStock} setSelectedStock={props.setSelectedStock} stockList={stockList}/>
            <div className='flex flex-col p-1 items-center justify-start w-full overflow-auto overflow-x-hidden' style={{ height:'80vh' }}>
                {
                    stockList && stockList.length>0 ?
                        stockList.map(el => {
                            return <StockCard stock={el} setSelectedStock={props.setSelectedStock} />
                        })
                    :
                        null
                }
            </div>            
        </div>
    );
}

export default StockList;