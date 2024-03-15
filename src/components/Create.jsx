import React, {useState} from 'react'
import {Form, Button, Checkbox} from 'semantic-ui-react'
import {API_URL} from '../Constatnts/URL'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Create = () => {
    const[firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const[checked, setChecked] = useState(false);
    const navigate = useNavigate();

    const postData = async() =>{
        await axios.post(API_URL, {
            firstName,
            lastName,
            checked
        })
        navigate('/read'); //go to next page directly if click save button
    }

  return (
   <Form className='form'>
    <Form.Field>
        <label>First Name</label>
        <input placeholder='Enter Your First Name' value={firstName}
        onChange={event => setFirstName(event.target.value)}></input>
    </Form.Field><br/>
    <Form.Field>
    <label>Last Name</label>
        <input placeholder='Enter Your Last Name' value={lastName}
        onChange={event => setLastName(event.target.value)}></input>
    </Form.Field>
    <br/>
    <Form.Field>
        <Checkbox label='A' checked={checked} 
        onChange={() => setChecked(!checked)}/>
    </Form.Field>
    <Button onClick={postData}>Submit</Button>
   </Form>
  )
}

export default Create
