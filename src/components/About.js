import React, {useState, useEffect} from 'react';

const About = () => {
  const [name, setname] = useState('')
  const [getting, setgetting] = useState('')
  const saveName = (name) => {
    if (name !== '')
      localStorage.setItem('name', name);
    console.log(name);
  };
  useEffect(() => {
    console.log('girdi')
    const item = localStorage.getItem('name');
    setgetting(item);
    console.log(item)
  }, [name])
  return (
    <div className='container'>
      <h5>About Us</h5>
      <p>
        merhaba benim adım name
      </p>
      <input value={name} onChange={e => setname(e.target.value)}></input>
      <button onClick={saveName(name)}>Isim yaz</button>
      <p>{getting}</p>
    </div>
  );
};

export default About;
