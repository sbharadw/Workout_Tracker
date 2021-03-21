// Import express router
const router = require("express").Router();

// Import fitness model
const db = require("../models");

// GET Request for getting all workouts
router.get("/api/workouts", (req, res) => {
	db.Fitness.find()
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

// GET request
router.get("/api/workouts/range", (req, res) => {
	db.Fitness.find()
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

//get last workout
//Limit workouts to 7 and grabbing total sum of duration for workouts along with data in collection.

  router.get("/api/workouts/", (req, res) => {
    db.Fitness.aggregate([
      {
        $addFields: {
          totalDuration: {$sum: "$exercises.duration"}
        }
      },
    ])
      .then(dbData => {
        console.log(dbData)
        res.json(dbData);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //set up a range for ordering the dashboard.
    //Limiting the number of workouts to 7 and setting up a field for the sum of total duration of workouts.
	router.get("/api/workouts/range", (req, res) => {
        db.Fitness.aggregate([
          {
            $limit: 7
          },
          {
            $addFields: {
              totalDuration: {$sum: "$exercises.duration"}
            }
          },
        ])
          .then(Workouts => {
            res.json(Workouts);
          })
          .catch(err => {
            res.json(err);
          });
      });


// POST workout
router.post("/api/workouts", ({ body }, res) => {
	db.Fitness.create(body)
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

// PUT/Update workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
	db.Fitness.findByIdAndUpdate(params.id, { $push: { exercises: body } })
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});



// Export API routes
module.exports = router;