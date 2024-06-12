import {Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure} from "@chakra-ui/react";
import {Games} from "../hooks/useGames.ts";

export interface PropsGame {
	game: Games;
}

function GameModal ( {game}: PropsGame ) {

	const {isOpen, onOpen, onClose} = useDisclosure();

	return (
		<>
			<Button onClick={onOpen}>Open Modal</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay/>
				<ModalContent>
					<ModalHeader>{game.name}</ModalHeader>
					<ModalCloseButton/>
					<ModalBody>

					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant="ghost">Secondary Action</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default GameModal;