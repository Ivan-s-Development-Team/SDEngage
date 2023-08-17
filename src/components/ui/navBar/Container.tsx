'use client';

import React from 'react';
import { useState } from 'react';



export default function Container({ children }: { children: React.ReactNode }) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    

	return (
		<nav
			className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			aria-label="Global">
			{children}

			{/*peper.Group */}
        

            {/*Dialog*/}
           
            	</nav>
	);
}
