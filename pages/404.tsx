import '@/public/styles/globals.css';
import React from 'react';
import Link from 'next/link';
import { TbError404 } from 'react-icons/tb';
import { Layout } from '@/common/components';

const Custom404 = () => {
	return (
		<Layout>
			<div className="flex items-center justify-center ">
				<div className=" p-8 rounded-lg text-center">
					<TbError404 className="text-6xl mb-4" />
					<h1 className="text-2xl font-bold mb-4">
						Página no encontrada o ya no existe 🙂
					</h1>
					<p className="mb-4">Siento los inconvenientes que esto le pueda causar.</p>
					<Link href="/">
						<p className="text-lightGreen hover:underline">
							Volver a la página principal
						</p>
					</Link>
				</div>
			</div>
		</Layout>
	);
};

export default Custom404;
