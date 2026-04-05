import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Company from '../CompanyProfile/Company';
import SimilerCompanies from '../CompanyProfile/SimilerCompanies';

const CompanyPage = () => {

    const navigate = useNavigate();
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-3">
            <Divider size="xs"  />
                <Button className="ml-20" leftSection={<IconArrowLeft size={20} />} my="md" onClick={() =>navigate(-1)} color='bright-sun.5' variant='light'>Back</Button>
             <div className='flex gap-5 justify-center '>
                 <Company />
                 <SimilerCompanies />
             </div>
        </div>
  )
}

export default CompanyPage
