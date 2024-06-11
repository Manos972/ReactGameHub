import bullsEyes from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbUp from "../assets/thumbs-up.webp";
import {Image, ImageProps} from "@chakra-ui/react";

interface Props {
	rating: number;
}

function Emoji ( {rating}: Props ) {
	if ( 3 > rating ) return null;

	const emojiMap: { [key: number]: ImageProps } = {
		3: {src: meh, alt: "meh", boxSize: "25px"},
		4: {src: bullsEyes, alt: "Recomand", boxSize: "35px"},
		5: {src: thumbUp, alt: "Exceptional", boxSize: "25px"},
	};

	return (
		<Image {...emojiMap[rating]} />
	);
}

export default Emoji;