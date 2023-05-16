# SVG Generator <a name="svg generator"></a> [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a command line application that allows the user to generate an SVG file by answering a series of prompts based on the criteria they would like to use for the SVG. The user choose a circle, square, or triangle for their background, the color for that shape, and a three character piece of text to place inside the shape.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [MIT](#mit)
- [Tests](#tests)
- [Example](#example)

## Installation

To install this project, first make sure node.js is installed using `node -v`. If node is installed, pull the code onto your local machine. Once you have the files on your machine, run the command `node index.js`.

## Usage

Once the program is running, the command line will provide a series of prompts to the user. First, you will be prompted to enter 3 characters of text. If 3 characters have not been entered, the program will throw an error and the user will be prompted for the correct input. Then, the user will choose from a list of 3 shapes (circle, triangle, square) to render, and finally the color the shape is to be rendered with.

## MIT

[License Link](https://opensource.org/licenses/MIT)

## Tests

[Click here to view test file](./lib/shapes.test.js)

## Example

![App walkthrough video](./examples/SVG_Generator_Walkthrough.mp4)
