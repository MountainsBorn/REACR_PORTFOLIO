import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaTrophy } from 'react-icons/fa';
import './MiniGame.css';

const MiniGame = () => {
  const [stars, setStars] = useState([]);
  const [score, setScore] = useState(0);
  const [showGame, setShowGame] = useState(false);
  const [gameTime, setGameTime] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (gameActive && gameTime > 0) {
      const timer = setTimeout(() => setGameTime(gameTime - 1), 1000);
      return () => clearTimeout(timer);
    } else if (gameTime === 0) {
      endGame();
    }
  }, [gameActive, gameTime]);

  useEffect(() => {
    if (gameActive) {
      const interval = setInterval(() => {
        const newStar = {
          id: Date.now(),
          x: Math.random() * 80 + 10,
          y: Math.random() * 60 + 20,
        };
        setStars(prev => [...prev, newStar]);

        setTimeout(() => {
          setStars(prev => prev.filter(star => star.id !== newStar.id));
        }, 2000);
      }, 800);

      return () => clearInterval(interval);
    }
  }, [gameActive]);

  const startGame = () => {
    setScore(0);
    setGameTime(30);
    setGameActive(true);
    setStars([]);
  };

  const endGame = () => {
    setGameActive(false);
    if (score > highScore) {
      setHighScore(score);
    }
  };

  const catchStar = (id) => {
    setStars(prev => prev.filter(star => star.id !== id));
    setScore(score + 1);
  };

  return (
    <div className="mini-game-container">
      {!showGame ? (
        <motion.button
          className="game-trigger-btn"
          onClick={() => setShowGame(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          🎮 Play Mini Game
        </motion.button>
      ) : (
        <motion.div
          className="game-panel"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <button className="close-game-btn" onClick={() => setShowGame(false)}>
            ✕
          </button>

          <div className="game-header">
            <div className="game-stat">
              <FaStar className="stat-icon" />
              <span>Score: {score}</span>
            </div>
            <div className="game-stat">
              <span>⏱️ Time: {gameTime}s</span>
            </div>
            <div className="game-stat">
              <FaTrophy className="stat-icon trophy" />
              <span>Best: {highScore}</span>
            </div>
          </div>

          {!gameActive ? (
            <div className="game-start-screen">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h3>⭐ Catch the Stars! ⭐</h3>
                <p>Click the stars before they disappear!</p>
                <p className="game-instruction">You have 30 seconds. Good luck! 🚀</p>
                {score > 0 && (
                  <motion.p
                    className="game-score-display"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    Your Score: {score} ⭐
                  </motion.p>
                )}
                <motion.button
                  className="game-start-btn"
                  onClick={startGame}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {score > 0 ? 'Play Again' : 'Start Game'}
                </motion.button>
              </motion.div>
            </div>
          ) : (
            <div className="game-area">
              <AnimatePresence>
                {stars.map(star => (
                  <motion.div
                    key={star.id}
                    className="game-star"
                    style={{
                      left: `${star.x}%`,
                      top: `${star.y}%`,
                    }}
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.3 }}
                    onClick={() => catchStar(star.id)}
                    transition={{ duration: 0.3 }}
                  >
                    <FaStar />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default MiniGame;
