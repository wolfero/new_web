'use client';

import { DetailedHTMLProps, HTMLAttributes, useRef, useState } from 'react';

const Pre = ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => {
	const textInput = useRef<HTMLDivElement>(null);
	const [copied, setCopied] = useState(false);

	const onCopy = () => {
		setCopied(!copied);
		navigator.clipboard.writeText(textInput.current?.textContent as string);
		setTimeout(() => {
			setCopied(copied);
		}, 2000);
	};

	return (
		<div ref={textInput} className="flex flex-col bg-dark/60 rounded p-4">
			<pre className="overflow-x-auto">{children}</pre>
			<button
				aria-label="Copy code"
				type="button"
				className={`self-end mt-2 h-8 w-8 rounded border-2 p-1 ${
					copied ? 'border-red focus:border-red focus:outline-none' : 'border-white'
				}`}
				onClick={onCopy}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					stroke="currentColor"
					fill="none"
					className={copied ? 'text-red' : 'text-white'}
				>
					{copied ? (
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
						/>
					) : (
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
						/>
					)}
				</svg>
			</button>
		</div>
	);
};

export default Pre;
