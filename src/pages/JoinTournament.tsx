
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/JoinTournament.css";


function JoinTournament() {
  const navigate = useNavigate();

  const [playerName, setPlayerName] = useState("");
  const [email, setEmail] = useState("");
  const [gameId, setGameId] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert(`Registration submitted successfully!\nPlayer: ${playerName}`);
    navigate("/tournaments");
  }

  return (
    <div className="join-page">
      <form className="join-form" onSubmit={handleSubmit}>
        <h1>🎮 Tournament Registration</h1>

        <label>Player Name</label>
        <input
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Enter your name"
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <label>Game ID</label>
        <input
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
          placeholder="Enter your game ID"
          required
        />

        <button type="submit">Submit Registration</button>

        <button
          type="button"
          className="back-button"
          onClick={() => navigate("/tournaments")}
        >
          Back to Tournaments
        </button>
      </form>
    </div>
  );
}

export default JoinTournament;
