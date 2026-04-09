import { ActionIcon, Button, Divider } from '@mantine/core'
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil } from '@tabler/icons-react'
import React, { useState } from 'react'
import ExpCard from './ExpCard'
import CertiCard from './CertiCard'
import SelectInput from './SelectInput'
import fields from '../Data/Profile'

const Profile = () => {

    const select = fields

    const [edit, setEdit] = useState([false, false, false, false, false])

    const handleEdit= (index:any) => {
        const newEdit=[...edit];
        newEdit[index]=!newEdit[index];
        setEdit(newEdit);
    }

    return (
        <div className='w-4/5 mx-auto'>
            <div className='relative'>
                <img className='rounded-t-2xl' src='/Profile/banner.jpg' alt='' />
                <img className=' w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8' src='/avatar.png' alt='' />

            </div>
            <div className='px-3 mt-20'>
                <div className='text-3xl font-semibold flex justify-between'>
                    Thinuka Vinjaya <ActionIcon onClick={() =>handleEdit(0)} size="lg" color='bright-sun.4' variant='subtle'>
                        {edit[0]?<IconDeviceFloppy className='h-4/5 w-4/5'/>:<IconPencil className='h-4/5 w-4/5' />}</ActionIcon>
                </div>

                {
                    edit[0]?<><div className='flex gap-10 [&>*]:w-1/2'>
                    <SelectInput {...select[0]} />
                    <SelectInput {...select[1]} />
                </div>
                <SelectInput {...select[2]} /></>:<><div className='text-xl flex gap-1 items-center'>
                    <IconBriefcase className='h-5 w-5' stroke={1.5} />Software Enginner &bull;  Google
                </div>
                <div className='text-lg flex gap-1 items-center text-mine-shaft-300'>
                    <IconMapPin className='h-5 w-5' stroke={1.5} />New York, Unitad Stats
                </div> </>
                }
                
            </div>
            <Divider mx="xs" my="xl" />
            <div className='px-3' >
                <div className='text-2xl font-semibold mb-3 flex justify-between'>About <ActionIcon onClick={() =>handleEdit(1)} size="lg" color='bright-sun.4' variant='subtle'>
                        {edit[1]?<IconDeviceFloppy className='h-4/5 w-4/5'/>:<IconPencil className='h-4/5 w-4/5' />}</ActionIcon></div>
                <div className='text-sm text-mine-shaft-300 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quod at officia eligendi ipsum non perspiciatis quidem illum doloribus fugiat?</div>
            </div>
            <Divider mx="xs" my="xl" />
            <div className='px-3' >
                <div className='text-2xl font-semibold mb-3 flex justify-between'>Skills<ActionIcon onClick={() =>handleEdit(2)} size="lg" color='bright-sun.4' variant='subtle'>
                        {edit[2]?<IconDeviceFloppy className='h-4/5 w-4/5'/>:<IconPencil className='h-4/5 w-4/5' />}</ActionIcon></div>
                <div className='flex flex-wrap gap-2'>
                    
                        
                            <div className='bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1'>Java</div>

                        
                    
                </div>
            </div>
            <Divider mx="xs" my="xl" />
            <div className='px-3'>
                <div className='text-2xl font-semibold mb-5 flex justify-between'>Experience <ActionIcon onClick={() =>handleEdit(3)} size="lg" color='bright-sun.4' variant='subtle'>
                        {edit[3]?<IconDeviceFloppy className='h-4/5 w-4/5'/>:<IconPencil className='h-4/5 w-4/5' />}</ActionIcon></div>
                <div className='flex flex-col gap-8'>
                
                    <ExpCard /> 
                
                </div>
            </div>
            <Divider mx="xs" my="xl" />
            <div className='px-3'>
                <div className='text-2xl font-semibold mb-5 flex justify-between'>Certifications <ActionIcon onClick={() =>handleEdit(4)} size="lg" color='bright-sun.4' variant='subtle'>
                        {edit[4]?<IconDeviceFloppy className='h-4/5 w-4/5'/>:<IconPencil className='h-4/5 w-4/5' />}</ActionIcon></div>
                <div className='flex flex-col gap-8'>
                
                    
                        <CertiCard  />
                    
                
                </div>
            </div>
        </div>
    )
}

export default Profile
