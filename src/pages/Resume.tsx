import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Resume = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Resume</h1>
              <p className="text-muted-foreground">
                Download or view my professional resume
              </p>
            </div>
            <Button size="lg">
              <Download size={18} className="mr-2" />
              Download PDF
            </Button>
          </div>

          {/* Resume Preview Card */}
          <Card className="mb-8">
            <CardContent className="p-8">
              {/* Header */}
              <div className="text-center mb-8 pb-6 border-b">
                <h2 className="text-2xl font-bold mb-1">Your Name</h2>
                <p className="text-muted-foreground">Mechanical Engineer</p>
                <p className="text-sm text-muted-foreground mt-2">
                  email@example.com • (555) 123-4567 • Southern California
                </p>
                <p className="text-sm text-muted-foreground">
                  linkedin.com/in/yourprofile • github.com/yourprofile
                </p>
              </div>

              {/* Education */}
              <section className="mb-8">
                <h3 className="text-lg font-semibold text-primary mb-4 uppercase tracking-wide">
                  Education
                </h3>
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">
                        Bachelor of Science in Mechanical Engineering
                      </p>
                      <p className="text-muted-foreground">
                        California State Polytechnic University, Pomona
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">May 2024</p>
                  </div>
                  <p className="text-sm mt-1">
                    GPA: 3.7/4.0 • Dean's List • Honors Graduate
                  </p>
                </div>
              </section>

              {/* Experience */}
              <section className="mb-8">
                <h3 className="text-lg font-semibold text-primary mb-4 uppercase tracking-wide">
                  Experience
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">Formula SAE Team Lead</p>
                        <p className="text-muted-foreground">
                          Cal Poly Pomona Racing
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        2022 - 2024
                      </p>
                    </div>
                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                      <li>
                        Led team of 15 students in designing and building an
                        electric race car
                      </li>
                      <li>
                        Reduced chassis weight by 30% through optimized tubular
                        steel design
                      </li>
                      <li>
                        Managed $50,000 budget and coordinated with 10+ industry
                        sponsors
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">
                          Mechanical Engineering Intern
                        </p>
                        <p className="text-muted-foreground">
                          Engineering Company
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Summer 2023
                      </p>
                    </div>
                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                      <li>
                        Created detailed CAD models and engineering drawings for
                        production
                      </li>
                      <li>
                        Performed FEA analysis reducing product development
                        cycle by 20%
                      </li>
                      <li>
                        Collaborated with manufacturing team on DFM improvements
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Skills */}
              <section className="mb-8">
                <h3 className="text-lg font-semibold text-primary mb-4 uppercase tracking-wide">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="font-medium">CAD/CAE: </span>
                    <span className="text-muted-foreground">
                      SolidWorks, CATIA, Fusion 360, ANSYS, HyperMesh
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Programming: </span>
                    <span className="text-muted-foreground">
                      MATLAB, Python, Arduino, G-code
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Manufacturing: </span>
                    <span className="text-muted-foreground">
                      CNC, 3D Printing, Welding, Sheet Metal
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Analysis: </span>
                    <span className="text-muted-foreground">
                      FEA, CFD, GD&T, Tolerance Analysis
                    </span>
                  </div>
                </div>
              </section>

              {/* Projects */}
              <section>
                <h3 className="text-lg font-semibold text-primary mb-4 uppercase tracking-wide">
                  Selected Projects
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">6-DOF Robotic Arm</p>
                    <p className="text-sm text-muted-foreground">
                      Designed and manufactured a robotic arm achieving ±0.1mm
                      repeatability for precision assembly tasks
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Desktop CNC Router</p>
                    <p className="text-sm text-muted-foreground">
                      Built a 3-axis CNC machine from scratch with 0.05mm
                      accuracy for prototyping applications
                    </p>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>

          {/* Alternative View */}
          <div className="text-center text-muted-foreground">
            <FileText size={40} className="mx-auto mb-4 opacity-50" />
            <p className="text-sm">
              Upload your actual resume PDF to replace this placeholder
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
