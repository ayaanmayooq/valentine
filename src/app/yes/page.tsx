"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/button";

export default function YesPage(): JSX.Element {
    const router = useRouter();

    const handleDatePlanner = () => {
        router.push("/date-planner");
        };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-valentine-rose text-center">
            <h1 className="text-5xl font-bold text-white mb-4">
            Perfect! I knew you would say YES!
            </h1>
            <p className="text-xl text-white mb-8">
            Get ready for an unforgettable day — lets start planning our perfect date.
            </p>
            <Button
            label="Start Planning"
            onClick={handleDatePlanner}
            variant="secondary"
            />
        </div>
    );
}
