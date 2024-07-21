const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

const PORT = process.env.PORT || 8080;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log(err));

// Define user schema and model
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String
});

const userModel = mongoose.model("MERN", userSchema);

// Define routes
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/signup", async (req, res) => {
  const { email } = req.body;

  try {
    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      res.send({ message: "Email id is already registered", alert: false });
    } else {
      const newUser = new userModel(req.body);
      await newUser.save();
      res.send({ message: "Successfully signed up", alert: true });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error during sign up", alert: false });
  }
});

// Login endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email: email });

    if (user) {
      if (user.password === password) {
        const dataSend = {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          image: user.image,
        };
        res.send({
          message: "Login is successful",
          alert: true,
          data: dataSend,
        });
      } else {
        res.send({
          message: "Incorrect password",
          alert: false,
        });
      }
    } else {
      res.send({
        message: "Email not found, please sign up",
        alert: false,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error during login", alert: false });
  }
});



//product section

const schemaProduct = mongoose.Schema({
    name: String,
    category: String,
    image: String,
    price: String,
    description: String,
  });
  const productModel = mongoose.model("product", schemaProduct);
  // api
  app.post("/uploadProduct", async (req, res) => {
    const data = await productModel(req.body);
    const datasave = await data.save();
    res.send({ message: "Uploaded successfully" });
  });
  

 


const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model('Contact', contactSchema);

app.post("/contactInfo", async (req, res) => {
    try {
      const formData = new Contact(req.body);
      const datasave = await formData.save();
      res.send({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error saving contact message: ", error);
      res.status(500).send({ message: "Error saving contact message" });
    }
  });
  

  // Start server
app.listen(PORT, () => console.log("Server is running on " + PORT));
