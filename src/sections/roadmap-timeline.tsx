
import { Timeline } from "@/components/common/timeline";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


// Update Roadmap
export function RoadmapTimeline() {
    const data = [
        {
            content: (
                <div key="roadmap-0">
                    <div className=" w-full h-66 md:h-72 lg:h-90 bg-white relative border border-edge">
                        <Image fill src="/assets/thumbnail.webp" className=" object-cover object-top border border-white/10" quality={100} alt="Culio Dashboard Design" />
                    </div>
                    <h3 className="text-xl tracking-tight text-left mt-4 font-medium font-sans">
                        Culio Dashboard — UX & UI Design Complete
                    </h3>
                    <h4 className=" mt-2 mb-4 text-sm font-normal text-muted-foreground">
                        We&apos;ve wrapped up the full UX and UI design for the Culio Dashboard — your new command center for managing diners, orders, reservations, campaigns, and more, all from one clean, intuitive interface.
                    </h4>
                    <h4 className="text-sm font-normal text-muted-foreground pb-4">
                        From real-time revenue charts and top-diner leaderboards to integrated feedback and team management, every pixel has been crafted to give restaurant owners instant clarity and total control. Engineering kicks off next.
                    </h4>
                    <Link href="/">
                        <Button>Join Waitlist</Button>
                    </Link>
                </div>
            ),
        },
        {
            content: (
                <div key="roadmap-1">
                    <div className=" w-full h-66 md:h-72 lg:h-90 bg-white relative border border-edge">
                        <Image fill src="/assets/roadmap-1.png" className=" object-contain object-top-left md:object-top border border-white/10" quality={100} alt="Changelog latest" />
                    </div>
                    <h3 className="text-xl tracking-tight text-left mt-4 font-medium font-sans">
                        Official WhatsApp Broadcast Engine Live
                    </h3>
                    <h4 className=" mt-2 mb-4 text-sm font-normal text-muted-foreground">
                        We’ve officially moved beyond the limitations of standard SMS. Our native WhatsApp Business API integration is now live, allowing you to reach your regulars with high-engagement media where they actually hang out.
                    </h4>
                    <h4 className="text-sm font-normal text-muted-foreground pb-4">
                        Start sending high-resolution images of your weekend specials, video promos for new menu items, and personalized birthday rewards with guaranteed delivery and industry-leading open rates.
                    </h4>
                    <Link href="/">
                        <Button>Join Waitlist</Button>
                    </Link>
                </div>
            ),
        },
        {
            content: (
                <div key="roadmap-2">
                    <div className=" w-full h-66 md:h-72 lg:h-90 bg-white relative border border-edge">
                        <Image fill src="/assets/roadmap-2.png" className=" object-contain" quality={100} alt="Changelog 1" />
                    </div>
                    <h3 className="text-xl tracking-tight text-left mt-4 font-medium font-sans">
                        Engineering the "Chat-to-Cart" Checkout
                    </h3>
                    <h4 className=" mt-2 mb-4 text-sm font-normal text-muted-foreground">
                        We’re currently in the lab building Culio’s most anticipated feature: Native WhatsApp Ordering. We’re removing every bit of friction by allowing diners to browse, select, and pay without ever leaving the chat interface.
                    </h4>
                    <h4 className="text-sm font-normal text-muted-foreground  pb-4">
                        We are currently stress-testing our Paystack & Flutterwave bridge to ensure instant MoMo and Card payments are as secure as they are seamless. No apps, no external links—just pure, automated growth.
                    </h4>
                    <Link href="/">
                        <Button>Join Waitlist</Button>
                    </Link>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full relative overflow-clip pb-20">
            <Timeline data={data} />
        </div>
    );
}