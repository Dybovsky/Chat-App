import {useState} from 'react';
const Profile = () => {

    const handleSubmit = (e) => {
        localStorage.setItem('newName', name);
        setName('')
       // props.onChangeName(name)
        e.preventDefault()
    }


    const [name, setName] = useState('');
    
    return(
    <div className='wrapper'>
        <h1>Profile</h1>
        <h3>User name</h3>
    <form
    className='formProf'
    onSubmit={handleSubmit}>

    <input type='text'
    value={name}
    className='inp'
    onChange={(event) => {setName(event.target.value)}}>
    </input>
    <button className='saveBtn'>Save</button>
        </form>
       
        </div>)
}

export default Profile;