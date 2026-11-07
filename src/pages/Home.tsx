
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>LEVEL UP YOUR GAMING</h1>

        <p>
          Join tournaments, compete with players and win exciting rewards.
        </p>

        <button
          className="explore-button"
          onClick={() => navigate("/tournaments")}
        >
          Explore Tournaments
        </button>
      </section>

      <section className="popular-games">
        <h2>Popular Games</h2>

        <div className="games-container">
          <div className="game-card">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600"
              alt="PUBG Mobile"
            />

            <div className="game-info">
              <h3>PUBG Mobile</h3>
              <p>Battle Royale</p>

              <button onClick={() => navigate("/tournaments")}>
                Play Now
              </button>
            </div>
          </div>

          <div className="game-card">
            <img
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600"
              alt="Call of Duty"
            />

            <div className="game-info">
              <h3>Call of Duty</h3>
              <p>Action</p>

              <button onClick={() => navigate("/tournaments")}>
                Play Now
              </button>
            </div>
          </div>

          <div className="game-card">
            <img
              src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600"
              alt="Free Fire"
            />

            <div className="game-info">
              <h3>Free Fire</h3>
              <p>Battle Royale</p>

              <button onClick={() => navigate("/tournaments")}>
                Play Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
