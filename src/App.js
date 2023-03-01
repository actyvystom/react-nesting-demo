import React from "react";
import "./styles.css";

function Animal({ emoji, name, description }) {
  return (
    <>
      <h2>
        {emoji} {name}
      </h2>
      {description}
      <Button>
        Adopt <strong>{name}</strong>
      </Button>
    </>
  );
}

function Button({ children }) {
  return <button type="button">{children}</button>;
}

export default function App() {
  return (
    <main>
      <h1>Animal Shelter</h1>
      <p>Please adopt our lovely pets!</p>
      <Animal emoji="🐕" name="Lucky" />
      <Animal emoji="🐈" name="Mittens" />
      <Animal
        emoji="🐢"
        name="Archibald"
        description={
          <>
            <p>Super relaxed turtle</p>
            <ul>
              <li>Eats lettuce all the time</li>
              <li>Can sleep in your fridge</li>
            </ul>
          </>
        }
      />
      <Animal emoji="🐣" name="Chick Norris" />
    </main>
  );
}
