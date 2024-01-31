export default function MyComponent({ clicked, onClicked }) {
  return (
    <div>
      <h2>Child component:</h2>
      {clicked ? <p>Clicked in parent</p> : <p>Not clicked in parent</p>}

      <button onClick={onClicked}>Child Button</button>
    </div>
  );
}
