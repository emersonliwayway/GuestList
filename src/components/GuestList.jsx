import useQuery from "./useQuery";

export default function GuestList({ setGuestId }) {
  const { data: guests, loading, error } = useQuery("/guests");
  if (loading) return <p>Loading...</p>;
  if (error || !guests) return <p>{error}</p>;
  return (
    <>
      <div className="guests">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest) => (
              <tr key={guest.id} onClick={() => setGuestId(guest.id)}>
                <td>{guest.name}</td>
                <td>{guest.email}</td>
                <td>{guest.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
