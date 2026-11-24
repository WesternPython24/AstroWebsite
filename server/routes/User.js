const express  = require("express")
const User = require("../models/User")
const router = express.Router()

router.get("/getAllUsers", async (req, res) => {
    try {
        const Users = await User.getAllUsers()
        res.send(Users)
    } catch (error) {
        res.status(401).send({ error: error.message })
    }
})

.post("/register", async (req, res) => {
    try{
        const User = await User.register(req.body.username, req.body.passkey, req.body.email)
        console.log(User)
        res.send(User)
    } catch (error) {
        res.status(401).send({ error: error.message })
    }
})

.post("/login", async (req, res) => {
    try{
        const User = await User.login(req.body)
        res.send({ ...User, password: undefined })
    } catch (error) {
        res.status(401).send({ error: error.message })
    }
})

module.exports = router
