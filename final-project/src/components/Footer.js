import React, { createContext, useState } from "react";
import {Nav} from 'flowbite-react';
import {Link} from 'react-router-dom';

const Footer =() => {
    return (
        <>
            <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
                <div class="sm:flex sm:items-center sm:justify-between">
                <a href="#" class="flex items-center mb-4 sm:mb-0">
                    <img src="https://carikerja.work/asset/img/logo/carikerja.png" class="mr-3 h-8" alt="Flowbite Logo" />
                </a>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" class="hover:underline">CariKerja™</a>. All Rights Reserved.
                </span>
            </footer>
        </>
    )
}

export default Footer