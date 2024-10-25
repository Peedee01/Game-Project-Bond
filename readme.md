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

CHARACTER CLASS
- x: the position of the character. (horizontal axis)
- y: the position of the character. (vertical axis)
- speed: the speed of the character.
- width: the width of the character.
- height: the height of the character.
- element: the html element.

-> This class will be extended in the player and in the villain class

GAME CLASS
Controls all the game logic and mechanics.

- isGameOver: Boolean to indicate if the game has ended.
- player: Instance of the player object.
- villains: Array to manage villains.
- lives: Player's remaining lives.
- level: Current game level.
- gameArea: HTML element representing the game area.
- score: Current player score.
- startGame(): Initializes the game, creates the player and villains.
- checkCrash(): Checks for collisions between the player and villains or objects (like Vodka Martinis).
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


Saturday 
- Review the Project Outline: Go over the game concept, class structure, and basic logic. Ensure that all necessary HTML elements and CSS styles are planned out.
Set Up Project Structure: Create your HTML, CSS, and JavaScript files. You don’t need to write much code, but get the project structure ready.
- Play with Simple CSS: Set up the basic layout of the game area using CSS (e.g., background color or a simple image for the game area).

Sunday
HTML & CSS:
- Finish setting up the main game area layout (game grid or container).
- Add placeholders for elements like the score display, lives display, and character icons (James Bond, villains).

Basic Character Class:
- Start coding the Character class in JavaScript (handle properties like x, y, speed, etc.).
- Implement the basic movement logic for the player (up, down, left, right).

Monday
Basic Game Logic:
- Set up the Game class and initialize the game loop.
- Implement the ability to add multiple villains on screen.
- Create the event listeners for moving the player with arrow keys or WASD.

Basic Shooting Mechanism:
- Implement the spacebar event listener and the shoot() method.
- Test shooting functionality (even without full collision detection yet).

Tuesday
Collision Detection:
- Implement basic collision detection between bullets and villains.
- Set up logic to remove villains from the game area when they are hit.

Game Levels:
- Add logic to progress through levels (increase difficulty, number of villains, or speed).

Lives and Score:
- Implement the lives system and display current lives.
- Set up the score counter that updates when villains are hit.

Wednesday
Game Polishing:
- Try to perfect the Design of the Game
- Add sound effects for shooting and villain hits.
- Add a background music toggle.
- Refine the animations (CSS transitions or keyframes) for character movement and shooting.
- Implement a simple "game over" screen and logic to restart the game.

Thursday
Final Touches:
- Review and refine your code (clean up any bugs or incomplete features).
- Make sure all gameplay mechanics work smoothly (shooting, collisions, lives).
- Finalize the README file.
- Prepare the presentation and practice explaining the game logic, features, and code structure for the presentation.

Friday (Presentation Day)
- Final Test: Run the game a few times to make sure everything works.
- Prepare for Presentation: Rehearse a short demo, where you walk through the gameplay and explain the key parts of your code (like the Character and Game classes, and event listeners).