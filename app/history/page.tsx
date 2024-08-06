import Image from "next/image";
import Link from "next/link";

export default function HistoryPage() {
    return (
        <>
            <main className="flex flex-col items-center justify-center w-full h-full">
                <div className="flex flex-col gap-8 px-2 py-8 w-full h-full">
                    <div className="flex flex-col gap-32 items-center h-full">
                        <div className="grid grid-cols-2 grid-flow-row gap-16">
                            <div className="flex flex-col gap-4 items-start h-full">
                                <h1 className="text-4xl font-serif font-bold">
                                    Chapter 01: "Just a name"
                                </h1>
                                <div className="flex flex-col gap-4 justify-between items-start flex-1">
                                    <p className="text-lg">
                                        4 years ago, Nord Studio was publicized
                                        with the intent to build new solutions
                                        for critial applications that we use
                                        everyday, such as Campsite, a
                                        communication platform.
                                        <br /> <br />
                                        However, it didn't start out like this,
                                        in fact, "Nord" started out as a name I{" "}
                                        <Link
                                            href="https://tygr.dev"
                                            className="text-blue-500 dark:text-blue-400"
                                            target="_blank"
                                        >
                                            (tygrdev)
                                        </Link>{" "}
                                        was going to use to publish my own
                                        projects under.
                                        <br /> <br />I want to take a trip down
                                        memory lane, and take a peek to how we
                                        got to where we are today...
                                    </p>
                                    <span className="text-neutral-500 dark:text-neutral-400">
                                        Figure 1: The book that sparked the idea
                                        --&gt;
                                    </span>
                                </div>
                            </div>

                            <Image
                                src="/history/book-front.png"
                                alt="Book Front"
                                width={600}
                                height={800}
                            />
                        </div>
                        <div className="grid grid-cols-2 grid-flow-row gap-16">
                            <Image
                                src="/history/logo-design-1.png"
                                alt="Logo Designing"
                                width={600}
                                height={800}
                            />
                            <div className="flex flex-col gap-4 items-start h-full">
                                <div className="flex flex-col gap-4 justify-between items-start flex-1">
                                    <div className="flex flex-col gap-6">
                                        <p className="text-lg">
                                            During the start of a normal day at
                                            school, all students would head to
                                            their tutors classroom before the
                                            first class started. One morning, I
                                            was super early and class didn't
                                            start for another 30 minutes.
                                            <br /> <br />
                                            While trying to think of something
                                            to do, I came up with the idea of
                                            creating my own brand to represent
                                            all the projects I've been working
                                            on at home. After googling "words
                                            that mean going up", I came across
                                            one specifc word that peaked my
                                            interest:
                                        </p>
                                        <div className="flex flex-col gap-0 pl-4 py-4">
                                            <h1 className="text-3xl font-bold font-serif">
                                                nord [nɔrd]
                                            </h1>
                                            <span className="text-lg text-neutral-500 dark:text-neutral-400">
                                                noun
                                            </span>
                                            <p>
                                                the direction along Earth's
                                                surface towards the place where
                                                the imaginary rotational axis of
                                                the Earth intersects the surface
                                                of the Earth.
                                            </p>
                                        </div>
                                        <p className="text-lg">
                                            I loved it. The word "nord" means
                                            "true north", which can be
                                            symbolised as "going up". <br />
                                            <br />
                                            However, a good name needs a good
                                            logo. I started off with just the
                                            letter "N", and started to play
                                            around with it. The result of which
                                            you can see in figure 2.
                                        </p>
                                    </div>
                                    <span className="text-neutral-500 dark:text-neutral-400">
                                        &lt;-- Figure 2: Coming up with logo
                                        designs
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 grid-flow-row gap-16">
                            <div className="flex flex-col gap-4 items-start h-full">
                                <div className="flex flex-col gap-4 justify-between items-start flex-1">
                                    <p className="text-lg">
                                        Although I just couldn't get it right,
                                        throughout the day I tended to my
                                        notebook trying everything I could to
                                        make something that fit. A few pages
                                        ended up in the trash due to my
                                        frustration.
                                        <br /> <br />
                                        But during my math class, I took one of
                                        my original drawings and tried to expand
                                        on it. Soon enough, I had something
                                        going!
                                        <br /> <br />
                                        Page after page of refining, I finally
                                        got a design that I was very pleased
                                        with.
                                    </p>
                                    <span className="text-neutral-500 dark:text-neutral-400">
                                        Figure 3: A few more logo designs with
                                        very similar styles --&gt;
                                    </span>
                                </div>
                            </div>

                            <Image
                                src="/history/logo-design-3.png"
                                alt="Book Front"
                                width={600}
                                height={800}
                            />
                        </div>
                        <div className="grid grid-cols-2 grid-flow-row gap-16">
                            <Image
                                src="/history/logo-vote.png"
                                alt="Logo Designing"
                                width={600}
                                height={800}
                            />
                            <div className="flex flex-col gap-4 items-start h-full">
                                <div className="flex flex-col gap-4 justify-between items-start flex-1">
                                    <p className="text-lg">
                                        I took that same design and tweaked it
                                        in many different ways to determine if I
                                        was able to create something better.{" "}
                                        <br /> <br /> I also numbered them, and
                                        went around the school asking teachers
                                        and students which one they like the
                                        most. Number #4 came first, then #1, #2
                                        and #3 after. <br /> <br />
                                        As my fellow classmates displayed their
                                        excitement about Nord,{" "}
                                        <span className="text-neutral-500 dark:text-neutral-400>">
                                            (and kept calling me the next "bill
                                            gates" or "the guy who made apple")
                                        </span>
                                        , my own excitement grew with this new
                                        logo. It was at this point when I
                                        figured that I didn't want to keep Nord
                                        as just a name. I wanted something more.
                                    </p>
                                    <span className="text-neutral-500 dark:text-neutral-400">
                                        &lt;-- Figure 4: Refining the logo
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
