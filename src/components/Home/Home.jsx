import React from 'react'
import { Link } from 'react-router-dom';

import Card from '../Card/Card';
import ExampleComponen from '../ExampleComponen/ExampleComponen';
import Projects from '../Projects/Projects';
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-7xl ">
                            Sankalp Barriar
                            <span className="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-2">
                                <ExampleComponen />
                            </span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75 animate-bounce w-50 h-10 ..."
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download CV
                        </Link>
                    </div>
                </div>
                
                <div class="flex space-x-16 my-14">
  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 1" />
  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80480f8a-69ad-4c30-88ba-f4e7ee08fc51?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 2" />
  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ae217f1-b695-4661-bd3d-6440eebc2c5c?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 4" />
  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/515313ac-7ec9-4c6e-95db-80dac2f8b960?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 6" />
  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c513fc32-3ab9-4cca-911e-0b2642ac7206?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 7" />
  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5731a5a7-689f-49ae-abf1-6e6dc00c2043?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-none" alt="Image 8" />
        
</div>
                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="src/assets/profile-pic-2.png" alt="profile-pic" />
                </div>
            </aside>
            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium hover:underline transition duration-300 sm:font-extrabold">Projects</h1>
            <Card />

            
        </div>
    );
}


