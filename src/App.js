import Skill from "./components/Skill";

function App() {
  const pathChosen = localStorage.getItem("pathChosen");

  return (
    <main>
      <h1>Choose your destiny</h1>
      {!pathChosen &&
        <>
          <Skill name="front-end developer" />
          <Skill name="back-end developer" />
        </>
      }
    </main>
  );
}

export default App;
