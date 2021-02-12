const router = require("express").Router();

const Burger = require("../models/burger")



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


router.get("/devoured/:id", function(req, res) {  
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
  
    Burger.update(
        {devoured: true}, condition, function(data) {
            res.redirect('/');
    });
  });

module.exports = router;
