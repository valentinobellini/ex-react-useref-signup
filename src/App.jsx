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



// import { useState } from 'react'


// function App() {

//   const [fullName, setFullName] = useState('');
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [specialization, setSpecialization] = useState('');
//   const [experience, setExperience] = useState('');
//   const [bio, setBio] = useState('');

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!fullName || !userName || !password || !specialization || !experience || !bio) {
//       console.log('Please fill out all fields');
//     } else if (experience < 1) {
//       console.log('You must have at least 1 year of experience');
//     } else {
//       console.log({
//         fullName,
//         userName,
//         password,
//         specialization,
//         experience,
//         bio
//       });

//     }

//   }

//   return (
//     <>

//       <form onSubmit={handleSubmit}>

//         <section>
//           <input type="text"
//             value={fullName}
//             onChange={e => setFullName(e.target.value)}
//             placeholder='Username'
//           />
//         </section>

//         <section>
//           <input type="text"
//             value={userName}
//             onChange={e => setUserName(e.target.value)}
//             placeholder='Username'
//           />
//         </section>

//         <section>
//           <input type="password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             placeholder='Password'
//           />
//         </section>

//         <section>
//           <select value={specialization}
//             onChange={e => setSpecialization(e.target.value)}
//           >
//             <option value="">Select a specialization</option>
//             <option value="Full Stack">Full Stack</option>
//             <option value="Frontend">Frontend</option>
//             <option value="Backend">Backend</option>
//           </select>
//         </section>

//         <section>
//           <input type="number"
//             value={experience}
//             onChange={e => setExperience(e.target.value)}
//             placeholder='Years of Experience'
//           />
//         </section>

//         <section>
//           <textarea name="bio"
//             value={bio}
//             onChange={e => setBio(e.target.value)}
//             placeholder='Short Biography'
//           ></textarea>
//         </section>


//         <button type='submit'>REGISTER</button>

//       </form>


//     </>
//   )
// }

// export default App








// 📌 Milestone 2: Validare in tempo reale
// Aggiungere la validazione in tempo reale dei seguenti campi:
// ✅ Username: Deve contenere solo caratteri alfanumerici e almeno 6 caratteri (no spazi o simboli).
// ✅ Password: Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo.
// ✅ Descrizione: Deve contenere tra 100 e 1000 caratteri (senza spazi iniziali e finali).
// Suggerimento: Per semplificare la validazione, puoi definire tre stringhe con i caratteri validi e usare .includes() per controllare se i caratteri appartengono a una di queste categorie:
// const letters = "abcdefghijklmnopqrstuvwxyz";
// const numbers = "0123456789";
// const symbols = "!@#$%^&*()-_=+[]{}|;:'\\",.<>?/`~";
// Per ciascuno dei campi validati in tempo reale, mostrare un messaggio di errore (rosso) nel caso non siano validi, oppure un messaggio di conferma (verde) nel caso siano validi.




// import { useState } from 'react'


// function App() {

//   const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const numbers = "0123456789";
//   const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";

//   const [isUserNameValid, setIsUserNameValid] = useState(null);
//   const [isPasswordValid, setIsPasswordValid] = useState(null);
//   const [isBioValid, setIsBioValid] = useState(null);


//   function validateUsername(value) {
//     const isLongEnough = value.length >= 6;
//     const isAlphanumeric = /^[a-zA-Z0-9]+$/.test(value);
//     return isLongEnough && isAlphanumeric;
//   }


//   function validatePassword(value) {
//     if (value.length < 8) return false;

//     let hasLetter = false;
//     let hasNumber = false;
//     let hasSymbol = false;

//     for (let char of value) {
//       if (letters.includes(char)) hasLetter = true;
//       else if (numbers.includes(char)) hasNumber = true;
//       else if (symbols.includes(char)) hasSymbol = true;
//     }

//     return hasLetter && hasNumber && hasSymbol;
//   }


//   function validateBio(value) {
//     const trimmed = value.trim();
//     return trimmed.length >= 100 && trimmed.length <= 1000;
//   }


//   const [fullName, setFullName] = useState('');
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [specialization, setSpecialization] = useState('');
//   const [experience, setExperience] = useState('');
//   const [bio, setBio] = useState('');



//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!fullName || !userName || !password || !specialization || !experience || !bio) {
//       console.log('Please fill out all fields');
//     } else if (experience < 1) {
//       console.log('You must have at least 1 year of experience');
//     } else {
//       console.log({
//         fullName,
//         userName,
//         password,
//         specialization,
//         experience,
//         bio
//       });

//     }

//   }



//   return (
//     <>

//       <form onSubmit={handleSubmit}>

//         <section>
//           <input type="text"
//             value={fullName}
//             onChange={e => setFullName(e.target.value)}
//             placeholder='Full Name'
//           />
//         </section>

//         <section>
//           <input type="text"
//             value={userName}
//             onChange={e => {
//               const value = e.target.value;
//               setUserName(value);
//               setIsUserNameValid(validateUsername(value))
//             }}
//             placeholder='Username'
//           />
//           {isUserNameValid === false && (
//             <p style={{ color: 'red' }}>
//               Username must contain at least 8 characters without spaces
//             </p>
//           )}
//           {isUserNameValid === true && (
//             <p style={{ color: 'green' }}>
//               Username is valid
//             </p>
//           )}
//         </section>

//         <section>
//           <input type="password"
//             value={password}
//             onChange={e => {
//               const value = e.target.value;
//               setPassword(value);
//               setIsPasswordValid(validatePassword(value));
//             }}
//             placeholder='Password'
//           />
//           {isPasswordValid === false && (
//             <p style={{ color: 'red' }}>
//               At least 8 characters with at least 1 letter, 1 number and 1 symbol
//             </p>
//           )}
//           {isPasswordValid === true && (
//             <p style={{ color: 'green' }}>
//               Password is valid
//             </p>
//           )}
//         </section>

//         <section>
//           <select value={specialization}
//             onChange={e => setSpecialization(e.target.value)}
//           >
//             <option value="">Select a specialization</option>
//             <option value="Full Stack">Full Stack</option>
//             <option value="Frontend">Frontend</option>
//             <option value="Backend">Backend</option>
//           </select>
//         </section>

//         <section>
//           <input type="number"
//             value={experience}
//             onChange={e => setExperience(e.target.value)}
//             placeholder='Years of Experience'
//           />
//         </section>

//         <section>
//           <textarea name="bio"
//             value={bio}
//             onChange={e => {
//               const value = e.target.value;
//               setBio(value);
//               setIsBioValid(validateBio(value));
//             }}
//             placeholder='Short Biography'
//           ></textarea>
//           {isBioValid === false && (
//             <p style={{ color: 'red' }}>
//               Bio must be between 100 and 1000 characters, without spaces at the beginning or at the end
//             </p>
//           )}
//           {isBioValid === true && (
//             <p style={{ color: 'green' }}>
//               Bio is valid
//             </p>
//           )}
//         </section>


//         <button type='submit'>REGISTER</button>

//       </form>


//     </>
//   )
// }

// export default App







// 📌 Milestone 3: Convertire i Campi Non Controllati
// Non tutti i campi del form necessitano di essere aggiornati a ogni carattere digitato. Alcuni di essi non influenzano direttamente l’interfaccia mentre l’utente li compila, quindi è possibile gestirli in modo più efficiente.
// Analizza il form: Identifica quali campi devono rimanere controllati e quali invece possono essere non controllati senza impattare l’esperienza utente.
// Converti i campi non controllati: Usa useRef() per gestirli e recuperare il loro valore solo al momento del submit.
// Assicurati che la validazione continui a funzionare: Anche se un campo non è controllato, deve comunque essere validato correttamente quando l’utente invia il form.





import { useState, useRef } from 'react'


function App() {

  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";

  const [isUserNameValid, setIsUserNameValid] = useState(null);
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  const [isBioValid, setIsBioValid] = useState(null);


  function validateUsername(value) {
    const isLongEnough = value.length >= 6;
    const isAlphanumeric = /^[a-zA-Z0-9]+$/.test(value);
    return isLongEnough && isAlphanumeric;
  }


  function validatePassword(value) {
    if (value.length < 8) return false;

    let hasLetter = false;
    let hasNumber = false;
    let hasSymbol = false;

    for (let char of value) {
      if (letters.includes(char)) hasLetter = true;
      else if (numbers.includes(char)) hasNumber = true;
      else if (symbols.includes(char)) hasSymbol = true;
    }

    return hasLetter && hasNumber && hasSymbol;
  }


  function validateBio(value) {
    const trimmed = value.trim();
    return trimmed.length >= 100 && trimmed.length <= 1000;
  }


  const fullNameRef = useRef()
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const specializationRef = useRef()
  const experienceRef = useRef()
  const [bio, setBio] = useState('');



  function handleSubmit(e) {
    e.preventDefault();

    const fullName = fullNameRef.current.value;
    const specialization = specializationRef.current.value;
    const experience = Number(experienceRef.current.value);

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
            ref={fullNameRef}
            placeholder='Full Name'
          />
        </section>

        <section>
          <input type="text"
            value={userName}
            onChange={e => {
              const value = e.target.value;
              setUserName(value);
              setIsUserNameValid(validateUsername(value))
            }}
            placeholder='Username'
          />
          {isUserNameValid === false && (
            <p style={{ color: 'red' }}>
              Username must contain at least 8 characters without spaces
            </p>
          )}
          {isUserNameValid === true && (
            <p style={{ color: 'green' }}>
              Username is valid
            </p>
          )}
        </section>

        <section>
          <input type="password"
            value={password}
            onChange={e => {
              const value = e.target.value;
              setPassword(value);
              setIsPasswordValid(validatePassword(value));
            }}
            placeholder='Password'
          />
          {isPasswordValid === false && (
            <p style={{ color: 'red' }}>
              At least 8 characters with at least 1 letter, 1 number and 1 symbol
            </p>
          )}
          {isPasswordValid === true && (
            <p style={{ color: 'green' }}>
              Password is valid
            </p>
          )}
        </section>

        <section>
          <select ref={specializationRef}

          >
            <option value="">Select a specialization</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </section>

        <section>
          <input type="number"
            ref={experienceRef}
            placeholder='Years of Experience'
          />
        </section>

        <section>
          <textarea name="bio"
            value={bio}
            onChange={e => {
              const value = e.target.value;
              setBio(value);
              setIsBioValid(validateBio(value));
            }}
            placeholder='Short Biography'
          ></textarea>
          {isBioValid === false && (
            <p style={{ color: 'red' }}>
              Bio must be between 100 and 1000 characters, without spaces at the beginning or at the end
            </p>
          )}
          {isBioValid === true && (
            <p style={{ color: 'green' }}>
              Bio is valid
            </p>
          )}
        </section>


        <button type='submit'>REGISTER</button>

      </form>


    </>
  )
}

export default App


