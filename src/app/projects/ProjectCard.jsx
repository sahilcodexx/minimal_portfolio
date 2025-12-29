import Container from "@/components/layouts/Container";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Website from "@/svgs/Website";
import Github from "@/svgs/Github";
import JavaScript from "@/technologies/JavaScript";
import { ArrowRight } from "lucide-react";
import { ProjectCardData } from "@/config/projects/ProjectCardData";
const ProjectCard = () => {
  return (
    <Container
      className={`mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2`}
    >
      {ProjectCardData.map((items) => {
        return (
          <Card
            key={items.id}
            className="group h-full w-full overflow-hidden border-gray-100 p-0 shadow-none transition-all dark:border-gray-800"
          >
            <CardHeader className="p-0">
              <img
                width={1920}
                height={1080}
                src={items.img.src}
                alt={items.img.alt}
              />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <Link href="">
                    <h3 className="group-hover:text-primary text-xl leading-tight font-semibold hover:cursor-pointer">
                      {items.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2">
                    <Tooltip>
                      <TooltipTrigger>
                        <Link
                          to={items.links.website}
                          className="text-secondary hover:text-primary flex size-6 items-center justify-center transition-colors"
                          href=""
                          target="_blank"
                        >
                          <Website />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View Website</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger>
                        <Link
                          to={items.links.github}
                          className="text-secondary hover:text-primary flex size-6 items-center justify-center transition-colors"
                          href=""
                          target="_blank"
                        >
                          <Github />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
                <p className="text-secondary line-clamp-3">
                  {items.description}
                </p>
                <div>
                  <h4 className="text-secondary mb-2 text-sm font-medium">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.technologies.map((tech) => {
                      return (
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="size-6 transition-all duration-300 hover:scale-120 hover:cursor-pointer">
                              {tech.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>{tech.name}</TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
            {items.details && (
              <CardFooter className="flex justify-between p-6 pt-0">
                <div
                  className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs ${
                    items.isWorking
                      ? "border-green-300 bg-green-500/10"
                      : "border-red-300 bg-red-500/10"
                  }`}
                >
                  {items.isWorking ? (
                    <>
                      <div className="size-2 animate-pulse rounded-full bg-green-500" />
                      All Systems Operational
                    </>
                  ) : (
                    <>
                      <div className="size-2 animate-pulse rounded-full bg-red-500" />
                      Building
                    </>
                  )}
                </div>
                <Link
                  to={items.projectDetailsPageSlug}
                  className="text-secondary hover:text-primary flex items-center gap-2 text-sm underline-offset-4 transition-colors hover:underline"
                >
                  View Details <ArrowRight className="size-4" />
                </Link>
              </CardFooter>
            )}
          </Card>
        );
      })}
    </Container>
  );
};

export default ProjectCard;
