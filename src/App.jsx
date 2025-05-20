// 📌 Milestone 1: Creare un Form con Campi Controllati
// Crea un form di registrazione con i seguenti campi controllati (gestiti con useState):
// ✅ Nome completo (input di testo)
// ✅ Username (input di testo)
// ✅ Password (input di tipo password)
// ✅ Specializzazione (select con opzioni: "Full Stack", "Frontend", "Backend")
// ✅ Anni di esperienza (input di tipo number)
// ✅ Breve descrizione sullo sviluppatore (textarea)
// Aggiungi una validazione al submit, verificando che:
// Tutti i campi siano compilati
// L'input Anni di esperienza sia un numero positivo
// La Specializzazione sia selezionata
// Al submit, se il form è valido, stampa in console i dati.



import { useState } from 'react'


function App() {

  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [bio, setBio] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!fullName || !userName || !password || !specialization || !experience || !bio) {
      console.log('Please fill out all fields');
    } else if (experience < 1) {
      console.log('You must have at least 1 year of experience');
    } else {
      console.log({
        fullName,
        userName,
        password,
        specialization,
        experience,
        bio
      });

    }

  }

  return (
    <>

      <form onSubmit={handleSubmit}>

        <section>
          <input type="text"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            placeholder='Username'
          />
        </section>

        <section>
          <input type="text"
            value={userName}
            onChange={e => setUserName(e.target.value)}
            placeholder='Username'
          />
        </section>

        <section>
          <input type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Password'
          />
        </section>

        <section>
          <select value={specialization}
            onChange={e => setSpecialization(e.target.value)}
          >
            <option value="">Select a specialization</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </section>

        <section>
          <input type="number"
            value={experience}
            onChange={e => setExperience(e.target.value)}
            placeholder='Years of Experience'
          />
        </section>

        <section>
          <textarea name="bio"
            value={bio}
            onChange={e => setBio(e.target.value)}
            placeholder='Short Biography'
          ></textarea>
        </section>


        <button type='submit'>REGISTER</button>

      </form>


    </>
  )
}

export default App
