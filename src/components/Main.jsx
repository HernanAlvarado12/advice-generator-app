import { useEffect, useState } from "react"
import { Title } from "./Title"
import mobile from "../assets/mobile.svg"
import desktop from "../assets/desktop.svg"
import dice from "../assets/dice.svg"
import { Picture } from "./Picture"

const URL_ROOTER = 'https://api.adviceslip.com/advice'

const Main = () => {
    const [generate, setGenerate] = useState(false)
    const [number, setNumber] = useState(0)
    const [text, setText] = useState("It is easy to sit up and take notice, what's difficult is getting up and taking action")

    useEffect(() => {
        fetch(URL_ROOTER)
            .then(response => response.json())
            .then(json => {
                const { slip: { id, advice } } = json
                setNumber(id)
                setText(advice)
            })
    }, [generate])

    const handleClick = () => {
        setGenerate(!generate)
    }

    return (
        <main className="w-full h-screen flex items-center justify-center bg-blue-200">
            <section className="w-90 mx-auto py-3 px-2 relative rounded-3xl bg-blue-100">
                <Title classTitle="mb-2" number={number} song={text} />
                <Picture classPicture="mt-2 mb-3 block" classImg="w-full mx-auto select-none" mobile={mobile} desktop={desktop} alt="pause icon" breakpoint="600px" />
                <Picture classPicture="w-6 mx-auto flex items-center justify-center aspect-square absolute cursor-pointer -bottom-3 inset-x-0 rounded-full bg-green" mobile={dice} alt="square" onClick={handleClick} />
            </section>
        </main>
    )
}

export { Main }