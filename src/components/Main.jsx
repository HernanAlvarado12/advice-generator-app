import { useEffect, useState } from "react"
import { Title } from "./Title"
import { Picture } from "./Picture"
import mobile from "../assets/mobile.svg"
import desktop from "../assets/desktop.svg"
import dice from "../assets/dice.svg"

const URL_ROOTER = 'https://api.adviceslip.com/advice'

const Main = () => {
    const [generate, setGenerate] = useState(false)
    const [number, setNumber] = useState(0)
    const [text, setText] = useState('')

    useEffect(() => {
        const controller = new AbortController()

        fetch(URL_ROOTER, { signal: controller.signal })
            .then(response => response.json())
            .then(json => {
                const { slip: { id, advice } } = json
                setNumber(id)
                setText(advice)
            }).catch(error => error)

        return () => controller.abort()
    }, [generate])

    const handleClick = () => {
        setGenerate(!generate)
    }

    return (
        <main className="w-full h-screen flex items-center justify-center bg-blue-200">
            <section className="w-90 max-w-4xl mx-auto py-3 px-2 relative rounded-3xl bg-blue-100 ts:py-4.5 ts:px-3">
                <Title classTitle="mb-2" number={number} song={text} />
                <Picture classPicture="mt-2 mb-3 block" classImg="w-full mx-auto select-none" mobile={mobile} desktop={desktop} alt="pause icon" breakpoint="600px" />
                <Picture classPicture="w-6 mx-auto flex items-center justify-center aspect-square absolute cursor-pointer -bottom-3 inset-x-0 rounded-full bg-green" mobile={dice} alt="square" onClick={handleClick} />
            </section>
        </main>
    )
}

export { Main }