import React, { useState } from 'react'
import useCurrencyInfo from '../hooks/useCurrencyInfo'
import { InputBox } from '../components'

const CurrencyConverter = () => {
    const [amount, setAmount] = useState()
    const [fromCurrency, setFromCurrency] = useState("usd")
    const [toCurrency, setToCurrency] = useState("")
    const [ConvertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(fromCurrency)
    const CurrencyOptions = Object.keys(currencyInfo)

    const swap = () => {
        setToCurrency(fromCurrency)
        setFromCurrency(toCurrency)
        setAmount(ConvertedAmount)
        setConvertedAmount(amount)
    }

    const convertAmount = () => {
        setConvertedAmount(amount * currencyInfo[toCurrency])
    }

  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convertAmount();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                onAmountChange={(value) => setAmount(value)}
                                onCurrencyChange={(value) => setFromCurrency(value)}
                                currencyOptions={CurrencyOptions}
                                selectCurrency={fromCurrency}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={ConvertedAmount}
                                onCurrencyChange={(value) => setToCurrency(value)}
                                currencyOptions={CurrencyOptions}
                                selectCurrency={toCurrency}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default CurrencyConverter