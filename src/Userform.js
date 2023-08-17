import React, { useState } from 'react'

function Userform({ setAllData, allData, clearAllData }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [gender, setGender] = useState("");
    const [skills, setSkills] = useState([])
    const [selectedImage, setSelectedImage] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            website,
            imagelink: selectedImage,
            gender,
            skills
        }
        setAllData([...allData, formData]);

    }

    const clearFormData = () => {
        setName("");
        setEmail("");
        setWebsite("");
        setSelectedImage("");
        setGender("");
        setSkills([]);
        clearAllData();
    };


    return (


        <div className="userform">
            <div className="userform layout">
                <div className="userform-main">
                    <form className='userform-c' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="userform-label">Name:</label>
                            <input type="text" className='userform-ipt' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
                        </div>
                        <div>
                            <label htmlFor="email" className="userform-label">Email:</label>
                            <input type="email" className='userform-ipt' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
                        </div>
                        <div>
                            <label htmlFor="website" className="userform-label">WebSite:</label>
                            <input type="website" className='userform-ipt' value={website} onChange={(e) => setWebsite(e.target.value)} placeholder='Enter your website' />
                        </div>
                        <div>
                            <label htmlFor="image-upload" className="userform-label">Image-Link:</label>
                            <input type="image-upload" className='userform-ipt'
                                value={selectedImage || ""}
                                onChange={(e) => setSelectedImage(e.target.value)}
                                placeholder='Image URL'
                            />
                        </div>

                        <div className='gender-container' >
                            <label htmlFor="student-gender" className="userform-label" >Gender:</label>
                            <div class="gender-options">
                                <label for="male">
                                    <input type="radio" id="male" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} />
                                    Male</label>
                                <label for="female">
                                    <input type="radio" id="female" name="gender" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} />
                                    Female</label>
                                <label for="other">
                                    <input type="radio" id="other" name="gender" value="Other" checked={gender === "Other"} onChange={(e) => setGender(e.target.value)} />
                                    Other</label>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="student-skill" className="userform-label">Skills:</label>
                            <input type="checkbox" value=" HTML"
                                checked={skills.includes('HTML')} onChange={(e) => {
                                    if (e.target.checked) {
                                        setSkills([...skills, 'HTML']);
                                    } else {
                                        setSkills(skills.filter(skill => skill !== 'HTML'));
                                    }
                                }}
                            /> HTML
                            <input type="checkbox" value=" CSS"
                                checked={skills.includes('CSS')} onChange={(e) => {
                                    if (e.target.checked) {
                                        setSkills([...skills, 'CSS']);
                                    } else {
                                        setSkills(skills.filter(skill => skill !== 'CSS'));
                                    }
                                }}
                            /> CSS
                            <input type="checkbox" value=" JAVASCRIPT" checked={skills.includes(' JavaScript')} onChange={(e) => {
                                if (e.target.checked) {
                                    setSkills([...skills, ' JavaScript']);
                                } else {
                                    setSkills(skills.filter(skill => skill !== ' JavaScript'));
                                }
                            }} /> JavaScript
                        </div>

                        <div className="footer-btn">
                            <button className='btn-submit' onClick={handleSubmit}>Submit</button>
                            <button className='btn-clear' onClick={clearFormData}>Clear</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>


    )
}

export default Userform;
