# Pig Dice Game - Project Report

## Overview

This report documents the implementation of a single-player version of the classic dice game Pig. The game was developed as a web application using HTML, CSS, and JavaScript.

## Implementation Details

### HTML Structure

The HTML implementation (`index.html`) follows a clean, semantic structure with the following key components:

1. **Start Screen**

   - Input field for player name
   - Start button to begin the game
   - Game rules explanation

2. **Game Area**
   - Information display section (player name, scores, rounds)
   - Dice display area
   - Game control buttons (Roll Dice, Freeze)
   - Game message area for feedback
   - Play Again button (appears after winning)

The HTML structure uses appropriate semantic elements and is organized to facilitate styling and JavaScript interaction.

### CSS Styling

The CSS implementation (`style.css`) provides a responsive and visually appealing interface with:

1. **Responsive Design**

   - Mobile-friendly layout using media queries
   - Flexible grid system for game information
   - Appropriate sizing for buttons and interactive elements

2. **Visual Elements**

   - Dice display with border and shadow effects
   - Color-coded information for better readability
   - Button styling with hover effects
   - Clear visual hierarchy

3. **Layout**
   - Centered container with appropriate spacing
   - Card-like appearance with shadow effects
   - Consistent color scheme and typography

### JavaScript Logic

The JavaScript implementation (`script.js`) handles all game functionality:

1. **Game State Management**

   - Variables to track player name, scores, and game state
   - Functions to update display elements
   - Reset functionality for new games

2. **Core Game Mechanics**

   - Random dice roll generation (1-6)
   - Score accumulation logic
   - Round management
   - Win condition detection

3. **User Interaction**

   - Event handlers for buttons
   - Input validation
   - Game flow control
   - Feedback messages

4. **Edge Cases Handling**
   - Preventing actions when game is over
   - Validation for player name input
   - Preventing freezing with zero round points

## Testing Results

The game was thoroughly tested to ensure all requirements were met:

1. **Functionality Testing**

   - Player name input and display works correctly
   - Dice rolling generates random numbers between 1-6
   - Rolling a 1 correctly resets round score
   - Freezing correctly adds round score to total
   - Win condition (score ≥ 100) works properly
   - Play Again functionality resets the game state

2. **UI Testing**

   - All elements display correctly
   - Responsive design works on different viewport sizes
   - Game messages provide clear feedback
   - Score displays update correctly

3. **Edge Case Testing**
   - Empty player name validation
   - Attempting to freeze with no round points
   - Button disabling after game completion

## Challenges and Solutions

1. **Random Number Generation**

   - Challenge: Ensuring true randomness in dice rolls
   - Solution: Used Math.random() with proper scaling and floor function

2. **Game State Management**

   - Challenge: Keeping track of different game states
   - Solution: Implemented clear variable naming and state tracking

3. **User Experience**
   - Challenge: Providing clear feedback to the player
   - Solution: Added game messages and visual cues for actions
