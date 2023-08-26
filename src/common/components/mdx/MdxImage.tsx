interface MdxImageProps {
	src: string;
	alt: string;
}

const MdxImage = ({ src, alt }: MdxImageProps) => {
	return (
		<div className="flex justify-center my-2 bg-dark/60 rounded">
			<img src={src} alt={alt} className="w-2/3" />
		</div>
	);
};

export default MdxImage;
