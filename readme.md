-- 007 LEGACY --

The Experience:
This game is for the real James Bond lover. It will take you in to the world of secret agent 007.
You will be fighting against multiple Bond Villains from the movie franchise. They will come at you with everything they got and you need to be careful not too let them catch you. Ofcourse you have a licence to kill so you will be able to shoot the Villains. And also look for the Vodka Martinis, they can give you some extra strength to be stronger in your fight against the Villains. So good luck and remember your Name is Bond, James Bond!


FEATURES OF THE GAME
- Move around in a Bond-style game area where you play as James Bond.
- Face different Bond villains that attack you.
- Shoot villains and score points.
- Higher levels feature more villains with increased speed.
- Collect Vodka Martinis for extra lives.
- Play with James Bond-themed background music.
- Gunshot and attack sound effects.
- Score Meter: Displays your current score and high score.
- Lives and Level Indicator: Themed with James Bond icons (hearts for lives, etc.).
- Character Animations: Different animations for walking and shooting (if possible).

SET-UP:

PLAYER CLASS
Contains all the elements of the player
- the speed of the player
- the width and height of the player
- the HTML element of the player
- the position left and top of the player (startposition)
- the direction of the player which eventually wil be decided by the move method
- the move method that controls the movements of the player

Enemy class
- we create an array of villains

GAME CLASS
Controls all the game logic and mechanics.

- isGameOver: Boolean to indicate if the game has ended.
- lives: Player's remaining lives.
- level: Current game level.
- gameArea: HTML element representing the game area.
- score: Current player score.
- startGame(): Initializes the game, creates the player and villains.
- colissionTest(): Checks for collisions between the player and villains or objects (like Vodka Martinis).
- updateGameArea(): Updates the positions of all characters and objects.
- endGame(): Stops the game and shows game-over screen.
- restartGame(): To restart the game after game-over screen.

METHODS
- move(direction): Updates the character's position based on user input.
- shoot(): Simulates shooting and checks if a villain is hit.

HTML Elements
- gameArea: <div> container for the game grid where characters move around.
- scoreDisplay: <div> to show the player's current score.
- livesDisplay: <div> or <span> to show remaining lives (you can use icons like hearts or martinis for lives).
- villainContainer: <div> to hold all the villain elements.
- player: <div> for James Bond's character.

CSS IMPORTANT
- Animations: Using simple CSS animations or transitions for Bond's shooting and villain attacks.
- Positioning: Using absolute or relative positioning for the player and villain elements to enable smooth movement within the game area.

JavaScript DOM
- Event Listeners: Keydown and keyup events to move the player (arrow keys and WASD for movement). Including the spacebar to shoot at enemies.
- Score Update: Dynamically updates the score using DOM manipulation (document.getElementById('scoreDisplay').innerText = score).
- Lives Update: Update the lives counter when Bond collects Vodka Martinis.


Additional Features (if time permits)
Difficulty Progression: Increase the speed of the villains as the player advances to higher levels.
Random Power-Ups: Vodka Martinis spawn randomly on the map.
Save Game Progress: Store high score using localStorage to maintain high scores across sessions.
Sound Effects: Use JavaScript to control background music and sound effects like gunshots.

