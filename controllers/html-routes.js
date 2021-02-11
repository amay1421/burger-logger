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


router.put("/devour", function(req, res) {  
    console.log("condition", condition);
  
    burgers.update({
    //   devour: req.body.sleepy
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;
