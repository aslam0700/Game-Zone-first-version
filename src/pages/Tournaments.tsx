import { useNavigate } from "react-router-dom";
import "../styles/Tournaments.css";

function Tournaments() {
  const navigate = useNavigate();

  const games = [
    {
      id: 1,
      name: "PUBG Mobile Championship",
      prize: "₹10,000",
      fee: "₹100",
      date: "20 Nov 2026",
      slots: "48 / 100",
    },
    {
      id: 2,
      name: "Free Fire Battle",
      prize: "₹5,000",
      fee: "₹50",
      date: "22 Nov 2026",
      slots: "30 / 80",
    },
    {
      id: 3,
      name: "BGMI Pro League",
      prize: "₹15,000",
      fee: "₹150",
      date: "25 Nov 2026",
      slots: "12 / 64",
    },
  ];

  return (
    <div className="tournament-page">
      <h1>🏆 Gaming Tournaments</h1>
      <p>Join a match, compete, and win rewards.</p>

      <div className="tournament-container">
        {games.map((game) => (
          <div className="tournament-card" key={game.id}>
            <h2>{game.name}</h2>
            <p>🏆 Prize Pool: {game.prize}</p>
            <p>💰 Entry Fee: {game.fee}</p>
            <p>📅 Date: {game.date}</p>
            <p>👥 Slots: {game.slots}</p>
            <button onClick={() => navigate("/join")}>
              Join Tournament
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tournaments;