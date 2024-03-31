'use client'

import React, { useState } from 'react';

const CoinFlip = ({onFlipResult, difficulty}: {onFlipResult: any, difficulty: any}) => {
    const [isFlipping, setFlipping] = useState(false)
    const [result, setResult] = useState<'You' | 'HM' | null>(null)

    const chance = difficulty === 1 ? 0.4 : difficulty === 2 ? 0.25 : 0.5

    const handleFlip = () => {
        if (!isFlipping) {
            setFlipping(true)
            setResult(null)

            setTimeout(() => {
                const randomResult = Math.random() < difficulty ? 'You' : 'HM'
                setResult(randomResult)
                setFlipping(false)
                onFlipResult(randomResult === 'You')
            }, 1500)
        }
    }

    return (
        <div
            className={`cursor-pointer ${isFlipping ? 'flipping' : ''}`}
            onClick={handleFlip}
        >
            <div className={`coin-flip-animation ${isFlipping ? 'flipping' : ''}`}>
                {result && <p className="text-xl font-bold">{result}</p>}
            </div>
        </div>
    )
}

export default CoinFlip
