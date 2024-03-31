"use client"

import React, { useState } from "react"
import { useSearchParams } from "next/navigation"
import CoinFlip from "@/components/CoinFlip"
import ChoiceButtons from "@/components/ChoiceButtons"
import LoseMessage from "@/components/LoseMessage"
import GameInterface from "@/components/GameInterface"
import EndMessage from "@/components/EndMessage"

const Play = () => {
    const searchParams = useSearchParams()

    const [win, setWin] = useState<boolean | undefined>(undefined)
    const [end, setEnd] = useState(false)
    const [coins, setCoins] = useState(0)
    const [money, setMoney] = useState(Number(searchParams.get("money")))
    const rounds = searchParams.get("rounds")
    const [currentRound, setCurrentRound] = useState(1)
    const difficulty = searchParams.get("difficulty")

    const handleFlipResult = (isWin: boolean) => {
        setWin(isWin)
        setCoins(isWin ? coins + 1 : coins > 0 ? coins - 1 : 0)
        setMoney(isWin ? money : coins > 0 ? money : money - 0.1)
        if (currentRound === Number(rounds)) {
            setEnd(true)
        } else {
            setCurrentRound(currentRound + 1)
        }
    }

    const onChoice = (type: string) => {
        if (type === "keep") {
            setCurrentRound(currentRound + 1)
        } else {
            setCoins(0)
            setMoney(money + (0.9 * coins))
        }
        setWin(undefined)
    }
    return (
        <div className="h-screen bg-red-100 flex flex-col items-center justify-center">
            {!end ? (
                <>
                    <CoinFlip onFlipResult={handleFlipResult} difficulty={difficulty} />
                    {win === undefined ? (
                        <></>
                    ): win ? (
                        <div className="mt-8">
                            <ChoiceButtons onChoice={onChoice} />
                        </div>
                    ) : (
                        <div className="mt-8">
                            <LoseMessage />
                        </div>
                    )}
                </>
            ) : (
                <>
                    <EndMessage />
                </>
            )}
            <GameInterface coins={coins} money={money} rounds={rounds} currentRound={currentRound} />
        </div>
    )
}

export default Play