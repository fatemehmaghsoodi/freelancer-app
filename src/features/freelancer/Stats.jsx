import React from 'react'
import {HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from 'react-icons/hi';
import Stat from '../../ui/Stat';
import {toPersianNumbersWithComma } from '../../utils/toPersianNumber';

function Stats({proposals}) {
    const numOfProposals = proposals.length
    const acceptProject= proposals.filter((proposal)=>proposal.status === 2)
    const balance= acceptProject.reduce((acc, curr)=>curr.price + acc, 0)
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8'>
        <Stat 
            icon={<HiOutlineViewGrid className='w-20 h-20' />}
            title="درخواست ها"
            value= {numOfProposals}
            color="blue"
        />
        <Stat 
            icon={<HiCollection className='w-20 h-20' />}
            title="درخواست های تایید شده"
            value= {acceptProject.length}
            color="yellow"
        />
        <Stat 
            icon={<HiCurrencyDollar className='w-20 h-20' />}
            title="کیف پول"
            value= {toPersianNumbersWithComma(balance)}
            color="green"
        />
    </div>
  )
}

export default Stats