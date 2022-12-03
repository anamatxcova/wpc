const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const mongoUrl =
  "mongodb+srv://anya:hoaiAN123@cluster0.nzyxvmx.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

require("./userSchema");

const User = mongoose.model("UserInfo");

app.post("/register", async (req, res) => {
  const { uname, email, password } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Already Exists" });
    }
    await User.create({
      uname,
      email,
      password,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await password == user.password) {
    if (res.status(201)) {
      return res.json({ status: "ok"});
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "Invalid Password" });
});

app.post("/userData", async (req, res) => {
  try {
    console.log(user);

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
});

app.listen(3001, () => {
  console.log("Server Started");
});
