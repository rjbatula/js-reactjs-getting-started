import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const PostEdit = (props) => {
  return (
    <Edit title='Edit a Post' {...props}>
      <SimpleForm>
      <TextInput label='Id' source='id' disabled />
        <TextInput label='Title' source='title' />
        <TextInput label='Description' source='body' multiline />
        <DateInput label='Published' source='publishedDate' />
      </SimpleForm>
    </Edit>
  )
}

export default PostEdit
