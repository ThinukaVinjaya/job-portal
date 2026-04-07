import { Anchor, Button, PasswordInput, rem, TextInput } from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please fill all fields')
      return
    }
    console.log('Login:', { email, password })
  }

  return (
    <div className='w-1/2 px-20 flex flex-col justify-center gap-3'>
      <div className='text-2xl font-semibold'>Login Account</div>
      <TextInput withAsterisk leftSection={<IconAt style={{ width: rem(16), height: rem(16)}} />} label="Email" placeholder='Your email' value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
      <PasswordInput withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Password" placeholder='Password' value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
      <Button autoContrast variant='filled' onClick={handleLogin}>Login</Button>
      <div className='mx-auto'>Don't have an account?<Link to="/signup" className='text-bright-sun-400 hover:underline'>SignUp</Link> </div>
    </div>
  )
}

export default Login
