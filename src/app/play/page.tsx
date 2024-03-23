"use client"

import React, { useState } from "react"
import { useSearchParams } from "next/navigation"
import CoinFlip from "@/components/CoinFlip"
import ChoiceButtons from "@/components/ChoiceButtons"
import LoseMessage from "@/components/LoseMessage"
import GameInterface from "@/components/GameInterface"

const Play = () => {
    const searchParams = useSearchParams()

    const [win, setWin] = useState(false)
    const [end, setEnd] = useState(false)
    const [coins, setCoins] = useState(0)
    const [money, setMoney] = useState(Number(searchParams.get("money")))
    const rounds = searchParams.get("rounds")
    const [currentRound, setCurrentRound] = useState(1)

    const handleFlipResult = (isWin: boolean) => {
        setWin(isWin)
        setCoins(coins + 1)
        if (currentRound === Number(rounds)) {
            setEnd(true)
        } else {
            setCurrentRound(currentRound + 1)
        }
    }
    return (
        <div className="h-screen bg-red-100 flex flex-col items-center justify-center">
            {!end ? (
                <>
                    <CoinFlip onFlipResult={handleFlipResult} />
                    {win ? (
                        <div className="mt-8">
                            <ChoiceButtons />
                        </div>
                    ) : (
                        <div className="mt-8">
                            <LoseMessage />
                        </div>
                    )}
                </>
            ) : (
                <>
                    {/* END MESSAGE */}
                </>
            )}
            <GameInterface coins={coins} money={money} rounds={rounds} currentRound={currentRound} />
        </div>
    )
}

export default Play