"use client";
import { useState } from 'react';
import Header from "../components/Header.jsx";
import MyChart from "../components/MyChart.js";
import Image from "next/image";
import "../components/Style.css";
import { MdSpaceDashboard } from "react-icons/md";
import { RiAwardFill } from "react-icons/ri";
import { GrCopy } from "react-icons/gr";
import MyPieChart from "../components/Mypiechart.jsx";
// import MyDoughnutChart from "@/components/MyDoughnutChart";
import UpdatePopup from "@/components/UpdatePopup";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [stats, setStats] = useState({
    rank: 1,
    percentile: 90,
    score: '12 / 15'
  });

  const handleUpdate = (newStats) => {
    setStats({
      rank: newStats.rank || stats.rank,
      percentile: newStats.percentile || stats.percentile,
      score: newStats.score ? `${newStats.score} / 15` : stats.score
    });
  };

  return (
    <div>
      <Header />
      <div className="bodywrap">
        <div className="sidebar">
          <div className="mt-12">
            <div className="flex items-center py-6 pl-5">
              <MdSpaceDashboard size={20} />
              <div className="ml-5 font-semibold text-zinc-600 text-base">Dashboard</div>
            </div>
            <div className="flex items-center py-4 pl-5 selected">
              <RiAwardFill size={20} />
              <div className="ml-5 font-semibold text-base">Skill Test</div>
            </div>
            <div className="flex items-center py-6 pl-5">
              <GrCopy size={20} />
              <div className="ml-5 font-semibold text-zinc-600 text-base">Internship</div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="centerdiv">
            <div className="mt-8">Skill Test</div>
            <div className="mt-6">
              <div className="testname">
                <div>
                  <Image src="/html-5.png" width={50} height={50} alt="html" />
                </div>
                <div>
                  <div className="font-bold">Hyper Text Markup Language</div>
                  <div className="text-sm text-gray-500">Question: 08 | Duration: 15 minutes | Submitted on 5 June 2024</div>
                </div>
                <div className="flex items-center">
                  <button className="upload" onClick={() => setShowPopup(true)}>Update</button>
                </div>
              </div>
              {/* quick stats */}
              <div className="mt-4 p-5 quick">
                <div className="font-bold">Quick Statistics</div>
                <div className="flex justify-around mt-4">
                  <div className="flex bord">
                    <div className="bg">
                      <div className="icon">
                        <Image src="/trophy.png" layout="fill" objectFit="contain" alt="rank" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <div className="font-bold text-xl">{stats.rank}</div>
                      <div className="text-xs text-gray-600">YOUR RANK</div>
                    </div>
                  </div>
                  <div className="flex bord">
                    <div className="bg">
                      <div className="icon">
                        <Image src="/papers.png" layout="fill" objectFit="contain" alt="rank" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <div className="font-bold text-xl">{stats.percentile}%</div>
                      <div className="text-xs text-gray-600">PERCENTILE</div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg">
                      <div className="icon">
                        <Image src="/check.png" layout="fill" objectFit="contain" alt="rank" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <div className="font-bold text-xl">{stats.score}</div>
                      <div className="text-xs text-gray-600">CORRECT ANSWERS</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* comparison graph */}
              <div className="mt-4 p-5 comparison">
                <div className="font-bold">Comparison Graph</div>
                <div className="flex pr-5 mt-5">
                  <div className="para">
                    You scored 90% which is lower than the average percentile 72% of all the engineers who took the assessment.
                  </div>
                  <div className="graphlogo">
                    <Image src="/statistics.png" layout="fill" objectFit="contain" alt="rank" />
                  </div>
                </div>
                <div className="mt-4">
                  <MyChart />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 rightdiv">
            <div className="syllabus">
              <div className="font-bold">Syllabus Wise Analysis</div>
              <div className="mt-8">
                <div className="text-sm text-gray-600 font-medium">HTML Tools, Forms, History</div>
                <div className="flex items-center mt-4">
                  <div className="fullbar"><div className="bar"></div></div>
                  <div className="ml-10">80%</div>
                </div>
              </div>
              <div className="mt-8">
                <div className="text-sm text-gray-600 font-medium">Tags & References in HTML</div>
                <div className="flex items-center mt-4">
                  <div className="fullbar sfullbar"><div className="bar sbar"></div></div>
                  <div className="ml-10">60%</div>
                </div>
              </div>
              <div className="mt-8">
                <div className="text-sm text-gray-600 font-medium">Tables & References in HTML</div>
                <div className="flex items-center mt-4">
                  <div className="fullbar tfullbar"><div className="bar tbar"></div></div>
                  <div className="ml-10">24%</div>
                </div>
              </div>
              <div className="mt-8">
                <div className="text-sm text-gray-600 font-medium">Tables & CSS Basics</div>
                <div className="flex items-center mt-4">
                  <div className="fullbar ffullbar"><div className="bar fbar"></div></div>
                  <div className="ml-10">96%</div>
                </div>
              </div>
            </div>

            {/* Pie chart */}
            <div className="mt-5 p-5 question">
              <div className="flex justify-between">
                <div className="font-bold">Question Analysis</div>
                <div>{stats.score}</div>
              </div>
              <div>
                <div className="mt-2">
                  <span className="font-bold">You scored 12 questions correct out of 15.</span>
                  <span> However, it still needs some improvement.</span>
                </div>
                <div className="flex justify-center mt-10">
                  <MyPieChart score={stats.score} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UpdatePopup show={showPopup} onClose={() => setShowPopup(false)} onUpdate={handleUpdate} />
    </div>
  );
}

export default Home;
