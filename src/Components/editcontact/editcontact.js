import React from 'react';
import './editcontact.css';
import {Redirect} from 'react-router-dom';




class EditContact extends React.Component {
    state = {
        id: this.props.currenContact.id,
        name: this.props.currenContact.name,
        address: this.props.currenContact.address,
        gender: this.props.currenContact.gender,
        email: this.props.currenContact.email,
        phone: this.props.currenContact.phone,
        avatar: this.props.currenContact.avatar,
        isRedirect:false
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
            phone: event.target.value
        })
    }
    getEmail = event => {
        this.setState({
            email: event.target.value
        })
    }
    onSubmit = event => {
        event.preventDefault()
        const { id, name, adress, phone, email, avatar} = this.state
        this.props.onEditCurrentContact(
            id, name,adress,phone, email, avatar
        )
        this.setState({
            isRedirect:true
        })
    }


    render()
    {
        const{name, address, phone, email, avatar}=this.state
        if (this.state.isRedirect){
            return <Redirect to='/' />
        }
        return (
            <div className='inputDiv'>
                <form onSubmit={this.onSubmit}>

                    <input
                    style={{width: 1080+'px'}}
                    type='text'
                    placeholder={name} className='form-control' 
                    onChange={this.getName} 
                    required
                    />
                    <input
                    style={{width: 1080+'px'}}
                    type='text'
                    placeholder={address} 
                    className='form-control'
                    onChange={this.getAdress} 
                    required
                    />
                    <input 
                    style={{width: 1080+'px'}}
                    type='text' 
                    placeholder={phone} 
                    className='form-control'
                    onChange={this.gettelnum}
                    required
                     />
                    <input type='email' 
                    style={{width: 1080+'px'}}
                    placeholder={email} className='form-control'
                    onChange={this.getEmail}
                    required
                     />

                    <input type='number'
                    style={{width: 1080+'px'}}
                    min='1' max='99' 
                    placeholder={avatar} className='form-control' 
                    onChange={this.getAvatar}
                    required
                     />

                    


                     {/*
                     <input type='radio' 
                     name='gender' className='form-check-input' 
                     value='men' id='gender_man' />


                    <label htmlFor='gender_man' className='form-check-label'>Men</label>
                     */}

                    
                    <button className='btn btn-success' type='submit'>Save changes</button>
                </form>
            </div>
        );
    }
}


export default EditContact;