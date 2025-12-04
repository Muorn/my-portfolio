"use client"
import React, { useState, useEffect } from 'react';
import HeroSub from "@/components/SharedComponent/HeroSub";
import Link from 'next/link';

const useSimulatedSensorData = (initialValue: number, min: number, max: number, interval: number) => {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    const timer = setInterval(() => {
      setValue(prev => {
        const change = (Math.random() - 0.5) * (max - min) * 0.1;
        const newValue = prev + change;
        return Math.max(min, Math.min(max, newValue));
      });
    }, interval);
    return () => clearInterval(timer);
  }, [min, max, interval]);
  return value;
};

const SensorCard = ({ label, value, unit, optimalMin, optimalMax }: any) => {
  const isOptimal = value >= optimalMin && value <= optimalMax;
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{label}</h4>
      <p className={`text-4xl font-bold ${isOptimal ? 'text-green-500' : 'text-yellow-500'}`}>
        {value.toFixed(1)} <span className="text-2xl text-gray-600 dark:text-gray-300">{unit}</span>
      </p>
    </div>
  );
};

const IoTMenitoringPage = () => {
  const temperature = useSimulatedSensorData(25, 20, 30, 2000);
  const moisture = useSimulatedSensorData(60, 40, 80, 1500);
  const pH = useSimulatedSensorData(6.5, 6.0, 7.0, 3000);
  const ec = useSimulatedSensorData(1.5, 1.0, 2.0, 2500);
  const npk = useSimulatedSensorData(150, 100, 200, 3500);

  const [recommendation, setRecommendation] = useState<string | null>(null);

  const getRecommendation = () => {
    if (temperature < 22) setRecommendation("Soil is too cold. Consider warming techniques.");
    else if (moisture < 50) setRecommendation("Soil is too dry. Irrigation is recommended.");
    else if (pH > 6.8) setRecommendation("Soil pH is too high. Consider adding sulfur.");
    else setRecommendation("Soil conditions are currently optimal for taro and cassava farming.");
  };

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/portfolio", text: "Portfolio" },
    { href: "/portfolio/iot-soil-monitoring", text: "IoT Soil Monitoring" },
  ];

  return (
    <>
      <HeroSub
        title="IoT-Based Soil Monitoring System"
        description="A smart agriculture solution for real-time monitoring of taro and cassava farming, backed by published research."
        breadcrumbLinks={breadcrumbLinks}
      />
      <div className="bg-gray-50 dark:bg-darkmode text-gray-900 dark:text-white min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-6xl">

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-6 border-b-2 border-teal-500 pb-2">
              Project Overview & Research
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
             This project is an advanced IoT-based system designed to revolutionize precision agriculture for taro and cassava farming. By integrating a network of 18 sensors across 6 nodes, the system provides real-time monitoring of crucial soil parameters. The data is transmitted to a web-based platform that not only displays the information but also generates intelligent farming recommendations, empowering farmers with data-driven insights to optimize crop health and yield.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#interactive-demo" className="inline-block bg-primary text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                View Live Demo
              </a>
              <Link href="/FINAL_IEEE_JOURNAL_IOT.pdf" passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-600 text-white py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors text-xl font-semibold">
                  Read Research Paper
                </a>
              </Link>
            </div>
          </div>
          
          <div id="interactive-demo" className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg scroll-mt-24">
            <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-6 border-b-2 border-teal-500 pb-2 text-center">
              Interactive Sensor Dashboard
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
              <SensorCard label="Temperature" value={temperature} unit="°C" optimalMin={22} optimalMax={28} />
              <SensorCard label="Moisture" value={moisture} unit="%" optimalMin={55} optimalMax={75} />
              <SensorCard label="pH" value={pH} unit="" optimalMin={6.2} optimalMax={6.8} />
              <SensorCard label="EC" value={ec} unit="mS/cm" optimalMin={1.2} optimalMax={1.8} />
              <SensorCard label="NPK" value={npk} unit="kg/ha" optimalMin={120} optimalMax={180} />
            </div>

            <div className="text-center">
              <button onClick={getRecommendation} className="bg-primary text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors text-xl">
                Get Farming Recommendation
              </button>
              {recommendation && (
                <div className="mt-6 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 p-4 rounded-lg">
                  <p className="font-semibold text-lg">{recommendation}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IoTMenitoringPage;