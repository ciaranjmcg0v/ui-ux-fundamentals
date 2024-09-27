"use client";

import ProfileImage from "@/images/IMG_2445.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { presenterProfile } from "@/data/profile";
import { slides } from "@/data/slides";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter(); // Initialize router for navigation

  const nextSlide = () => {
    if (currentSlide < slides.length) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length + 1) % (slides.length + 1)); // +1 for profile slide
  };

  const endPresentation = () => {
    router.push("/completion"); // Navigate to the completion page
  };

  const renderProfileSlide = () => {
    return presenterProfile.map((profile, index) => (
      <Card className="w-full max-w-4xl" key={index}>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">About the Presenter</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Avatar className="w-40 h-40 mb-4">
            <AvatarImage src={ProfileImage.src} alt="Presenter" />
            <AvatarFallback>
              <User className="w-20 h-20" />
            </AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-semibold mb-2">{profile.name}</h2>
          <p className="text-lg mb-4">{profile.title}</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={`bio-${index}`}>
              <AccordionTrigger>Bio</AccordionTrigger>
              <AccordionContent>
                <div
                  dangerouslySetInnerHTML={{
                    __html: profile.bio.replace(/(?:\r\n|\r|\n)/g, "<br />"),
                  }}
                  className="text-blue-600 font-medium"
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="text-left w-full mt-4">
            <ul className="list-disc list-inside">
              {profile.quickFacts.map((fact, i) => (
                <li key={i} className="list-none font-mono py-1">• {fact}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    ));
  };

  const renderContent = () => {
    if (currentSlide === 0) {
      return renderProfileSlide();
    }

    const slide = slides[currentSlide - 1];
    return (
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold mb-2">{slide.title}</CardTitle>
          {slide.subtitle && (
            <p className="text-xl font-semibold">{slide.subtitle}</p>
          )}
        </CardHeader>
        <CardContent>
          {slide.content.map((point, index) => {
            const pointLines = point.split('\n');
            const isAccordionNeeded = pointLines.length >= 3;

            return isAccordionNeeded ? (
              <Accordion type="single" collapsible className="w-full" key={index}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>{`Point ${index + 1}`}</AccordionTrigger>
                  <AccordionContent>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: point
                          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                          .replace(/<code>(.*?)<\/code>/g, `<code class="bg-gray-100 border rounded-lg font-mono p-1">$1</code>`)
                          .replace(/(?:\r\n|\r|\n)/g, "<br />"),
                      }}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <div key={index} className="mb-4">
                <div
                  dangerouslySetInnerHTML={{
                    __html: point
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      .replace(/<code>(.*?)<\/code>/g, `<code class="bg-gray-200 border rounded-lg font-mono p-1">$1</code>`)
                      .replace(/(?:\r\n|\r|\n)/g, "<br />"),
                  }}
                  className="font-normal"
                />
              </div>
            );
          })}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-4">
      {renderContent()}
      <div className="flex justify-between w-full max-w-4xl mt-4">
        <button
          onClick={prevSlide}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          <ChevronLeft className="mr-2" />
          Previous
        </button>
        <span className="text-lg font-semibold">
          {currentSlide + 1} / {slides.length + 1}
        </span>
        {currentSlide === slides.length ? ( // Check if it's the last slide
          <button
            onClick={endPresentation}
            className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            End Presentation
          </button>
        ) : (
          <button
            onClick={nextSlide}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Next
            <ChevronRight className="ml-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Presentation;
