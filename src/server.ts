//
import express from "express";
import dotenv from 'dotenv'
import mustache from 'mustache-express'

// path
import path from "path";

// routes
import mainRoutes from './routes/index'

// env
dotenv.config();

//
const server = express();

// engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// public
server.use(express.static(path.join(__dirname, '../public')));

//
server.use(mainRoutes)
server.use((req, res) => {
  res.render('pages/404');
})

// server
server.listen(process.env.PORT)