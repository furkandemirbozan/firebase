import React, { useState } from 'react'
import '../styles/pages/Auth.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { toast } from 'react-toastify'
import { GoogleAuthProvider } from 'firebase/auth/web-extension'

const provider = new GoogleAuthProvider();






const Auth = () => {
    const [signUp, setsignUp] = useState(true)
    const [authData, setAuthData] = useState({ email: '', password: '' })

    const onChangeFunc = (e) => {
        setAuthData({ ...authData, [e.target.name]: e.target.value })
    }
    const authFunc = async () => {
        if (signUp) {
            try {
                const data = await createUserWithEmailAndPassword(auth, authData.email, authData.password)
                const user = data.user
                if (user) {
                    window.location = '/dashboard'
                }
            } catch (error) {
                toast.error("signUp da Hata var", error.message)
            }
        } else {
            try {
                const data = await signInWithEmailAndPassword(auth, authData.email, authData.password)
                const user = data.user
                if (user) {
                    window.location = '/dashboard'
                }
            } catch (error) {
                toast.error("Login de Hata var", error.message)
            }
        }
    }
    const googleLogin = async () => {
        try {
            const data = await auth.signInWithPopup(provider)
            const user = data.user
            if (user) {
                window.location = '/dashboard'
            }
        } catch (error) {
            toast.error("Google Login de Hata var", error.message)
        }
    }
    return (
        <div className='auth'>
            <div className='auth-container'>
                <h2>{signUp ? "REGISTER" : "LOGIN"}</h2>
                <input name='email' value={authData.email} onChange={onChangeFunc} type="email" placeholder='Email' />
                <input name='password' value={authData.password} onChange={onChangeFunc} type="password" placeholder='Password' />
                <div onClick={googleLogin} className='auth-container-google'>Google ile giriş yap</div>
                <p onClick={() => setsignUp(!signUp)}>{signUp ? "Daha önceden Kayıt oldunuz mu?" : "Kayıtmı olmak istiyosun hemşerim?"}</p>
                <div onClick={authFunc} className='auth-container-button'>{signUp ? "REGISTER" : "LOGIN"}</div>
            </div>
        </div>
    )
}

export default Auth