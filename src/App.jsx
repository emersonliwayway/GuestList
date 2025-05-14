import { useState } from "react";
import GuestList from "./components/GuestList";
import GuestCard from "./components/Guest";

export default function App() {
  const [guestId, setGuestId] = useState(null);

  return (
    <>
      <h1>Guest List</h1>
      {guestId ? (
        <GuestCard guestId={guestId} setGuestId={setGuestId} />
      ) : (
        <GuestList setGuestId={setGuestId} />
      )}
    </>
  );
}
