const express = require('express');
const mongoose = require('mongoose');
const Player = require('./models/PlayerModel'); // Adjust the path based on your folder structure

const router = express.Router();


// Route to create a new player
app.post('/players', async (req, res) => {
    try {
      const player = new Player(req.body); // Create a new player instance
      await player.save(); // Save the player to the database
      res.status(201).send(player); // Send the created player back in the response
    } catch (err) {
      res.status(400).send(err); // Send error response if there's an issue
    }
  });
  

// GET all players
router.get("/", async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch players." });
  }
});


// GET a single player
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Player does not exist." });
  }
  try {
    const player = await Player.findById(id);
    if (!player) {
      return res.status(404).json({ error: "Player does not exist." });
    }
    res.status(200).json(player);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch player." });
  }
});


// PATCH a single player's information
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Player does not exist." });
  }
  try {
    const player = await Player.findOneAndUpdate({ _id: id }, req.body, { new: true });
    if (!player) {
      return res.status(404).json({ error: "Player does not exist." });
    }
    res.status(200).json(player);
  } catch (err) {
    res.status(500).json({ error: "Failed to update player." });
  }
});


// DELETE a single player
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Player does not exist." });
  }
  try {
    const player = await Player.findOneAndDelete({ _id: id });
    if (!player) {
      return res.status(404).json({ error: "Player does not exist." });
    }
    res.status(200).json(player);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete player." });
  }
});


module.exports = router;
