import React from 'react';
import Link from 'next/link';

const ExperienceSection = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 border-b-4 border-blue-500 pb-2 inline-block">
            Professional Experience
          </h2>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg">
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">2024</time>
              <div className="text-xl font-bold text-gray-900 dark:text-white">Information Technology Support Specialist Intern</div>
            </div>
            <div className="text-slate-500 dark:text-slate-400">IntelliSmart Technology, Inc. — Quezon City, Philippines</div>
            <div className="text-gray-700 dark:text-gray-300 mt-2">
              <ul className="list-disc list-inside">
                <li>Resolved 30+ client technical issues, improving response efficiency.</li>
                <li>Assisted in service delivery coordination and documentation.</li>
                <li>Participated in QA activities and client communications.</li>
              </ul>
            </div>
            <div className="mt-6 text-center">
              <Link href="/about" legacyBehavior>
                <a className="inline-block bg-primary text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
                  Learn More About My Experience
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
