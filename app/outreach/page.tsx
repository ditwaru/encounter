import { Section } from "@/components/Section";
import Image from 'next/image'


export default function Outreach () {
    return (
        <Section className="min-h-body relative flex flex-col items-center gap-4 overflow-auto max-w-4xl mx-auto p-10">
            <div className="fixed top-0 bottom-0 left-0 right-0 -z-10">
                <Image
                    className="-z-20"
                    src="/pictures/city.webp"
                    alt="City skyline"
                    fill
                />
            </div>
            <div className="bg-black opacity-50 fixed top-0 bottom-0 left-0 right-0 -z-10" />
            <Image
                src="/pictures/business-hub.webp"
                alt="Business hub"
                width={240}
                height={240}
            />
            <p className="text-white text-xl">The Business Hub is designed
                to help Entrepreneurs to
                develop their ideas, kick start their small businesses and create a
                a mission for their vision as they 
                pursue their purpose. This 
                program is free for everyone and is held on the 1st Monday of every month at 7PM.
            </p>
            <p className="text-white text-xl">
                We believe our children are our greatest investment and their education should be a top priority. As such, every 4th Saturday of each month from 12PM-3PM; we have a team of people available to offer tutoring for the children in our community. This program is free and is available for everyone.
            </p>
            <Image
                src="/pictures/food-drive.webp"
                alt="Food drive"
                width={240}
                height={240}
            />
            <p className="text-white text-xl">
                Food and nutrition is key for our community and as an organization we are poised to being a blessing to those in need. Every 4th Saturday of each month, we take time to give food hampers to members of our community. Lives are being changed because of our generosity.
            </p>
            <Image
                src="/pictures/tutoring.webp"
                alt="Tutoring"
                width={240}
                height={240}
            />
        </Section>
    )
}