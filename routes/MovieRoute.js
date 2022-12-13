import express from "express"
let router=express.Router()

import {createMovie,deleteMovie,updateMovie,getAllMovies,getMoviesByQueries,getSingleMovie} from "../controllers/MovieController.js"

import {isAdmin,auth} from "../middleware/auth.js"

router.route("/").post(auth,isAdmin,createMovie)
router.route("/getAllMovies").get(auth,isAdmin,getAllMovies)
router.route("/getMovieByQuery").get(auth,getMoviesByQueries)
router.route("/:movieId").delete(auth,isAdmin,deleteMovie).patch(auth,isAdmin,updateMovie).get(auth,getSingleMovie)


export default router
