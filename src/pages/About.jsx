import { motion } from "framer-motion";
import { GraduationCap, Award, Target } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <div className="section-container py-16">
      <motion.div {...fadeInUp}>
        <h1 className="text-4xl font-bold mb-8">About Me</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div {...fadeInUp} className="card">
              <h2 className="text-2xl font-semibold mb-4">Background</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {portfolioData.summary}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a unique combination of Computer Engineering and Physics
                backgrounds, I bring an analytical and systematic approach to
                solving complex software challenges. My experience spans from
                semiconductor manufacturing systems to enterprise-scale API
                platforms, always with a focus on reliability, security, and
                performance.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="card">
              <h2 className="text-2xl font-semibold mb-4">Current Focus</h2>
              <p className="text-muted-foreground leading-relaxed">
                {portfolioData.currentFocus}
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="card">
              <h2 className="text-2xl font-semibold mb-4">
                Additional Highlights
              </h2>
              <ul className="space-y-3">
                {portfolioData.additionalInfo.map((info, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{info}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Education */}
            <motion.div {...fadeInUp} className="card">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="text-primary" size={20} />
                <h3 className="text-lg font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-border pl-4">
                    <h4 className="font-medium">{edu.degree}</h4>
                    {edu.additionalDegree && (
                      <h5 className="font-medium text-sm text-muted-foreground">
                        {edu.additionalDegree}
                      </h5>
                    )}
                    {edu.minor && (
                      <p className="text-sm text-muted-foreground">
                        {edu.minor}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground">{edu.year}</p>
                    {edu.details && (
                      <p className="text-sm text-muted-foreground mt-2">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Facts */}
            <motion.div {...fadeInUp} className="card">
              <div className="flex items-center gap-2 mb-4">
                <Target className="text-primary" size={20} />
                <h3 className="text-lg font-semibold">Quick Facts</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium">Location:</span>
                  <span className="text-muted-foreground ml-2">
                    {portfolioData.personal.location}
                  </span>
                </div>
                <div>
                  <span className="font-medium">Current Role:</span>
                  <span className="text-muted-foreground ml-2">
                    {portfolioData.personal.title}
                  </span>
                </div>
                <div>
                  <span className="font-medium">Focus Areas:</span>
                  <span className="text-muted-foreground ml-2">
                    API Platforms, Developer Tooling, AI/ML Learning &
                    Automation, Cloud Workflows
                  </span>
                </div>
                <div>
                  <span className="font-medium">Interests:</span>
                  <span className="text-muted-foreground ml-2">
                    Software Architecture, AI & Machine Learning, Mentoring
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div {...fadeInUp} className="card">
              <div className="flex items-center gap-2 mb-4">
                <Award className="text-primary" size={20} />
                <h3 className="text-lg font-semibold">Core Values</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">
                    Reliability & Security
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">
                    Continuous Learning
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">
                    Team Collaboration
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">
                    Technical Excellence
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
