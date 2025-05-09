import React from 'react'
import FormC from '../components/form/FormC'
import { Container } from 'react-bootstrap'

const Registerpage = () => {
  return (
    <>
    <Container className='d-flex justify-content-center my-5'>
      <FormC idpage="register"/>
    </Container>
    </>
  )
}

export default Registerpage