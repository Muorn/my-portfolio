import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Image from 'next/image';
import { getImgPath } from '@/utils/image';

export const metadata: Metadata = {
    title: "About Me | Daniel Xavier B. Legaspi",
};

const SkillBadge = ({ skill }: { skill: string }) => (
  <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full px-4 py-2 text-sm font-medium mr-2 mb-2 transition-all duration-300 hover:scale-105 hover:shadow-md">
    {skill}
  </span>
);

const TimelineItem = ({ title, subtitle, date, children }: { title: string, subtitle: string, date: string, children: React.ReactNode }) => (
  <div className="relative pl-8 sm:pl-32 py-6 group">
    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{date}</time>
      <div className="text-xl font-bold text-gray-900 dark:text-white">{title}</div>
    </div>
    <div className="text-slate-500 dark:text-slate-400">{subtitle}</div>
    <div className="text-gray-700 dark:text-gray-300 mt-2">{children}</div>
  </div>
);

const CertificationItem = ({ title, issuer, date }: { title: string, issuer: string, date: string }) => (
    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg flex justify-between items-center">
        <div>
            <h4 className="font-bold text-lg text-gray-900 dark:text-white">{title}</h4>
            <p className="text-gray-600 dark:text-gray-300">{issuer}</p>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
    </div>
);


const AboutPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];

  const technicalSkills = {
    "Programming Languages": ["Python", "C++", "JavaScript", "Dart", "HTML", "CSS", "PHP", "PowerShell", "Bash/Shell Scripting"],
    "Frameworks & Libraries": ["React Native", "Express.js", "Node.js", "Expo", "Flutter", "Bootstrap", "TensorFlow", "Pytorch"],
    "Databases & Tools": ["MySQL", "SQLite", "Firebase", "Git", "VSCode", "Android Studio"],
    "Specializations": ["Web Development", "Mobile Development", "Embedded System", "Machine Learning", "Test Automation", "Quality Assurance (QA)"]
  };

  return (
    <>
      <HeroSub
        title="About Me"
        description="A results-oriented Computer Engineering graduate with a passion for building innovative software and hardware solutions."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-darkmode">
        <div className="container mx-auto max-w-5xl px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <Image
              src={getImgPath('/images/about/picture2.jfif')}
              alt="Daniel Xavier B. Legaspi"
              width={300}
              height={400}
              quality={100}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="md:w-2/3 text-left">
            <h2 className="text-4xl font-extrabold text-midnight_text dark:text-white mb-4">Daniel Xavier B. Legaspi</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              I am a highly adaptable and results-oriented Computer Engineering graduate (Cum Laude) with extensive experience in full-stack development, IoT systems, and IT support. Proficient in a wide array of programming languages and frameworks, with a proven track record of designing and implementing innovative software and hardware solutions, I am eager to leverage technical expertise and versatile problem-solving skills to excel in a dynamic engineering role. I am a curious engineer, passionate about continuous learning, and thrive in dynamic and collaborative settings.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 border-b-4 border-blue-500 pb-2">Experience</h3>
            <div className="space-y-8">
              <TimelineItem title="Information Technology Support Specialist Intern" subtitle="IntelliSmart Technology, Inc. — Quezon City, Philippines" date="2024">
                <ul className="list-disc list-inside mt-2">
                  <li>Resolved 30+ client technical issues, improving response efficiency.</li>
                  <li>Assisted in service delivery coordination, documentation (user guides/manuals), and knowledge base organization.</li>
                  <li>Participated in QA activities, service standard checks, client communications, and report preparation.</li>
                </ul>
              </TimelineItem>
            </div>
          </div>
        </div>
      </section>

       <section className="py-16 md:py-24 bg-gray-50 dark:bg-darkmode">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 border-b-2 border-blue-500 pb-2">Education</h3>
            <TimelineItem title="Bachelor of Science in Computer Engineering" subtitle="Bulacan State University (Cum Laude)" date="2021-2025">
              <p>Graduated with high honors, focusing on a curriculum that balanced hardware systems and software development, with a strong foundation in mathematical modeling and hardware design.</p>
            </TimelineItem>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 border-b-2 border-blue-500 pb-2">Certifications</h3>
            <div className="space-y-4">
                <CertificationItem title="Overview of AI" issuer="Huawei" date="June 2025" />
                <CertificationItem title="Information Representation and Data Organization" issuer="Huawei" date="Oct 2024" />
                <CertificationItem title="Ethical Hacker" issuer="Cisco Networking Academy" date="May 2024" />
            </div>
           </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 border-b-2 border-blue-500 pb-2">Technical Skills</h3>
            <div className="space-y-8">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skills.map(skill => <SkillBadge key={skill} skill={skill} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
