import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformsList from "./PlatformsList"
import CriticScore from "./CriticScore"
import getCroppedImage from "../services/CroppedImage"

interface Props{
    game: Game
}
const GameCard = ({game}: Props) => {
  return (
    <Card>
        <Image src={getCroppedImage(game.background_image)}/>
        <CardBody>
            <Heading fontSize={'2xl'}>
                {game.name}
            </Heading>
            <HStack justifyContent="space-between">
            <PlatformsList platforms={game.parent_platforms.map(p => p.platform)}/>
            <CriticScore score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard