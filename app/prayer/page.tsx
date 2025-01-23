import dynamic from "next/dynamic";
import Image from "next/image";
const Section = dynamic(() => import("@/components/Section").then(mod => mod.Section));

export default function Prayer() {
    return (
    <Section className="h-body flex justify-center items-center">
        <Image
            style={{objectFit: 'cover'}}
            className="-z-10"
            src="/pictures/durham.webp"
            alt="Durham"
            fill
         />
         <form className="bg-white max-h-body md:w-72 mx-10 p-5 flex flex-col gap-2 bg-gradient-to-b from-rose-800 to-orange-200">
            <h1 className="text-2xl font-bold text-white">Prayer Request</h1>
            <input type="text" placeholder="Name" className="p-3 border-2 border-zinc-800"/>
            <input type="text" placeholder="Email" className="p-3 border-2 border-zinc-800" />
            <textarea placeholder="Prayer Request" className="p-3 border-2 border-zinc-800 w-full" />
            <button type='submit' className="bg-rose-800 w-20 self-center text-white font-bold">Submit</button>
         </form>
    </Section>
    )
}