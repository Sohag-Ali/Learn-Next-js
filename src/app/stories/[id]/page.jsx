import React from 'react';

const StoryDetailsPage = async ({ params }) => {
    const { id } = await params;
     const devStories = [
    {
      id: 1,
      name: "John Doe",
      company: "Tech Solutions",
      experience: "5 years in software development",
      skills: ["JavaScript", "React", "Node.js"],
      story:
        "I started my journey in tech with a passion for coding. Over the years, I have worked on various projects that have helped me grow as a developer. I am excited to share my experiences and insights with the community.",
      about:
        "John is a seasoned software developer with a knack for building scalable web applications. He has a strong background in JavaScript and enjoys mentoring aspiring developers.",
      image: "https://example.com/john.jpg",
    },
    {
      id: 2,
      name: "Michael Lee",
      company: "InnovateX",
      experience: "4 years in backend development",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
      story:
        "Michael began his programming journey by building small APIs and automation tools. Over time, he developed scalable backend systems for startups and enterprise projects.",
      about:
        "Michael is passionate about server-side technologies and database optimization. He enjoys learning new technologies and contributing to open-source projects.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    },
    {
      id: 3,
      name: "Emma Wilson",
      company: "Digital Wave",
      experience: "3 years in UI/UX design",
      skills: ["Figma", "UI Design", "UX Research", "Adobe XD"],
      story:
        "Emma discovered her interest in design while creating mockups for personal projects. She now works with development teams to build intuitive and beautiful digital products.",
      about:
        "Emma focuses on creating modern and accessible user experiences. She believes good design should be both functional and visually appealing.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
    },
    {
      id: 4,
      name: "David Brown",
      company: "CloudNet Systems",
      experience: "7 years in DevOps engineering",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      story:
        "David transitioned from system administration into DevOps and now helps companies automate deployments and improve infrastructure reliability.",
      about:
        "David is experienced in cloud technologies and infrastructure automation. He enjoys optimizing workflows and mentoring teams on DevOps practices.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    },
  ];

  const story = devStories.find((s) => s.id === parseInt(id));

  if (!story) {
    return <div>Story not found</div>;
  }

  return (
     <div className="max-w-3xl mx-auto  shadow-md rounded-lg p-6 border border-gray-200">
      {/* Top Section */}
      <div className="flex items-center gap-5">
        <img
          src={story.image}
          alt={story.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-semibold">{story.name}</h1>
          <p className="text-gray-700">{story.designation}</p>
          <p className="text-blue-600">{story.company}</p>
          <p className="text-gray-600 mt-1">Experience: {story.experience}</p>
        </div>
      </div>

      {/* Story */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Learning Story</h2>
        <p className="text-gray-700 leading-relaxed">{story.story}</p>
      </div>

      {/* About */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">About Developer</h2>
        <p className="text-gray-700 leading-relaxed">{story.about}</p>
      </div>

      {/* Skills */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {story.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StoryDetailsPage;