import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const UserEdit = (props) => {
  return (
    <Edit title='Edit a User' {...props}>
      <SimpleForm>
      <TextInput label='Id' source='id' disabled />
        <TextInput label='Name' source='name' />
        <TextInput label='Email' source='email' />
      </SimpleForm>
    </Edit>
  )
}

export default UserEdit
