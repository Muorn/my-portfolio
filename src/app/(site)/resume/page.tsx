
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume | Venus",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/resume", text: "Resume" },
  ];
  return (
    <>
      <HeroSub
        title="Resume"
        description="Here is my professional resume."
        breadcrumbLinks={breadcrumbLinks}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Daniel Xavier B. Legaspi</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              106 San Isidro Hagonoy, Bulacan | 0994-780-4106 | daxalegaspi@gmail.com
            </p>
            <p className="text-lg">
              <a href="https://www.linkedin.com/in/daniel-legaspi-62a867309/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                linkedin.com/in/daniel-legaspi-62a867309/
              </a>
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-blue-500 pb-2 mb-4">Summary</h2>
            <p className="text-gray-700 dark:text-gray-300">
              A highly adaptable and results-oriented Computer Engineering graduate (Cum Laude) with extensive experience in full-stack development, IoT systems, and IT support. Proficient in a wide array of programming languages and frameworks, with a proven track record of designing and implementing innovative software and hardware solutions. Eager to leverage technical expertise and versatile problem-solving skills to excel in a dynamic Preference Engineer role.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-blue-500 pb-2 mb-4">Technical Skills</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Programming Languages:</strong> Python, C++, JavaScript, Dart, HTML, CSS, PHP, Visual Basic, PowerShell, Bash/Shell Scripting</li>
              <li><strong>Frameworks & Libraries:</strong> React Native, Express.js, Node.js, Expo, Flutter, Bootstrap, TensorFlow, Pytorch</li>
              <li><strong>Databases & Tools:</strong> MySQL, SQLite, Firebase, Git, VSCode, Android Studio</li>
              <li><strong>Specializations:</strong> Web Development, Mobile Development, Embedded System, Machine Learning, Test Automation, Quality Assurance (QA)</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-blue-500 pb-2 mb-4">Projects</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">IoT-Based Taro-Cassava Soil Monitoring System with Recommender</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">C++, MicroPython, ESP8266, Flutter, Dart, Firebase</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li>Integrated 18 sensors across 6 nodes with internet connectivity to measure soil parameters (temperature, moisture, pH, EC, NPK), enabling real-time environmental monitoring for taro and cassava farming.</li>
                <li>Developed a web-based platform to display sensor data and generate farming recommendations using predefined soil thresholds.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Menstribe POS and Inventory System</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">PHP, MySQL, JavaScript, Bootstrap</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li>Developed a comprehensive Point-of-Sale and Inventory Management system with secure backend (prepared statements, transactions) and responsive frontend.</li>
                <li>Implemented modules for product, category, customer, and order management, including real-time sales reporting with data visualization (Chart.js) and export features.</li>
                <li>Integrated automated email reporting (PHPMailer) and specific POS functionalities like receipt printing and low-stock alerts.</li>
              </ul>
            </div>
             <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Menstribe Bulk Order Inventory and Contract Creator</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">PHP, MySQL, JavaScript, Bootstrap</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li>Engineered a web-based system for managing bulk orders, clients, and products, streamlining the bulk sales workflow.</li>
                <li>Designed and implemented dynamic contract generation functionality, automating the creation of printable sales agreements.</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-blue-500 pb-2 mb-4">Experience</h2>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Information Technology Support Specialist Intern</h3>
              <p className="text-md text-gray-700 dark:text-gray-400">IntelliSmart Technology, Inc. — Quezon City, Philippines | June 2024 – July 2024</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li>Resolved 30+ client technical issues, improving response efficiency.</li>
                <li>Assisted in service delivery coordination, documentation (user guides/manuals), and knowledge base organization.</li>
                <li>Participated in QA activities, service standard checks, client communications, and report preparation.</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
             <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-blue-500 pb-2 mb-4">Education</h2>
             <div>
               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Bulacan State University (2021 - 2025)</h3>
               <p className="text-md text-gray-700 dark:text-gray-300">Bachelor of Science in Computer Engineering</p>
               <p className="text-md text-gray-700 dark:text-gray-300">Cum Laude</p>
             </div>
           </div>

           <div>
             <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-blue-500 pb-2 mb-4">Certifications</h2>
             <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Overview of AI - Huawei, Issued June 2025</li>
              <li>Information Representation and Data Organization - Huawei, Issued Oct 2024</li>
              <li>Ethical Hacker - Cisco Networking Academy, Issued May 2024</li>
             </ul>
           </div>
        </div>
      </div>
    </>
  );
};

export default page;
