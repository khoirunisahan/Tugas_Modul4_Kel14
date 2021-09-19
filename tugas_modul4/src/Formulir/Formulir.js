import { useState, useEffect, useContext, createContext } from 'react';
import './Formulir.css';

const anecdotes = ['', 'Merah', 'Jingga', 'Kuning', 'Hijau', 'Biru', 'Nila', 'Ungu', 'Cyan', 'Maroon', 'Pink', 'Clay'];

const themes = {
  red: {
    background: '#EEEEEE',
    button: '#BD4B4B',
  },
  brown: {
    background: '#faf3e0',
    button: '#b68973',
  },
};

const ThemeContext = createContext();

export default function Index() {
  const [valueInput, setValueInput] = useState({
    name: '',
    email: '',
    number: '',
  });
  const [selected, setSelected] = useState(0);
  const [valueTheme, setValueTheme] = useState(themes.red);

  useEffect(() => {
    alert(`Silahkan Masukkan Formulir`);
  }, []);

  useEffect(() => {
    if (valueInput.name == '') {
      alert('Form nama masih kosong');
    } else {
      alert(`Nama kamu ${valueInput.name}`);
    }
  }, [valueInput.name]);

  useEffect(() => {
    if (valueInput.number.length < 10) {
      alert('Nomor yang anda masukkan tidak valid');
    }
  }, [valueInput.number]);

  const inputHandler = (event, type) => {
    if (type === 'name') {
      setValueInput((prevState) => {
        return { ...prevState, name: event.target.value };
      });
    } else if (type === 'email') {
      setValueInput((prevState) => {
        return { ...prevState, email: event.target.value };
      });
    } else {
      setValueInput((prevState) => {
        return { ...prevState, number: event.target.value };
      });
    }
  };

  return (
    <ThemeContext.Provider value={valueTheme}>
      <div className="contentWrapper" style={{ backgroundColor: valueTheme.background }}>
        <div className="container">
          <button className="Button" style={{ backgroundColor: valueTheme.button }} onClick={() => setValueTheme(valueTheme === themes.red ? themes.brown : themes.red)}>
            Theme
          </button>
          <center>
            <div className="titleWrapper">
              <h1 className="title">Welcome to</h1>
              <h2 style={{ color: valueTheme.button }}>Kelompok 14</h2>
            </div>
            <div className="inputWrapper">
              <div>
                <input placeholder="Masukkan nama" size="50" value={valueInput.name} onChange={(event) => inputHandler(event, 'name')} />
              </div>
              <div>
                <input placeholder="Masukkan email" size="50" value={valueInput.email} onChange={(event) => inputHandler(event, 'email')} />
              </div>
              <div>
                <input placeholder="Masukkan no telp" type="number" size="50" value={valueInput.number} onChange={(event) => inputHandler(event, 'number')} />
              </div>
              <br></br>
              <p className="nama" style={{ color: valueTheme.button }}>
                Hai {valueInput.name}
              </p>
              <p>
                Tekan tombol dibawah untuk menampilkan warna keberuntunganmu: <h4>{anecdotes[selected]}</h4>
              </p>
              <button style={{ backgroundColor: valueTheme.button }} onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>
                Click me
              </button>
            </div>
          </center>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
