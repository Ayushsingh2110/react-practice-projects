import React, { useCallback, useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"

const PasswordGenerator = () => {
    const [length, setLength] = useState(8)
    const [IsNumAllow, setIsNumAllow] = useState(false)
    const [IsCharAllow, setIsCharAllow] = useState(false)
    const [Pass, setPass] = useState("")

    const passwordGenertaor = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz"

        if (IsNumAllow) str += "0123456789"
        if (IsCharAllow) str += "!@#$%&*"

        for (let i = 0; i <= length; i++) {
            const raNum = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(raNum)
        }

        setPass(pass)

    }, [length, IsNumAllow, IsCharAllow, setPass])

    useEffect(() => {
        passwordGenertaor();
    }, [length])

    const passwordRef = useRef(null)
    const copyPassword = () => {

        passwordRef.current?.select()
        window.navigator.clipboard.writeText(Pass)
    }


    return (
        <div className="h-screen w-screen bg-black flex justify-center align-middle">
            <div className="p-5 bg-stone-700 w-fit h-fit rounded-lg my-auto">
                <h1 className="text-4xl text-center text-white">Password generator</h1>
                <div className='flex flex-nowrap border-slate-300 border-2 h-10 w-fit rounded-2xl  bg-zinc-800 mx-auto my-8'>
                    <input ref={passwordRef} className="rounded-2xl outline-none bg-transparent text-white px-3" readOnly type="text" value={Pass} />
                    <p className="text-white p-1 cursor-pointer" onClick={copyPassword}>copy</p>
                </div>
                <div className="flex text-sm gap-x-2 justify-center">
                    <div className="flex item-cneter gap-x-1">
                        <input type="range" min={6} max={100} value={length} className="cursor-pointer"
                            onChange={(e) => { setLength(e.target.value) }} />
                        <label className="text-white">Length: {length}</label>
                    </div>
                    <div>
                        <input type="checkbox" defaultChecked={IsNumAllow}
                            onChange={() => {
                                setIsNumAllow((prev) => !prev)
                            }}
                        />
                        &nbsp;
                        <label className="text-white">Add Numbers</label>
                    </div>
                    <div>
                        <input type="checkbox" defaultChecked={IsCharAllow}
                            onChange={() => {
                                setIsCharAllow((prev) => !prev)
                            }}
                        />
                        &nbsp;
                        <label className="text-white">Add Characters</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordGenerator