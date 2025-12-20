"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue } from "framer-motion";
import { 
  Timer, 
  Code2, 
  Trophy, 
  Users, 
  Sparkles, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Terminal,
  Cpu,
  Globe,
  Zap,
  ChevronDown,
  Clock,
  Wallet,
  Rocket,
  Orbit,
  Telescope,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { SpaceBackground } from "@/components/ui/space-background";
import { GlowingText } from "@/components/ui/glowing-text";
import { Magnetic } from "@/components/ui/magnetic";
import { CustomCursor } from "@/components/ui/custom-cursor";

const SECTION_IDS = ["hero", "about", "challenge", "timeline", "prizes", "sponsors", "faq", "contact"];

export default function HackathonLanding() {
  const [mounted, setMounted] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [activeDay, setActiveDay] = React.useState(1);
  const { scrollY, scrollYProgress } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(0, 0, 0, 0)", "rgba(20, 20, 20, 0.8)"]
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]
  );

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Mouse tracking for global section
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  React.useEffect(() => {
    setMounted(true);
    const handleGlobalMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleGlobalMouseMove);

    // Countdown logic - Jan 7, 2026, 12:00 AM
    const targetDate = new Date("2026-01-07T00:00:00");
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      clearInterval(timer);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen selection:bg-[#10d900]/30 selection:text-white bg-black text-white font-sans overflow-x-hidden md:cursor-none">
      <SpaceBackground>
        <CustomCursor />
        {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-[#10d900] origin-left z-50 shadow-[0_0_10px_#10d900]"
            style={{ scaleX }}
          />

        {/* Navigation */}
        <motion.header 
          style={{ backgroundColor: headerBg, borderColor: headerBorder }}
          className="fixed top-0 left-0 right-0 z-40 px-4 py-4 md:px-10 md:py-6 flex items-center justify-between border-b backdrop-blur-sm transition-colors"
        >
          <div className="flex items-center">
            <a href="/">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Amritalogo-1766221693014.png?width=8000&height=8000&resize=contain" 
                alt="Amrita Logo" 
                className="h-8 md:h-12 w-auto object-contain"
              />
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-md">
            {SECTION_IDS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors capitalize rounded-full hover:bg-white/5"
              >
                {id}
              </a>
            ))}
            <div className="ml-2">
              <a 
                href="https://anokha.amrita.edu/events/c0344cd9-5522-4817-a409-4d671c23f0a3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#ffffff_50%,#000000_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#10d900] px-4 py-1 text-sm font-bold text-black backdrop-blur-3xl transition-all duration-300 hover:bg-black hover:text-[#10d900] hover:shadow-[0_0_20px_rgba(16,217,0,0.5)]">
                  Register Now
                </span>
              </a>
            </div>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <a href="/">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/images-1766233752034.png?width=8000&height=8000&resize=contain" 
                  alt="Anokha Logo" 
                  className="h-8 md:h-12 w-auto object-contain"
                />
              </a>
            </div>
            <div className="lg:hidden">
              <Button size="sm" className="rounded-full bg-[#10d900] text-black hover:bg-[#10d900]/90" asChild>
                <a href="https://anokha.amrita.edu/events/c0344cd9-5522-4817-a409-4d671c23f0a3" target="_blank" rel="noopener noreferrer">
                  Register
                </a>
              </Button>
            </div>
          </div>
        </motion.header>

        <main className="relative z-10">
          {/* Hero Section */}
          <section 
            id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32 pb-24 md:pt-48"
          >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="z-20 relative w-full flex flex-col items-center"
          >
            <div className="relative w-full max-w-[98vw] flex justify-center">
              <GlowingText 
                text="HACKTIDE" 
                className="text-[10vw] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]" 
                delay={2}
              />
            </div>

            <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto mt-8 mb-10 font-medium px-4">
              JANUARY 7 - 8, 2026 <br />
              24-HR OFFLINE HACKATHON <br />
              AMRITA VISHWA VIDYAPEETHAM, COIMBATORE
            </p>

            <div className="flex flex-col items-center gap-8 mb-10">
              <div className="flex items-center gap-2 sm:gap-4 text-3xl sm:text-4xl md:text-6xl font-black italic tracking-tighter text-white/90">
                <div className="flex flex-col items-center">
                  <span>{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-white/50 not-italic font-medium mt-1">Days</span>
                </div>
                <span className="text-[#10d900]">:</span>
                <div className="flex flex-col items-center">
                  <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-white/50 not-italic font-medium mt-1">Hours</span>
                </div>
                <span className="text-[#10d900]">:</span>
                <div className="flex flex-col items-center">
                  <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-white/50 not-italic font-medium mt-1">Minutes</span>
                </div>
                <span className="text-[#10d900]">:</span>
                <div className="flex flex-col items-center">
                  <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-white/50 not-italic font-medium mt-1">Seconds</span>
                </div>
              </div>

              <a 
                href="https://anokha.amrita.edu/events/c0344cd9-5522-4817-a409-4d671c23f0a3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative inline-flex h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#ffffff_50%,#000000_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#10d900] px-10 text-xl font-bold text-black backdrop-blur-3xl transition-all duration-300 hover:bg-black hover:text-[#10d900] hover:shadow-[0_0_30px_rgba(16,217,0,0.6)]">
                  Register Now
                  <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <div className="flex items-center gap-2 text-sm md:text-base font-medium text-white/80 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-[#10d900]" />
                <span>Registration Closes: <span className="text-[#10d900] font-bold">December 26, 2025</span></span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 animate-bounce text-white/20" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 italic text-[#10d900]">The Objective</h2>
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  HACKTIDE is a 24-hour offline hackathon designed to bring together students to develop innovative, practical solutions for real-world problem statements. To provide a collaborative and competitive platform where students can apply technical skills and build functional prototypes.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2 p-4 rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-sm shadow-lg">
                    <div className="text-3xl font-bold text-white">24h</div>
                    <div className="text-sm text-white/60 uppercase tracking-widest">Continuous Dev</div>
                  </div>
                  <div className="space-y-2 p-4 rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-sm shadow-lg">
                    <div className="text-3xl font-bold text-white">80</div>
                    <div className="text-sm text-white/60 uppercase tracking-widest">Teams</div>
                  </div>
                  <div className="space-y-2 p-4 rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-sm shadow-lg">
                    <div className="text-3xl font-bold text-white">₹50k</div>
                    <div className="text-sm text-white/60 uppercase tracking-widest">Prize Pool</div>
                  </div>
                  <div className="space-y-2 p-4 rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-sm shadow-lg">
                    <div className="text-3xl font-bold text-white">₹708</div>
                    <div className="text-sm text-white/60 uppercase tracking-widest">Team Reg Fee</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="w-full rounded-2xl border border-white/5 overflow-hidden group relative shadow-2xl shadow-[#10d900]/10">
                  <img 
                    src="/poster.jpeg" 
                    alt="Hackathon Poster" 
                    className="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenge Section (Phases) */}
        <section id="challenge" className="py-24 px-4 bg-white/[0.01]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 italic text-[#10d900]">Mission Blueprint</h2>
              <p className="text-white/80">Three intensive phases of discovery and construction.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  phase: "Phase 1", 
                  title: "Idea Genesis", 
                  icon: Sparkles, 
                  desc: "80 teams select from 8 open-domain problem statements provided on the spot. Present innovative ideas evaluated on originality, feasibility, clarity, and relevance." 
                },
                { 
                  phase: "Phase 2", 
                  title: "Rapid Prototyping", 
                  icon: Orbit, 
                  desc: "24-hour continuous hackathon to transform ideas into functional prototypes. Initial evaluation shortlists the top teams based on progress." 
                },
                { 
                  phase: "Phase 3", 
                  title: "Final Orbit", 
                  icon: Trophy, 
                  desc: "Shortlisted teams present refined prototypes to the judging panel. Top 2 winners selected based on excellence and impact." 
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="group p-8 rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-md transition-all relative overflow-hidden shadow-xl hover:bg-white/[0.08]"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl italic transition-opacity">
                    {i + 1}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#10d900]/10 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-[#10d900]" />
                  </div>
                  <div className="text-[#10d900] font-mono text-sm mb-2">{item.phase}</div>
                  <h3 className="text-2xl font-bold mb-4 italic">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-24 px-4 border-y border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold italic text-[#10d900] mb-2">Mission Timeline</h2>
              <p className="text-white/60">24 hours of cosmic innovation</p>
            </div>

            <div className="flex justify-center mb-12">
              <div className="inline-flex p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <button
                  onClick={() => setActiveDay(1)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeDay === 1 
                      ? "bg-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]" 
                      : "text-white/40 hover:text-white/60"
                  }`}
                >
                  Day 1 - Jan 07
                </button>
                <button
                  onClick={() => setActiveDay(2)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeDay === 2 
                      ? "bg-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]" 
                      : "text-white/40 hover:text-white/60"
                  }`}
                >
                  Day 2 - Jan 08
                </button>
              </div>
            </div>

            <div className="relative min-h-[400px] bg-black/40 rounded-3xl border border-white/10 p-8 md:p-12 backdrop-blur-sm overflow-hidden">
               {/* Background Elements */}
               <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                  <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-[#10d900]/5 rounded-full blur-[100px]" />
                  <div className="absolute bottom-[-10%] left-[-10%] w-[200px] h-[200px] bg-blue-500/5 rounded-full blur-[80px]" />
               </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDay}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  {(activeDay === 1 ? [
                    { time: "01:00 PM", endTime: "01:20 PM", event: "Inauguration & Participant Briefing", desc: "Instructions and guidelines for teams with pre-submitted ideas" },
                    { time: "01:20 PM", endTime: "04:00 PM", event: "Hackathon Kick-off", desc: "Development Phase I" },
                    { time: "04:00 PM", endTime: "04:45 PM", event: "Snacks Break", desc: "Refuel and recharge" },
                    { time: "04:45 PM", endTime: "06:00 PM", event: "Review Round I", desc: "Initial progress evaluation" },
                    { time: "06:00 PM", endTime: "10:00 PM", event: "Development Phase II", desc: "Core development continues" },
                    { time: "10:00 PM", endTime: "11:00 PM", event: "Dinner Break", desc: "Main course served" },
                    { time: "11:00 PM", endTime: "01:30 AM", event: "Development Phase III", desc: "Late night coding session" },
                  ] : [
                    { time: "01:30 AM", endTime: "02:30 AM", event: "Review Round II", desc: "Mid-hackathon assessment" },
                    { time: "02:30 AM", endTime: "06:00 AM", event: "Overnight Development Session", desc: "The final sprint" },
                    { time: "06:00 AM", endTime: "07:00 AM", event: "Review Round III & Shortlisting", desc: "Selecting teams for final round" },
                    { time: "07:00 AM", endTime: "09:00 AM", event: "Final Development & Refinement", desc: "Shortlisted teams polish their projects" },
                    { time: "09:00 AM", endTime: "10:00 AM", event: "Breakfast Break", desc: "Morning energy boost" },
                    { time: "10:00 AM", endTime: "01:00 PM", event: "Grand Finale", desc: "Final Presentations, Winner Announcement & Vote of Thanks" },
                  ]).map((item, i, arr) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-6 md:gap-10 group relative pb-12 last:pb-0"
                    >
                      <div className="w-24 shrink-0 text-right pt-1">
                        <div className="text-[#10d900] font-mono font-bold text-sm md:text-base">{item.time}</div>
                        <div className="text-white/30 text-xs font-mono mt-1">{item.endTime}</div>
                      </div>
                      
                      <div className="relative flex-1 pl-8">
                        {/* Timeline Line */}
                        <div className={`absolute left-0 w-px bg-white/10
                          ${i === 0 ? 'top-2 bottom-0' : ''}
                          ${i > 0 && i < arr.length - 1 ? 'top-0 bottom-0' : ''}
                          ${i === arr.length - 1 ? 'top-0 h-2' : ''}
                        `} />
                        
                        {/* Timeline Dot */}
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[#10d900] shadow-[0_0_10px_#10d900] group-hover:scale-125 transition-transform duration-300 z-10" />
                        
                        <div className="group-hover:translate-x-2 transition-transform duration-300">
                          <h4 className="text-lg md:text-xl font-bold text-white mb-1">{item.event}</h4>
                          <p className="text-white/50 text-sm md:text-base">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Prizes Section */}
        <section id="prizes" className="py-24 px-4 bg-[#10d900]/[0.02] overflow-hidden">
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 italic text-[#10d900]">Bounty Board</h2>
              <p className="text-white/80">Rewards for cosmic innovation and technical excellence.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { rank: "First Prize", prize: "₹25,000", color: "from-yellow-400 to-yellow-600", featured: true },
                { rank: "Second Prize", prize: "₹15,000", color: "from-gray-300 to-gray-500", featured: false },
                { rank: "Third Prize", prize: "₹10,000", color: "from-orange-400 to-orange-600", featured: false },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  className={`relative p-6 sm:p-10 rounded-3xl border transition-all duration-300 flex flex-col items-center justify-center text-center ${item.featured ? 'bg-white/15 border-[#10d900]/40 md:scale-105 z-10 shadow-[0_0_50px_rgba(16,217,0,0.15)] backdrop-blur-md' : 'bg-white/[0.08] border-white/20 backdrop-blur-sm shadow-xl'}`}
                >
                  <Trophy className={`w-16 h-16 mb-6 bg-gradient-to-br ${item.color} rounded-full p-3 text-white`} />
                  <div className="text-sm font-mono uppercase tracking-widest text-white/60 mb-2">{item.rank}</div>
                  <div className={`text-4xl font-black mb-4 bg-gradient-to-br ${item.color} bg-clip-text text-transparent italic`}>{item.prize}</div>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li>Excellence Certification</li>
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-16 text-center"
            >
                <div className="inline-block px-8 py-4 rounded-full border border-[#10d900]/20 bg-[#10d900]/5 text-[#10d900] font-bold italic text-xl shadow-[0_0_30px_rgba(16,217,0,0.1)]">
                  Exclusive Electronic Gadgets for the 4th and 5th place teams and Participation certificates for all teams!
                </div>
            </motion.div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="py-24 px-4 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 italic text-[#10d900]">Our Sponsors</h2>
              <p className="text-white/80">Powering the next generation of innovators.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
              {/* Avantech */}
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-md flex flex-col items-center text-center gap-6 hover:bg-white/[0.08] transition-colors group"
              >
                <div className="h-24 flex items-center justify-center p-4 bg-white/5 rounded-xl w-full group-hover:bg-white/10 transition-colors">
                  <img 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot-2025-12-20-at-8.18.06-PM-1766242096776.png?width=8000&height=8000&resize=contain" 
                    alt="Avantech" 
                    className="h-full w-auto object-contain brightness-90 group-hover:brightness-100 transition-all duration-300 rounded-lg"
                  />
                </div>
                <p className="text-white/70 leading-relaxed text-sm md:text-base">
                  Avantech Business Solutions is a trusted corporate merchandise and rewards partner with over a decade of experience, delivering premium and innovative solutions to leading brands across industries.
                </p>
              </motion.div>

              {/* Hash Agile */}
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-md flex flex-col items-center text-center gap-6 hover:bg-white/[0.08] transition-colors group"
              >
                <div className="h-24 flex items-center justify-center p-4 bg-white/5 rounded-xl w-full group-hover:bg-white/10 transition-colors">
                  <img 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-20-at-8.00.17-PM-1766241881571.jpeg?width=8000&height=8000&resize=contain" 
                    alt="Hash Agile Technologies" 
                    className="h-full w-auto object-contain brightness-90 group-hover:brightness-100 transition-all duration-300"
                  />
                </div>
                <p className="text-white/70 leading-relaxed text-sm md:text-base">
                  Hash Agile Technologies is an AI and data science company that builds enterprise-grade, agile solutions to solve complex problems and accelerate digital transformation.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,217,0,0.03)_0%,transparent_70%)] pointer-events-none" />
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center italic text-[#10d900]">Mission Logistics</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "What is the team size?", a: "Each team must consist of 2–3 members. A total of 80 teams will be registered for the event." },
                { q: "What is the registration fee?", a: "The registration fee is ₹708 per team." },
                { q: "When is the registration period?", a: "Registration starts on 26.12.2025 and ends on 02.01.2026." },
                { q: "What is the refund policy?", a: "There is a strict no-refund policy for this event." },
                { q: "Where is the venue?", a: "The event is an offline hackathon conducted at Amrita Vishwa Vidyapeetham, Coimbatore Campus (Classroom)." },
                { q: "What should we bring?", a: "Bring your own laptops, chargers, extension boxes, and any specific hardware your project might require for prototype development." },
              ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 bg-white/[0.06] backdrop-blur-sm rounded-2xl px-6 hover:bg-white/[0.08] transition-colors shadow-lg">
                    <AccordionTrigger className="text-lg hover:no-underline transition-colors py-6 text-left">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-white/80 pb-6 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24 px-4 bg-white/[0.01]">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 text-center italic text-[#10d900]">Contact Us</h2>
                <h3 className="text-xl font-bold mb-12 text-center text-white/60 uppercase tracking-widest italic">Coordinators</h3>
                <div className="grid md:grid-cols-3 gap-8">
                {[
                  { name: "Arul Aaron Kingsley", phone: "+91 7200482254" },
                  { name: "Khushi", phone: "+91 8209859814" },
                  { name: "Aparna", phone: "+91 9940816128" },
                ].map((contact, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm text-center group hover:bg-white/[0.08] transition-all shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#10d900]/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-[#10d900]/20 transition-colors">
                      <Phone className="w-5 h-5 text-[#10d900]" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{contact.name}</h3>
                    <a 
                      href={`tel:${contact.phone.replace(/\s+/g, '')}`} 
                      className="text-[#10d900] text-sm hover:underline"
                    >
                      {contact.phone}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-12 border-t border-white/5 relative z-10 bg-black">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="font-black text-2xl tracking-tighter italic text-[#10d900]">HACKTIDE</div>
            </div>

            <div className="text-white/60 text-sm text-center md:text-right font-medium leading-relaxed">
              © 2025 HACKTIDE. Organised by Department of Mathematics.<br/>
              All rights reserved.
            </div>
          </div>
        </footer>
      </SpaceBackground>
    </div>
  );
}
