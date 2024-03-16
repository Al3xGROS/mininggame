import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const GameRules = () => {
    return (
        <Card className='h-fit border-4 border-stone-100 bg-stone-100 rounded-xl'>
            <CardHeader className='text-center'>
                <CardTitle>Game Rules</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="mb-1">You are the attacker and your goal is to win money during each round.</p>
                <p className="mb-1">A round starts by flipping a coin and finishes when a player crushes the opponent with the tokens he accumulated during the round.</p>
                <p className="mb-1">Everytime the coin is flipped, either you or the opponent gains a token.</p>
                <p className="mb-1">Everytime the opponent gains a token, he immediatly announces it.</p>
                <p>There is 4 cases:</p>
                <p>--- The opponent just gained a token, announces it and you do not have any: the round is finished, the opponent gains money and you lose some.</p>
                <p>--- The opponent just gained a token, announces it but you do have one token: you must spend this token and the round is played with another coin flip.</p>
                <p>--- The opponent just gained a token, announces it but you do have multiple tokens stored in your collection during the round: you must spend one token and you can choose to either continue the round or crush your opponent with all your tokens and win the rounds, win money and make him lose some.</p>
                <p className="mb-1">--- You just gained a token, you can: continue the round and add this token to your collection, or crush your opponent and win the round.</p>
                <p>The game finished when the number of rounds is over or when you lost all your money.</p>
            </CardContent>
        </Card>
    )
}

export default GameRules