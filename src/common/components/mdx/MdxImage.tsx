interface MdxImageProps {
	src: string;
	alt: string;
}

const MdxImage = ({ src, alt }: MdxImageProps) => {
	return (
		<div className="flex justify-center m-4">
			<img src={src} alt={alt} className="border-r-2" />
		</div>
	);
};

export default MdxImage;
