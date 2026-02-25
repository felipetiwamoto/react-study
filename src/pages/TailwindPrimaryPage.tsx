import { useState } from "react";

const sizeVariants = {
    sm: "p-1",
    md: "p-2",
    lg: "p-3",
};

export function TailwindPrimaryPage() {
    const sizes = ["sm", "md", "lg"] as const;
    const [index, setIndex] = useState(1);

    const size = sizes[index];

    function nextSize() {
        setIndex((prev) => (prev + 1) % sizes.length);
    }

    return (
        <div>
            <h1 className="text-2xl font-bold">Tailwind Page</h1>

            <button
                onClick={nextSize}
                className={`bg-primary text-white rounded-md ${sizeVariants[size]}`}
            >
                primary ({size})
            </button>
        </div>
    );
}