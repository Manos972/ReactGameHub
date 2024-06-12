import {Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";

interface Props {
	id: number;
	game: number;
	name: string;
	description: string;
}

interface PropsFetch {
	count: number;
	result: Game[];
}

function GameModal ( {game}: Props ) {

	const {isOpen, onOpen, onClose} = useDisclosure();
	const [ data, setData ] = useState<Props[]>( [] );

	useEffect( () => {
		apiClient
			.get<PropsFetch>( `/games/${game}` )
			.then( ( response ) => {
				setData( response.data );
			} );
	} );
	return (
		<>
			<Button onClick={onOpen}>Show More</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay/>
				<ModalContent>
					<ModalCloseButton/>
					<ModalHeader>{data.name}</ModalHeader>
					<ModalBody maxH="400px" overflow="auto">
						<Text dangerouslySetInnerHTML={{__html: data.description}}></Text>
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