/**
 * async func luôn luôn return về promise
 */

// async func declaration

async function func1() {}

// async func expression

const func2 = async function () {};

//async arrow function

const func3 = async () => {};

//async method definition in on obj literal

const obj = { async() {} };

// =>>>>>>>>>>>>>>>>>>

async function getNumber() {
  return 1;
}

getNumber().then((n) => console.log(n)); // return promise

//! get api

async function getAllStudents() {
  try {
    const url = 'https://js-post-api.herokuapp.com/api/students';

    const response = await fetch(url); // await promise này, đợi promise này resolve và đưa vào response
    const data = await response.json(); //  sau khi response có data, thì lập tức await response json

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
