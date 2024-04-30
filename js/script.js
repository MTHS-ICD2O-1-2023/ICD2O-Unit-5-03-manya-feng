// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: Apr 2024
// This file contains the JS functions for index.html
"use strict"

function calculate() {
  const age = parseInt(document.getElementById("age").value)

if (age >= 17) {
  document.getElementById("answer").innerHTML =
    "You can see an R movie alone."
} else if(age >= 13) {
  document.getElementById("answer").innerHTML =
    "You can see a PG-13 movie alone."
} else if(age >= 5) {
  document.getElementById("answer").innerHTML =
    "You can see a G or PG movie alone."
} else {
  document.getElementById("answer").innerHTML =
    "Uh. You're too young for most things."
  }
  console.log("Thanks for verifying your age!");
}