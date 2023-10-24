import Note from "./component/Note";

function App() {
  const notes = [
    {
      tanggal: "2021-09-01",
      isi: "Belajar React"
    },
    {
      tanggal: "2021-09-02",
      isi: "Belajar js"
    },
    {
      tanggal: "2021-09-02",
      isi: "Belajar css"
    },
  ]

  return (
    <>
      {
        notes.map((note, index) => {
          return <Note tanggal={note.tanggal} isi={note.isi} key={index} />;
        })
      }
    </>
  );
}

export default App;