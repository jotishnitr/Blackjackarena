# 🃏 Blackjack Game (JavaScript)

A simple Blackjack game built using HTML, CSS, and JavaScript.  
This project simulates core Blackjack mechanics with betting, chip management, and dynamic gameplay.

## 🚀 Live Demo

https://blackjackarena.netlify.app/


## 🎯 Features

- Player setup (name, age validation, chips)
- Betting system (user-defined bet each round)
- Random card generation
- Ace handling (11 → 1 automatically to prevent bust)
- Chip management (win/lose logic)
- Game state control (start, draw card, round end)
- Interactive UI with animations

## 🕹️ Game Rules

- Enter your name, age (18+), and starting chips
- Enter a bet before starting each round
- Click **START GAME** to begin
- Your bet is deducted at the start of the round
- You receive two cards initially
- Click **NEW CARD** to draw more cards
- Try to reach exactly **21 (Blackjack)**

### Outcomes:
- ✅ **Blackjack (21)** → You win and get **2× your bet**
- ❌ **Sum > 21** → You lose your bet
- 🔁 Continue drawing cards to improve your sum

- Ace counts as **11 or 1 automatically**
- Game ends when your chips reach **0**

## 🧠 Concepts Used

- Arrays and state management
- DOM manipulation
- Event handling
- Conditional logic
- Random number generation
- Game logic design
- Basic UI/UX principles

## 📂 Project Structure
blackjack/
- index.html
- blackjack.css
- blackjack.js
- background.png
- icon.png


## 🔧 Future Improvements

- Add dealer logic (real Blackjack rules)
- Add “Stand” option
- Improve UI with card graphics
- Add sound effects
- Add score history / leaderboard

## 📌 Note

This project was built as part of my learning journey in web development and JavaScript fundamentals.
