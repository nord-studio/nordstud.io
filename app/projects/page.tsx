export default function ProjectsPage() {
    return (
        <>
            <main className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col gap-8 px-2 py-8 w-full">
                    <div className="flex flex-row gap-2 sm:gap-4">
                        <div className="flex flex-col items-start gap-1">
                            <h1 className="text-4xl font-bold font-display">
                                Projects
                            </h1>
                            <p>
                                A few public projects we've previously worked
                                on, or currently working on.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
