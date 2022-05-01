const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;

//use middleware
app.use(cors());
app.use(express.json());

//Connecting Mongodb and actions

//database: ansarulanis
//Pass: bxydOrGL5hWi6mSv

const uri =
  "mongodb+srv://ansarulanis:bxydOrGL5hWi6mSv@nodemongocrud.hz5gq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    await client.connect();
    const userCollection = client.db("foodExpress").collection("users");
    //Get all user from database
    app.get("/user", async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });

    //Add a user to database
    app.post("/user", (req, res) => {
      const newUser = req.body;
      const result = userCollection.insertOne(newUser);
      console.log("Added new user");
      res.send(result);
    });

    //Finding one data for updating
    app.get("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await userCollection.findOne(query);
      res.send(result);
    });

    //Adding updated data
    app.put("/user/:id", async (req, res) => {
      const id = req.params.id;
      const updatedUser = req.body;
      const filter = { _id: ObjectId(id) };

      const options = { upsert: true };

      const updatedDoc = {
          $set: {
              name: updatedUser.name,
              email: updatedUser.email
          }
      }
      const result = await userCollection.updateOne(filter, updatedDoc, options);
      res.send(result);
    });

    //Delete a user from database
    app.delete("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

// app.get('/', (req, res) =>{
//     res.send("Running node server");
// })

app.listen(port, () => {
  console.log("Server running.");
});
