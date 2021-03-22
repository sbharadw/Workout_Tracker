# Workout_Tracker

<b>Deployed Link:</b> https://arcane-ocean-11718.herokuapp.com/

## User Story

* As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Business Context

A consumer will reach their fitness goals more quickly when they track their workout progress.

When the user loads the page, they are given the option to create a new workout or continue with their last workout.

The user can:

  * Add exercises to the most recent workout plan.

  * Add new exercises to a new workout plan.

  * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

  * View the total duration of each workout from the past seven workouts on the `stats` page.

## Installation

Clone this repository to your local machine.

Run npm install to install dependencies required for this project.

Run node server.js to start the application.

Usage
Create a new workout or add to an existing workout.

Choose workout type from resistance or cardio.

Fill out exercise details and add it to ongoing workout or mark it complete.

View your progress over time on the dashboard and current stats on the homepage.

## Technology

1. MongoDB :

MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.

MongoDB is a document database, which means it stores data in JSON-like documents.

2. Mongoose :

MongoDB object modeling for node.js.

Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more.

3. Express.js :

Web Applications : Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

APIs : With a myriad of HTTP utility methods and middleware, creating a robust API is quick and easy.

4. Node.js :

Node.js is an open-source and cross-platform JavaScript runtime environment.

A Node.js app is run in a single process, without creating a new thread for every request.

## Features

NoSQL Database MongoDB is used to create database for this application.

Express server is used to handle routing.

Mongoose is used to create model schema.

User can track workout progress by different charts on dashboard.

Application is deployed to Heroku and MongoDB database is connected via MongoDB Atlas.

