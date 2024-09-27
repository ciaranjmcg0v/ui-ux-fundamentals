'use client'

import { Card } from "@/components/ui/card"; // Import Card component from shadcn
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import DesignImage from '@/images/undraw_design_components_9vy6.svg';

export default function Home() {
  const router = useRouter(); // Get the router object for navigation

  const handleGetStarted = () => {
    router.push("/presentation"); // Navigate to the '/presentation' page
  };
  return (
    <main>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Card className="w-full max-w-md p-8 rounded-lg shadow-lg bg-white">
          <h1 className="text-3xl font-bold text-center text-violet-600">
            UI/UX Fundamentals and Best Practices
          </h1>
          <h2 className="text-lg text-center text-gray-600 mt-2">
            A presentation by Ciaran McGovern
          </h2>
          <div className="flex justify-center mt-6">
            <Image
              src={DesignImage} // Replace with your SVG image path
              alt="UI/UX Illustration"
              width={200} // Adjust the width as needed
              height={200} // Adjust the height as needed
              className="object-contain"
            />
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={handleGetStarted}
              className="px-4 py-2 text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition duration-300"
            >
              Get Started
            </button>
          </div>
        </Card>
      </div>
    </main>
  );
}
