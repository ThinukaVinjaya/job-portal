import { Anchor, Button, Checkbox, PasswordInput, rem, TextInput} from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleSignUp = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      alert('Please fill all fields')
      return
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    if (!termsAccepted) {
      alert('Please accept terms & conditions')
      return
    }
    console.log('Sign Up:', { fullName, email, password })
  }

  return (
    <div className='w-1/2 px-20 flex flex-col justify-center gap-3'>
      <div className='text-2xl font-semibold'>Create Account</div>
      <TextInput withAsterisk label="Full Name" placeholder='Your name' value={fullName} onChange={(e) => setFullName(e.currentTarget.value)} />
      <TextInput withAsterisk leftSection={<IconAt style={{ width: rem(16), height: rem(16)}} />} label="Email" placeholder='Your email' value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
      <PasswordInput withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Password" placeholder='Password' value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
      <PasswordInput withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Confirm Password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.currentTarget.value)} />
      <Checkbox autoContrast label={<>I accept{' '}<Anchor href='#'>terms & conditions</Anchor></>} checked={termsAccepted} onChange={(e) => setTermsAccepted(e.currentTarget.checked)} />
      <Button autoContrast variant='filled' onClick={handleSignUp}>Sign up</Button>
      <div className='mx-auto'>Have an account? <Link to="/login" className='text-bright-sun-400 hover:underline'>Login</Link></div>
    </div>
  )
}

export default SignUp
