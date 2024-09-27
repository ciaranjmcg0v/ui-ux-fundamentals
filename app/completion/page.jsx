import Image from "next/image";
import CompletionImage from '@/images/IMG_0151.jpg';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Import necessary components from shadcn

const ThankYouSlide = () => {
  return (
    <Card className="w-full h-screen p-3 rounded-lg shadow-lg bg-white flex flex-col justify-evenly">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center text-violet-600">Thank You!</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row md:space-x-4">
        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col space-y-4">
          <div className="flex justify-center">
            <Image
              src={CompletionImage.src}
              alt="Thank You"
              width={400} // Set a width that works for your design
              height={300} // Set a height that works for your design
              className="rounded-lg shadow-md object-cover" // Add border radius and shadow
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm font-normal mb-2">
              Thank you for being part of this journey! 🎉 I hope you found the
              insights shared valuable and inspiring.
            </p>
            <p className="text-sm font-normal mb-2">
              Here&apos;s a final thought to take away: Keep pushing the boundaries
              of your creativity and innovation! 💡
            </p>
            <p className="text-sm font-normal mb-2">
              I truly appreciate each of you for taking the time to tune in and
              listen to my presentation. 🙏 It wasn&apos;t easy for me to stand here
              and share this, but it&apos;s important work, and this community—each
              of you—has inspired me to focus on what truly matters. 🌟 Teaching and
              learning from one another is vital for us to grow into the best
              versions of ourselves. Together, we can elevate our skills and work at
              the highest level as we continue to move forward! 💪
            </p>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="md:w-1/2 flex flex-col space-y-4">
          <div>
            <p className="text-lg">
              In this presentation, we explored essential UI/UX fundamentals,
              including:
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Design Principles:</strong> Understanding balance, contrast,
                and hierarchy.
              </li>
              <li>
                <strong>User-Centered Design:</strong> Emphasizing user needs and
                feedback in the design process.
              </li>
              <li>
                <strong>A/B Testing:</strong> Implementing data-driven strategies to
                improve user experience.
              </li>
              <li>
                <strong>Accessibility:</strong> Ensuring designs are usable for
                everyone, including those with disabilities.
              </li>
              <li>
                <strong>Responsive Design:</strong> Creating designs that work well
                on all device sizes.
              </li>
            </ul>
          </div>
          <p className="text-lg">
            Now, I&apos;d love to open the floor for any questions you may have. I
            may not have all the answers but I&apos;ll definitely try my best!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThankYouSlide;
