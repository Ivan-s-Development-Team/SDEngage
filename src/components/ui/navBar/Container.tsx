'use client';

import React from 'react';
import { useState } from 'react';


import {

  Bars3Icon,

} from '@heroicons/react/24/outline'




export default function Container({ children }: { children: React.ReactNode }) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    

	return (
		<nav
			className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			aria-label="Global">
                
			{children}
            <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

			{/*peper.Group */}
            

            {/*Dialog*/}
            
     	</nav>
	);
}
