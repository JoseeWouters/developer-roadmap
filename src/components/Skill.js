export default function Skill({name}) {
  function saveSkill() {
    localStorage.setItem("pathChosen", name);
  }

  return (
    <button onClick={saveSkill}>
      <p>{name}</p>
    </button>
  );
}
