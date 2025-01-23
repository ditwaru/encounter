import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
const Section = dynamic(() => import("@/components/Section").then(mod => mod.Section));

export default function Home() {
  return (
    <div className="w-full">
      <main className="flex flex-col items-center">
        <Section className="h-80">
          <Image
            style={{objectFit: 'cover'}}
            className="-z-10"
            src="/pictures/worship.webp"
            alt="Worship"
            fill
            priority
          />
          <header className="text-white flex flex-col justify-center items-center h-full">
            <h1 className="text-4xl uppercase font-bold">Encounter</h1>
            <h2 className="text-2xl tracking-widest uppercase font-bold">Nation</h2>
            <h3 className="text-lg">Definitely not church as usual</h3>
          </header>
        </Section>
        <Section className="h-72 md:py-40 lg:py-80">
          <Image
              style={{objectPosition: '50% 12%', objectFit: 'cover'}}
              className="-z-10"
              src="/pictures/this-is-home.webp"
              alt="This is home"
              fill
          />
          <div className="flex flex-col justify-center align-center h-full space-y-2">
            <button className="p-1 bg-orange-100 max-w-72 self-center hover:bg-zinc-800 hover:text-orange-100 hover:outline-0">
              <a className="font-bold uppercase" href='https://www.churchofficegiving.com/App/Form/aad0d564-e23c-4c4b-9e02-ae0a4afb90fa'>First Fruits Offering</a>
            </button>
            <button className="p-1 bg-zinc-800 max-w-72 self-center px-4 text-orange-100 hover:bg-orange-100 hover:text-zinc-800">
              <Link href='/first-visit' className="uppercase tracking-tighter text-xs">Plan Your first visit</Link>
            </button>
            <button className="p-1 bg-green-400 max-w-72 self-center text-white hover:bg-white hover:text-green-400">
              <a href='/fast' className="uppercase tracking-tighter font-bold text-sm px-4">Fasting & prayer guide</a>
            </button>
          </div>
        </Section>
        <Section className="flex flex-col items-center bg-stone-100 p-10 text-center gap-4">
          <div className="max-w-4xl mx-auto">
            <div>
              <p className="uppercase">Be a part of our studio audience</p>
              <p className="uppercase">Sunday - 10:15AM</p>
              <p className="uppercase">Tuesday - 7:15PM</p>
              <p className="text-xs py-2"><em>Join us LIVE in person or online</em></p>
            </div>
            <p>Encounter Church is a multi-site Church located in NYC and Durham, NC but our reach is global .</p>
            <p>Encounter Nation is our online platform which allows us to reach people from all walks of life beyond the walls of our physical locations.</p>
            <p>At Encounter we&apos;re meeting with God, administering grace and platforming purpose. We believe nothing is greater than having an authentic encounter with Jesus. We&apos;re definitely not church as usual! No matter who you are, how you look, where you&apos;ve been or what you&apos;ve done; there&apos;s a place at Encounter for you.</p>
            <p>
              Your life&apos;s purpose can still be reached.
              We are <strong>ONE</strong> Church reaching a sea of souls.
            </p>
          </div>
        </Section>
        <Section className="h-72 md:py-40 lg:py-80">
          <Image
            style={{objectPosition: "50% 28%", objectFit: 'cover'}}
            src="/pictures/family.webp"
            alt="PJ and family"
            fill
          />
        </Section>
        <Section className="p-6 flex flex-col gap-4 max-w-4xl mx-auto">
          <h2 className="text-3xl tracking-wide">Meet PJ</h2>
          <p className="leading-8">PJ is a Christian contemporary worship leader and Pastor. After battling cancer in 2007, and having experienced the healing power of God in his life, PJ leads the vision &ldquo;taking the Worship Encounter to the World&rdquo;. He shares his life withholding nothing. From dealing with lust as a teen, riches to rags, cancer to divorce; he shares it all. PJ believes that no matter where you&apos;ve been or what you&apos;ve done, God&apos;s grace can reach you right where you are and can turn everything around. His impact through his music, books and preaching impacts many in a way that is real. PJ dares to engage people in the presence of God through worship and to lead our generation back to the cross. From the heart of New York City, his story has traveled far across many countries via social media and television; but now more than ever his burden for our country is beyond anything. PJ is a husband, father of six, musician, and Pastor.</p>
        </Section>
        <Section className="h-72 md:py-40 lg:py-80">
        <Image
          style={{objectFit: 'cover'}}
          className="object-top"
          src="/pictures/guitar.webp"
          alt="Pastor Josh"
          fill
          />
        </Section>
        <Section className="flex flex-col justify-center items-center
        bg-gradient-to-b from-rose-800 to-orange-100 py-2 gap-2">
          <p className="text-white font-bold text-xl text-center">
            4300 GARRETT RD,
          </p>
          <p className="text-white font-bold text-xl text-center">DURHAM NC 27707</p>
          <p className="text-white font-bold text-xl text-center">+</p>
          <p className="text-white font-bold text-xl text-center">ONLINE:</p>
          <div className="flex flex-col gap-2">
            <button className="bg-zinc-800 text-orange-100 w-32 py-2 px-4 text-sm hover:text-zinc-800 hover:outline hover:bg-orange-100 hover:outline-1 hover:outline-zinc-800">
              <a href='https://www.facebook.com/encounternationlive/'>Facebook Live</a>
            </button>
            <button className="bg-zinc-800 text-orange-100 w-32 py-2 px-4 text-sm hover:text-zinc-800 hover:outline hover:bg-orange-100 hover:outline-1 hover:outline-zinc-800">
              <a href='https://www.youtube.com/channel/UCYd8XottPWdfOr8uUxH2sZw'>Youtube Live</a>
            </button>
          </div>
        </Section>
      </main>
    </div>
  );
}
