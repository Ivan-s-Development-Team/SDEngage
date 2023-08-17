
import { useState } from 'react';
import Link from 'next/link';

const navigation = [
	{ name: 'quejas', href: '#' },
	{ name: 'solicitud', href: '#' },
	{ name: 'ayuda', href: '#' },
	{ name: 'about', href: '#' },
];
type Props = {};

export default function Navigation() {


	return (
		<div className='hidden lg:flex lg:gap-x-12'>
             {navigation.map((item)=>(
                <Link  className="text-sm font-semibold leading-6 text-gray-900" key={item.name} href={item.href} >
                     {item.name}
                </Link>
             ))}
        </div>
	);
}
