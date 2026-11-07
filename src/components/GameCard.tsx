
import "../styles/GameCard.css";

interface GameCardProps {
  title: string;
  category: string;
  image: string;
}

function GameCard({ title, category, image }: GameCardProps) {
  return (
    <div className="game-card">
      <img src={image} alt={title} />

      <div className="game-info">
        <h3>{title}</h3>
        <p>{category}</p>
        <button>Play Now</button>
      </div>
    </div>
  );
}

export default GameCard;
