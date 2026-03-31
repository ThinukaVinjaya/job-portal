import React, { useState } from 'react'
import MultiInput from './Multinput'
import { dropdownData } from '../Data/JobsData'
import { Divider, RangeSlider } from '@mantine/core'

const SearchBar = () => {

    const [value, setValue] = useState<[number, number]>([1, 100]);
    return (
        <div className='flex px-5 py-8 items-center !text-mine-shaft-100'>
            {
                dropdownData.map((item, index) => {
                
                return <><div key={index} className='w-1/5'>
                    <MultiInput title={item.title} icon={item.icon} options={item.options} />
                </div>
                    <Divider mr="xs" size='xs' orientation='vertical' />
                </>})
            }
            <div className="w-1/5 [&_.maintine-Slider-label]:!translate-y-10">
            <div className='flex text-sm justify-between'>
                <div>Salary</div>
                <div>LKR:{value[0]}k - LKR:{value[1]}k</div>
            </div>
                <RangeSlider color='bright-sun.4' size="xs" value={value} 
                 labelTransitionProps={{
                    transition: 'skew-down',
                    duration: 150,
                    timingFunction: 'linear',
                 }}
                onChange={setValue} />
            </div>
        </div>
    )
}

export default SearchBar
