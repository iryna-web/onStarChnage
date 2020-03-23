import React from 'react';
import './add_contact.css';




class AddContact extends React.Component {
    state = {
        name: null,
        adress: null,
        gender: null,
        telnum: null,
        email: null,
        avatar: null,
    }

    getAvatar = event => {
        this.setState({
            avatar: event.target.value
        })
    };

    getName = event => {
        this.setState({
            name: event.target.value
        })
    }
    getAdress = event => {
        this.setState({
            adress: event.target.value
        })
    }
    gettelnum = event => {
        this.setState({
            telnum: event.target.value
        })
    }
    getEmail = event => {
        this.setState({
            email: event.target.value
        })
    }
    onSubmit = event => {
        event.preventDefault()
        const { name, adress, gender, telnum, email, avatar} = this.state
        this.props.onaddcontact(name, adress, gender, telnum, email, avatar)
    }


    render() {
        return (
            <div className='inputDiv'>
                <form onSubmit={this.onSubmit}>

                    <input
                    style={{width: 1080+'px'}}
                    type='text'
                    placeholder='name' className='form-control' 
                    onChange={this.getName} 
                    required
                    />
                    <input
                    style={{width: 1080+'px'}}
                    type='text'
                    placeholder='Adress' 
                    className='form-control'
                    onChange={this.getAdress} 
                    required
                    />
                    <input 
                    style={{width: 1080+'px'}}
                    type='text' 
                    placeholder='telnum' 
                    className='form-control'
                    onChange={this.gettelnum}
                    required
                     />
                    <input type='email' 
                    style={{width: 1080+'px'}}
                    placeholder='email' className='form-control'
                    onChange={this.getEmail}
                    required
                     />

                    <input type='number'
                    style={{width: 1080+'px'}}
                    min='1' max='99' 
                    placeholder='avatar' className='form-control' 
                    onChange={this.getAvatar}
                    required
                     />




                     {/*
                     <input type='radio' 
                     name='gender' className='form-check-input' 
                     value='men' id='gender_man' />


                    <label htmlFor='gender_man' className='form-check-label'>Men</label>
                     */}

                    
                    <button className='btn btn-success' type='submit'>Add new Contact</button>
                </form>
            </div>
        );
    }
}


export default AddContact;