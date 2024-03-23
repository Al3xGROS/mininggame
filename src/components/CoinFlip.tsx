'use client'

import React, { useState } from 'react';

const CoinFlip = ({onFlipResult}: {onFlipResult: any}) => {
    const [isFlipping, setFlipping] = useState(false)
    const [result, setResult] = useState<'You' | 'HM' | null>(null)

    const handleFlip = () => {
        if (!isFlipping) {
            setFlipping(true)
            setResult(null)

            setTimeout(() => {
                const randomResult = Math.random() < 0.5 ? 'You' : 'HM'
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
