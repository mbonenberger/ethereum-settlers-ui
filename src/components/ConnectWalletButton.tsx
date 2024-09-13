import { Text, Box, Image, Button, VStack } from "@chakra-ui/react"
import { useConnectModal } from "@rainbow-me/rainbowkit"

import config from "../../public/data/config.json"

export default function ConnectWalletButton() {
    const { openConnectModal } = useConnectModal()

    return (
        <VStack gap={0}>
            <Button
                minH="60px"
                maxW="300px"
                w="100%"
                py={3}
                px={8}
                variant="ConnectWalletButton"
                fontSize="2xl"
                borderRadius="full"
                h={"fit-content"}
                whiteSpace="normal"
                textAlign="center"
                onClick={openConnectModal}
                fontWeight={"extrabold"}
            >
                <VStack gap={1}>
                    <Text>Connect wallet</Text>
                </VStack>
            </Button>
        </VStack>
    )
}
