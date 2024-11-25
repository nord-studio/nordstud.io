export default function BlogPage() {
    return (
        <>
            <main className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col gap-8 px-2 py-8 w-full">
                    <div className="flex flex-row gap-2 sm:gap-4">
                        <div className="flex flex-col items-start gap-1">
                            <h1 className="text-4xl font-bold font-display">
                                Blog
                            </h1>
                            <p>
                                All blog posts about anything related to Nord,
                                projects, or tech in general.
                            </p>
                        </div>
                    </div>
                    <div className="my-16 px-2 flex flex-col w-full items-center">
                        <h2 className="text-xl font-bold">
                            Nothing here yet. Check back later for updates!
                        </h2>
                    </div>
                </div>
            </main>
        </>
    );
}
