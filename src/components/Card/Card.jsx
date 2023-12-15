import React from 'react'

function Card() {
  return (
    <div class="grid-cols-1 sm:grid md:grid-cols-4 ">
    <div
      class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
      <a href="#!">
        <img
          class="rounded-t-lg"
          src="src/assets/proj1.png"
          alt="Skyscrapers" />
      </a>
      <div class="p-6">
        <h5
          class="mb-2 text-xl font-bold leading-tight text-neutral-900 dark:text-neutral-300">
          Movie Guide
        </h5>
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          This is a Movie guide app which uses OMDb API to fetch the 
          details of particular movie Tech stack- Html,css,js
        </p>
      </div>
      <div
        class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
        <small>Last updated 3 mins ago</small>
      </div>
    </div>
    <div
      class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
      <a href="#!">
        <img
          class="rounded-t-lg"
          src="src/assets/proj2.png"
          alt="Skyscrapers" />
      </a>
      <div class="p-6">
        <h5
          class="mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50 ">
          Recipe App
        </h5>
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          This is a Recipe App which gives the recipe of any dish in
          card format. It uses The Meal APi to fetch the data.Tech stack-Hyml,css,js.
        </p>
      </div>
      <div
        class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
        <small>Last updated 3 mins ago</small> 
      </div>
    </div>
    <div
      class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
      <a href="#!">
        <img
          class="rounded-t-lg"
          src="src/assets/proj3.png"
          alt="Los Angeles Skyscrapers" />
      </a>
      <div class="p-6">
        <h5
          class="mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
          Password Generator
        </h5>
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          This is a basic JS application which generates random password
          based on the choice you opted Tech stack-Html,css,js.
        </p>
      </div>
      <div
        class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
        <small>Last updated 3 mins ago</small>
      </div>
    </div>
    <div
      class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
      <a href="#!">
        <img
          class="rounded-t-lg"
          src="src/assets/proj4.png"
          alt="To-do app" />
      </a>
      <div class="p-6">
        <h5
          class="mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
          To-do App
        </h5>
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Now keep track of your day to day activities with this TO-DO application
          it gives you the functionallity of saving in local localStorage,edit Todo, delete todo,
          toggle completed and many more. Tech stack- React with context API
        </p>
      </div>
      <div
        class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
        <small>Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
    
  )
}

export default Card