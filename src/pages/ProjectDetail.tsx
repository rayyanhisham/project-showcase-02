import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Github, Video, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <Layout>
      <div className="container py-12">
        <Link
          to="/projects"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Project Image */}
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted border">
              <img
                src={project.images[0]}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tools */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tools & Software</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool} variant="outline">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specifications */}
            {project.specifications && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {project.specifications.map((spec, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Links */}
            {project.links && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {project.links.github && (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start"
                    >
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} className="mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                  )}
                  {project.links.video && (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start"
                    >
                      <a
                        href={project.links.video}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Video size={18} className="mr-2" />
                        Watch Video
                      </a>
                    </Button>
                  )}
                  {project.links.documentation && (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start"
                    >
                      <a
                        href={project.links.documentation}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText size={18} className="mr-2" />
                        Documentation
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
