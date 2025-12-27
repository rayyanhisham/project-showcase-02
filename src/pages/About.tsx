import { GraduationCap, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const skillBands = ["Introduced", "Familiar", "Proficient", "Advanced", "Expert"];

// 1..5 -> percent fill across the bar
const levelToPercent = (level) => {
  const clamped = Math.min(5, Math.max(1, level));
  return ((clamped - 1) / 4) * 100; // 1=0%, 5=100%
};

const About = () => {
  const skillGroups = [
    {
      title: "Computer Aided Design (CAD)",
      skills: [{ name: "SolidWorks (CAD / FEA)", level: 5 }],
    },
    {
      title: "Programming & Tools",
      skills: [
        { name: "MATLAB", level: 3 },
        { name: "Python", level: 3 },
        { name: "Arduino IDE", level: 3 },
        { name: "MS Office", level: 2 },
      ],
    },
    {
      title: "Robotics & Mechanics",
      skills: [
        { name: "Vehicle Dynamics", level: 4 },
        { name: "Robot Design", level: 4 },
        { name: "Kinematics", level: 4 },
        { name: "Stress Analysis", level: 3 },
        { name: "Manufacturing Processes", level: 4 },
        { name: "3D Printing", level: 2 },
        { name: "Robot Motion Planning", level: 2 },
      ],
    },
  ];

  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1>

          {/* Bio */}
          <section className="mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a Mechanical Engineering student with a passion for designing and
              building real-world systems. I enjoy taking projects from concept to CAD,
              prototyping, testing, and iteration—especially in robotics and vehicle
              dynamics.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’ve contributed to Cal Poly Pomona Formula SAE (Vehicle Dynamics),
              led mechanical design for a 5-axis ice-cream scooping robot, and designed
              a thrust-vectoring rocket prototype—focused on performance, reliability,
              and manufacturability.
            </p>
          </section>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <GraduationCap className="text-primary" size={24} />
                <CardTitle className="text-lg">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">B.S. Mechanical Engineering</p>
                <p className="text-muted-foreground">
                  California State Polytechnic University, Pomona
                </p>
                <p className="text-sm text-muted-foreground mt-1">2024 – Present</p>

                <div className="mt-4">
                  <p className="font-medium">
                    A.S. Engineering, Physics, Mathematics
                  </p>
                  <p className="text-muted-foreground">Fullerton College</p>
                  <p className="text-sm text-muted-foreground mt-1">2022 – 2024</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <MapPin className="text-primary" size={24} />
                <CardTitle className="text-lg">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Southern California, USA</p>
                <p className="text-muted-foreground">
                  Open to relocation for the right opportunity
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Experience (Newest → Oldest) */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Briefcase className="text-primary" size={24} />
              Experience Highlights
            </h2>

            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold">
                  Cal Poly Pomona Formula SAE | Bronco Motorsports (Vehicle Dynamics)
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Jun 2025 – Present
                </p>
                <p className="text-muted-foreground">
                  Design and analyze suspension components and kinematics in
                  SolidWorks; support alignment testing; contribute to manufacturing
                  decisions and cross-team integration.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold">
                  Ice-Cream Scooping Robot | 5-axis Autonomous Robot (Mechanical Lead)
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  May 2024 – Present
                </p>
                <p className="text-muted-foreground">
                  Designed a 5-axis robot in SolidWorks; implemented belt-driven arm
                  architecture to reduce torque demand; fabricated and assembled
                  components from CAD drawings.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold">Undergraduate Research</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Cal Poly Pomona | May 2024 – Aug 2024
                </p>
                <p className="text-muted-foreground">
                  Benchmarked CNN architectures across datasets and parameter budgets;
                  tracked performance metrics and documented results in an unpublished
                  technical paper.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold">
                  Thrust-Vector Rocket | PID-Controlled Model (Design Lead)
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Mar 2024 – Jun 2025
                </p>
                <p className="text-muted-foreground">
                  Designed thrust-vectoring gimbal and mounts; calculated and simulated
                  CP/CG for stability; iterated designs to meet a 750 g mass constraint.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold">Manufacturing Intern (Unpaid)</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Clayton Engineered Solutions | Jun 2021 – Aug 2021
                </p>
                <p className="text-muted-foreground">
                  Supported manufacturing process analysis and assembly/fabrication
                  using CAD drawings and hand tools.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold">
                  SEMA Engine Build Competition | Team Captain
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Sep 2018 – Mar 2020
                </p>
                <p className="text-muted-foreground">
                  Led a team completing 250+ timed engine rebuilds with strict torque
                  specifications under competition constraints.
                </p>
              </div>
            </div>
          </section>

          {/* Skillset (inspired layout) */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Skillset</h2>

            <div className="space-y-10">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="uppercase tracking-wide text-sm font-semibold mb-4 text-muted-foreground">
                    {group.title}
                  </h3>

                  {/* Scale Header */}
                  <div className="grid grid-cols-[240px_1fr] gap-6 items-end mb-3">
                    <div className="hidden md:block" />
                    <div className="hidden md:grid grid-cols-5 text-xs text-muted-foreground">
                      {skillBands.map((b) => (
                        <div key={b} className="text-center">
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {group.skills.map((skill) => (
                      <div
                        key={`${group.title}-${skill.name}`}
                        className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-3 md:gap-6 items-center"
                      >
                        {/* Skill name */}
                        <div className="text-sm font-medium">{skill.name}</div>

                        {/* Bar */}
                        <div className="w-full">
                          {/* Mobile label */}
                          <div className="md:hidden flex justify-between text-xs text-muted-foreground mb-1">
                            <span>Level</span>
                            <span>{skillBands[skill.level - 1]}</span>
                          </div>

                          <div className="relative">
                            {/* Track */}
                            <div className="h-2 w-full bg-secondary rounded-full" />

                            {/* Segment ticks */}
                            <div className="absolute inset-0 grid grid-cols-5">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <div
                                  key={i}
                                  className={`relative ${
                                    i !== 4 ? "border-r border-muted/40" : ""
                                  }`}
                                />
                              ))}
                            </div>

                            {/* Fill */}
                            <div
                              className="absolute left-0 top-0 h-2 bg-primary rounded-full"
                              style={{ width: `${levelToPercent(skill.level)}%` }}
                            />

                            {/* Indicator dot */}
                            <div
                              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow"
                              style={{
                                left: `calc(${levelToPercent(skill.level)}% - 6px)`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
