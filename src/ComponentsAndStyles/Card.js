import React from "react";

export default function Card() {
  return (
    <div className="Card">
      <h2 key={Math.random()}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
        cupiditate repellat ad saepe voluptatem tempora velit quis expedita esse
        sunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
        cupiditate repellat ad saepe voluptatem tempora velit quis expedita esse
        sunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
        cupiditate repellat ad saepe voluptatem tempora velit quis expedita esse
        sunt!
      </h2>
      <button>
        <h4>Aperte para mais quotes</h4>
      </button>
    </div>
  );
}
