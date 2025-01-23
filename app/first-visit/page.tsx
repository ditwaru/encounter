import dynamic from "next/dynamic";

const Section = dynamic(() => import("@/components/Section").then(mod => mod.Section));

export default function FirstVisit() {
    return (
        <main className="px-10 pb-4 max-w-4xl mx-auto flex flex-col justify-center min-h-body">
            <Section className="flex flex-col gap-2 py-4 text-white text-xl">
                <div className="bg-gradient-to-b from-rose-800 to-orange-100 fixed top-0 left-0 right-0 bottom-0 -z-10" />
                <p>*Plan Your Visit to Encounter Church Studios*</p>
                <p>We are &ldquo;definitely not Church as usual&rdquo;</p>
                <p>At Encounter we&apos;re:</p>
                <ul>
                    <li>✅Meeting with God</li>
                    <li>✅Administering Grace</li>
                    <li>✅Platforming Purpose</li>
                </ul>
                <p>So if you&apos;re looking for a real and raw Worship Encounter, then &ldquo;this is home&rdquo; for you.</p>
                <p>Bring the entire clan because Da Kidz Spot is open and ready to make faith fun.</p> 
                <p>Oh, and don&apos;t worry about coffee and parking, we have lots for you!</p>
                <p>We can&apos;t wait to see you!</p>
            </Section>
            <Section>
                <div className="w-full h-100 bg-white p-4 overflow-auto border rounded-md">
                    <h2 className="text-2xl font-bold">Plan your visit</h2>
                    <p className="text-sm font-bold">Let us know when you are coming.</p>
                    <p className="text-sm font-bold">[Sun 10:15AM or Tue 7:15PM]</p>
                    <p className="text-sm font-bold">We can&apos;t wait to meet you!</p>
                    <form className="flex flex-col gap-2">
                        <div className="flex flex-col">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" className="px-2 border border-zinc-200" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="when">When are you coming?</label>
                            <input type="text" name="when" className="px-2 border border-zinc-200" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" className="px-2 border border-zinc-200" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone" className="px-2 border border-zinc-200" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="guests">Name(s) of your guest(s) and age(s):</label>
                            <textarea name="guests" className="px-2 border border-zinc-200" />
                        </div>
                        <button type="submit" className="text-white bg-zinc-800 p-2">Submit</button>
                    </form>
                </div>
            </Section>
        </main>
    )
}