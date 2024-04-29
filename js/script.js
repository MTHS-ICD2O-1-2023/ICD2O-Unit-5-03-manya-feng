// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: Apr 2024
// This file contains the JS functions for index.html

/**
 * This function is check what kind of movie the users can watch.
 */

function myButtonClicked() {
// input
  const usersAges = parseInt(document.getElementById("types-movie").value)

  // process
  if (usersAges == typesMovie) {
    // output
  if (usersAges >= 17) {
    console.log("You can see an R movie alone.");
  } else if(age >= 13) {
    console.log("You can see a PG-13 movie alone.");
  } else if(age >= 5) {
    console.log("You can see a G or PG movie alone.");
  } else {
    console.log("Uh. You're too young for most things.");
  }
  console.log("Thanks for verifying your age!");
  }
}