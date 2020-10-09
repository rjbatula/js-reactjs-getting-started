import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const PostCreate = (props) => {
  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
        <TextInput label='Title' source='title' />
        <TextInput label='Description' source='body' multiline />
        <DateInput label='Published' source='publishedDate' />
      </SimpleForm>
    </Create>
  )
}

export default PostCreate
