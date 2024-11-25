import ProjectCard from "./card";

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
                    <div className="grid grid-cols-2 gap-4">
                        <ProjectCard
                            name="Campsite"
                            summary="Campsite is a new communication platform built from the ground up with Rust and TypeScript to bring you a secure, fast, and sleek chat app."
                            img="/campsite-banner.png"
                            year={2024}
                            deploy_url="https://campsite.chat"
                        />
                        <ProjectCard
                            name="Katarogu"
                            summary="Katarogu is a free, open-source and community driven manga and anime tracking service built as an open and modern alternative to existing services like MAL and MyAniList."
                            img="/katarogu-banner.png"
                            year={2024}
                            deploy_url="https://katarogu.moe"
                            github_url="https://github.com/nord-studio/katarogu"
                        />
                    </div>
                </div>
            </main>
        </>
    );
}
