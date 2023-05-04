import React from 'react'
import { useState, useEffect } from 'react';
import { Logo,FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import {toast} from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
const initialState = {
  name:'',
  email:'',
  password:'',
  isMember:true
}
const Register = () => {
  const [values, setValues] = useState(initialState)
  const {isLoading,user} = useSelector((store) =>store.user )
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setValues({...values,[e.target.name]:e.target.value})
    console.log(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const {name,email,password,isMember} = values
    if (!email || !password || (!isMember && !name)) {
      toast.error('请填写所有字段')
      return
    }
    if (isMember) {
      dispatch(loginUser({email:email,password:password}))
      return
    }
    dispatch(registerUser({name,email,password}))
  }
  const toggleMember = () => {
  setValues({ ...values, isMember: !values.isMember });
  }
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 2000);
    }
  },[user])
  return (
  <Wrapper>
    <form className='form' onSubmit={onSubmit}>
      <Logo />
      <h3>{values.isMember ? '登录' : '注册'}</h3>
      {!values.isMember && (
        <FormRow
          type='text'
          name='name'
          value={values.name}
          handleChange={handleChange}
        />
      )}
      <FormRow
            type='email'
            name='email'
            value={values.email}
            handleChange={handleChange}
          />
          {/* password field */}
          <FormRow
            type='password'
            name='password'
            value={values.password}
            handleChange={handleChange}
          />
          <button type='submit' className='btn btn-block' disabled={isLoading}>
            {isLoading? '加载中...': '提交'}
          </button>
          <button
            type='button'
            className='btn btn-block btn-hipster'
            disabled={isLoading}
            onClick={() => {
              dispatch(loginUser({ email: 'testUser@test.com', password: 'secret' }));
            }}
          >
            {isLoading ? '加载中...' : 'demo'}
          </button>
      <p>
        {values.isMember ? '未注册？' : '已有账号？'}
        <button type='button' onClick={toggleMember} className='member-btn'>
          {values.isMember ? '注册' : '登录'}
        </button>
      </p>
    </form>
  </Wrapper>
  )
    }

export default Register
