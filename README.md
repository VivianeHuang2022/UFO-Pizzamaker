# [Project's Name]
The Adventure of UFO X

## Description
Embark on a captivating journey with "The Adventure of UFO X", a dynamic JavaScript-based game. Players guide a UFO through a maze of poisonous mushrooms, gathering energy from normal mushrooms to sustain life. The challenge escalates with a responsive environment that requires strategic maneuvering. The game's highlight is the unique 'star rain' effect signaling game over, alongside a shooting mechanic to target mushrooms for a more interactive experience.

## MVP (Minimum Viable Product)
- **Player Movement:** Intuitive control system for UFO navigation.
- **Obstacle Avoidance:** Skillful evasion of poisonous mushrooms is critical for survival.
- **Energy Collection:** Gathering normal mushrooms boosts life count.
- **Score Tracking:** Real-time score display to track player achievements.
- **Life System:** Commences with a finite number of lives, diminishing with each collision with poisonous mushrooms.
- **Mutation System:** A gene mutation feature activates upon sufficient interaction with both mushroom types.
- **Game Over State:** A visually stunning transition to a game over screen enhanced by a star rain effect.
 ![main theme](https://github.com/VivianeHuang2022/UFO-Pizzamaker/assets/151049853/040ce715-9fec-4fd7-9b8b-a31d032b6846)


## Backlog
- **Power-Ups:** Introduce power-ups for temporary gameplay advantages.
- **Level Progression:** Gradually increase difficulty and introduce new environments.
- **Leaderboard:** Feature a high score system for competitive play.
- **Multiplayer Mode:** Enable cooperative or competitive gameplay for multiple players.
- **Sound Effects and Music:** Incorporate immersive audio elements for an enriched gaming experience.

## Data Structure
Key components and functionalities:
- `Game`: Core class to initialize and manage game operations.
- `start()`: Prepares the game environment and initiates the gameplay loop.
- `gameLoop()`: Central loop handling game mechanics, including player and obstacle dynamics.
- `Player`: Manages UFO's specific actions and movements.
- `Obstacle`: Represents in-game hazards.
- `Energy`: Denotes collectible items for life enhancement.
- `Bullet`: Allows the UFO to shoot at obstacles and energy sources for strategic play.

## States & State Transitions
- **Start Screen:** The introductory interface presenting the game.
- **Game Screen:** The primary area of gameplay activity.
- **End Screen:** Showcases the final score and unveils the star rain effect post-game.
