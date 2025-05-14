import { useState } from "react";
import GuestCard from "./Guest";

const guests = [
  {
    id: 1,
    name: "Yoshi",
    email: "yoshi@gmail.com",
    phone: "734-454-0365",
    bio: "Yoshi is a dog",
    job: "Gardner pup",
  },
  {
    id: 2,
    name: "Bosco",
    email: "bosco@gmail.com",
    phone: "734-454-0365",
    bio: "Bosco is a dog",
    job: "Window watching pup",
  },
];

export default function GuestList({ setGuestId }) {
  return (
    <>
      <div className="guests">
        {guests.map((guest) => (
          <div key={guest.id}>
            <li>{guest.name}</li>
            <li>{guest.email}</li>
            <li>{guest.phone}</li>
            <button onClick={() => setGuestId(guest.id)}>More</button>
          </div>
        ))}
      </div>
    </>
  );
}
