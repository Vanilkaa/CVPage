import { useState } from "react";
import './App.css';

function App() {
    const [formState, setFormState] = useState('edit');

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [profession, setProfession] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [positionTitle, setPositionTitle] = useState('');   
    const [companyName, setCompanyName] = useState('');
    const [jobInfo, setJobInfo] = useState('');

    const [degree, setDegree] = useState(''); 
    const [uniName, setUniName] = useState('');
    const [uniInfo, setUniInfo] = useState('');

    const formSubmit = (event) => {
        event.preventDefault();
    }

    const handleSubmit = (event) => {
        setFormState('submit');
    }

    function handleEdit() {
        setFormState('edit');
    }

    return (
        <form className="form" onSubmit={formSubmit}>
            <fieldset className="section general">
                <legend className="general">
                    <img src="../public/square.svg" alt="marker" />
                    General</legend>
                {formState === 'edit' ? (<>
                
                <input type="text" placeholder="Name" className="name" onChange={(e) => setName(e.target.value)} value={name}/>
                <input type="text" placeholder="Surname" className="surname" onChange={(e) => setSurname(e.target.value)} value={surname}/>
                <input type="text" placeholder="Profession" className="profession" onChange={(e) => setProfession(e.target.value)} value={profession}/>
                <ul className="contacts">
                    <li className="email"><input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/></li>
                    <li className="phone"><input type="tel" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} value={phone}/></li>
                </ul>
                </>) : (<>
                <div className="name">{name}</div>
                <div className="surname">{surname}</div>
                <div className="profession">{profession}</div>
                <ul className="contacts">
                    <li className="email">{email}</li>
                    <li className="phone">{phone}</li>
                </ul>
                </>)}
            </fieldset>
            <fieldset className="section experience">
                <legend className="experience">
                    <img src="../public/square.svg" alt="marker" />
                    Experience</legend>
                    {formState === 'edit' ? (<>
                    <input type="text" placeholder="Position Title" onChange={(e) => setPositionTitle(e.target.value)} value={positionTitle}/>
                    <input type="text" placeholder="Company Name" onChange={(e) => setCompanyName(e.target.value)} value={companyName}/>
                    <textarea name="jonInfo" id="jobInfo" placeholder="Job Info" onChange={(e) => setJobInfo(e.target.value)} value={jobInfo}></textarea>
                    </>) : (<>
                    <h3 className="positionTitle">{positionTitle}</h3>
                    <div className="companyName">{companyName}</div>
                    <div className="jobInfo">{jobInfo}</div>
                    </>)}
            </fieldset>
            <fieldset className="section education">
                <legend className="education">
                    <img src="../public/square.svg" alt="marker" />
                    Education</legend>
                    {formState === 'edit' ? (<>
                    <input type="text" placeholder="Academic degree" onChange={(e) => setDegree(e.target.value)} value={degree}/>
                    <input type="text"  placeholder="University Name" onChange={(e) => setUniName(e.target.value)} value={uniName}/>
                    <textarea name="uniInfo" id="uniInfo" placeholder="Uni Info" onChange={(e) => setUniInfo(e.target.value)} value={uniInfo}></textarea>
                    </>) : (<>
                    <h3 className="degree">{degree}</h3>
                    <div className="uniName">{uniName}</div>
                    <div className="uniInfo">{uniInfo}</div>
                    </>)}
            </fieldset>
            <fieldset className="buttons">
                <button onClick={handleEdit} disabled={formState === 'edit'}>Edit</button>
                <button onClick={handleSubmit} disabled={formState === 'submit'}>Submit</button>
            </fieldset>
        </form>
        
    )
}

export default App;
