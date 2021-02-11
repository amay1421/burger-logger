const router = require("express").Router();

const Burger = require("../models/burger")


router.get('/hello', function(req, res) {
    res.send('hello')
})

router.post("/create", function(req, res) {

    console.log('This is the post route')
      Burger.create("burger_name", [req.body.burger_name], function(data) {
        res.redirect('/');
      })
})


router.get("/", function(req, res) {

    Burger.all(function(data) {
        res.render("index", { burgers: data });
    })


});

module.exports = router;
