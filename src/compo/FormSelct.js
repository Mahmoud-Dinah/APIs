import React from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

class FormSelct extends React.Component {
    render() {
        return (
            <div>
                <Card bg='dark' text='warning' border="danger" style={{ width: '100%', color: 'darkblue', fontSize: 'bolder' }} >

<form onSubmit={this.props.getCityName} >
  <Form.Group className="mb-1" controlId="formBasicEmail">
    <label>Enter City name </label>
    <input type='txet' placeholder='enter city name' onChange={this.props.setCityName}></input>

    <br></br>
    <input type='submit' value='explore city' />

  </Form.Group>

</form>
</Card> 
            </div>
        )
    }
}

export default FormSelct
