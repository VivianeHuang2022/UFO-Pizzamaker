# [Project's Name]
UFO eat mushroom

## Description
A dynamic, JavaScript-based game where players navigate through obstacles, collect energies, and experience a unique 'money rain' effect upon game over. The game challenges players with a responsive environment, balancing risk and reward to achieve a high score while maintaining lives.

## MVP (Minimum Viable Product)
- **Player Movement:** Basic movement controls for the player.
- **Obstacle Avoidance:** Players must avoid obstacles to survive.
- **Energy Collection:** Players can collect energies to gain lives.
- **Score Tracking:** The game tracks and displays the player's score.
- **Life System:** The game starts with a set number of lives, lost on collision with obstacles.
- **Game Over State:** Transition to a game over screen with a money rain effect.

## Backlog
- **Power-Ups:** Introduce power-ups for temporary advantages.
- **Level Progression:** Increase difficulty or change environments as the player progresses.
- **Leaderboard:** Implement a system to track and display high scores.
- **Multiplayer Mode:** Allow multiple players to compete or cooperate.
- **Sound Effects and Music:** Add audio for an immersive experience.

## Data Structure
Classes and methods include:
- `Game`: Main game class for initializing and running the game.
- `start()`: Sets up the game screen and starts the main loop.
- `gameLoop()`: Handles gameplay logic including player and obstacle movements.
- `Player`: Handles player-specific logic and movements.
- `Obstacle`: Represents obstacles in the game.
- `Energy`: Represents energy objects to be collected by the player.
- `startMoneyRain()`, `stopMoneyRain()`: Functions for the money rain effect.

## States & State Transitions
- **Start Screen:** Initial view where the game is introduced.
- **Game Screen:** The main gameplay area.
- **End Screen:** Displayed when the game is over, showing the score and triggering the money rain.

## Task
1. Set up the game environment and screens.
2. Implement player controls and movements.
3. Create and manage obstacles.
4. Implement energy collection and score system.
5. Add game over logic and money rain effect.
6. Testing and debugging.
7. Deployment.

## Links
- [Trello Link](#)
- [Slides Link](#)
- [Github Repository Link](#)
- [Deployment Link](#Deployment-Link)

---

Note: This README provides a structured overview of the game project, including its features, structure
