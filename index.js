const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Sports',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log("Connected"))
  .catch((err) => console.log(err));

const TeamData = new mongoose.Schema({
  id: Number,
  name: {
    type: String,
    uppercase: true,
    trim: true,
    maxlength: [5, "Maximum 5 letters"]
  }
})

const Team = new mongoose.model("Team", TeamData)

const createTeam = async () => {
  try {
    // const team1 = new Team({
    //   id: 1,
    //   name: "RCB",
    // })
    const team2 = new Team({
      id: 2,
      name: "MI",
    })
    const result = await Team.insertMany([team2]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
// createTeam();

const getTeam = async () => {
  try {
    const result = await Team.find().select({name : 1})
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
// getTeam();

const updateTeam = async (_id) => {
  try {
    const result = await Team.updateOne({ _id }, {
      $set: {
        name: "CSK"
      }
    })
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
//  updateTeam("62aaf3fab23838bcdd0ebe22");

const deleteTeam = async (_id) => {
  try {
    const result = await Team.findByIdAndDelete({ _id })
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
 deleteTeam("62aaf3fab23838bcdd0ebe22");

const PlayerData = new mongoose.Schema({
  id: Number,
  name: {
    type: String,
    uppercase: true,
    trim: true,
    maxlength: [5, "Maximum 5 letters"]
  },
  age : Number,
  captain : String,
  dob : Date
})

const Player = new mongoose.model("Player", PlayerData)

const createPlayer = async () => {
  try {
    // const player1 = new Player({
    //   id: 1,
    //   name: "ABD",
    //   age : 39,
    //   captain : "No",
    //   dob : "1982-02-11"
    // })
    const player2 = new Player({
      id: 2,
      name: "Virat",
      age : 29,
      captain : "No",
      dob : "1992-05-15"
    })
    const result = await Player.insertMany([player2]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
//  createPlayer();

const getPlayer = async () => {
  try {
    const result = await Player.find().select({name : 1},)
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
getPlayer();

const updatePlayer = async (_id) => {
  try {
    const result = await Player.updateOne({ _id }, {
      $set: {
        name: "Hardik"
      }
    })
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
//  updatePlayer("62aaf481c99e1e6394eea876");

const deletePlayer = async (_id) => {
  try {
    const result = await Player.findByIdAndDelete({ _id })
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
deletePlayer("62aaf481c99e1e6394eea876");


app.listen(5000,()=>{
  console.log("App is listening to port 5000");
  });