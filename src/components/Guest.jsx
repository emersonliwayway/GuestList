import { useState } from "react";

export default function GuestCard({ guestId, setGuestId }) {
  return (
    <>
      <div>
        <li>{guestId.name}</li>
        <li>{guestId.email}</li>
        <li>{guestId.phone}</li>
        <li>{guestId.bio}</li>
        <li>{guestId.job}</li>
        <button onClick={() => setGuestId(null)}>Return to Guests</button>
      </div>
    </>
  );
}
