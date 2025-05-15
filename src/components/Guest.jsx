import useQuery from "./useQuery";
export default function GuestCard({ guestId, setGuestId }) {
  const { data: guest, error } = useQuery(`/guests/${guestId}`);
  if (error || !guest) return <p>{error}</p>;
  return (
    <>
      <div className="card">
        <li>
          <b>Name: </b>
          {guest.name}
        </li>
        <li>
          <b>Email: </b> {guest.email}
        </li>
        <li>
          <b>Phone: </b> {guest.phone}
        </li>
        <li>
          <b>Biography: </b> {guest.bio}
        </li>
        <li>
          <b>Biography: </b> {guest.job}
        </li>
        <button onClick={() => setGuestId(null)}>Back</button>
      </div>
    </>
  );
}
