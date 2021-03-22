import {useState} from 'react';
const Profile = (props) => {

    const [name, setName] = useState('');

    
    const handleSubmit = (e) => {
        localStorage.setItem('newName', name);
        setName('')
        // props.onChangeName(name)
        e.preventDefault()
    }
    

    
    return(
    <div className='wrapper'>
        <h1>Profile</h1>
        <h3>User name</h3>
        
    <form
    className='formProf'
    onSubmit={handleSubmit}>

    <input type='text'
    placeholder='Change your profile name'
    value={name}
    className='inp'
    onChange={(event) => {setName(event.target.value)}}>
    </input>

    <button
        className='saveBtn'>Save
    </button>
        </form>

       
        </div>)
}

export default Profile;