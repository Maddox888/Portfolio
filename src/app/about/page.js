export default function About() {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mt-4 max-w-2xl text-center text-gray-300">
          I am a BCA student with a strong passion for Web Development, UX/UI Design, and Graphic Designing.
          With over 4 years of experience in video editing & graphic design, I combine creativity with technology.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <ul className="mt-2 text-gray-300">
              <li>Web Development (HTML, CSS, JavaScript, React, Next.js)</li>
              <li>Video Editing (Premiere Pro, After Effects)</li>
              <li>Graphic Design (Photoshop, Illustrator)</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-semibold">Education</h2>
            <p className="mt-2 text-gray-300">BCA Student at [Your University]</p>
          </div>
        </div>
      </div>
    );
  }