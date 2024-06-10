import {FaWindows, FaPlaystation, FaApple, FaXbox, FaLinux} from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {Platform} from "../hooks/useGames.tsx";
import {HStack, Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";

interface Props {
	platforms: Platform[];
}

function PlatformIconList ( {platforms}: Props ) {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows, xbox: FaXbox, playstation: FaPlaystation, linux: FaLinux, apple: FaApple, nintendo: SiNintendo, ios: MdPhoneIphone, web: BsGlobe,
	};
	return (
		<HStack margin={1}>
			{
				platforms.map( ( platform ) => (
						<Icon as={iconMap[platform.slug]} color="gray.500"/>
					),
				)
			}

		</HStack>
	);
}

export default PlatformIconList;