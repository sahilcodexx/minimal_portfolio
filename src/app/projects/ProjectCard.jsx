import Container from "@/components/layouts/Container";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import Website from "@/components/icons/social/Website";
import Github from "@/components/icons/social/Github";
import { ArrowRight } from "lucide-react";
import { ProjectCardData } from "@/config/projects/ProjectCardData";
import { motion as Motion } from "motion/react";
import Skill from "@/components/common/Skills";
const ProjectCard = ({ completed = ProjectCardData, limit }) => {
  const displayedProjects = limit ? completed.slice(-limit) : completed;
  return (
    <Container
      className={`mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2`}
    >
      {displayedProjects.toReversed().map((items, index) => {
        return (
          <Motion.div
            key={items.id ?? items.title}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter : "blur(0)" }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
              delay: index * 0.1,
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-4 will-change-transform"
          >
            <Card className="group h-full w-full overflow-hidden border-transparent ring ring-gray-200/70 p-0 shadow-sm dark:ring-neutral-800">
              <CardHeader className="overflow-hidden p-0">
                <img
                  width={1920}
                  height={1080}
                  src={items.img.src}
                  alt={items.img.alt}
                  loading="lazy"
                  className="transition-transform duration-300 group-hover:scale-105"
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
                      <Link
                        to={items.links.website}
                        className="text-secondary hover:text-primary flex size-6 items-center justify-center transition-colors"
                        href=""
                        target="_blank"
                        title="View Website"
                      >
                        <Website />
                      </Link>
                      <Link
                        to={items.links.github}
                        className="text-secondary hover:text-primary flex size-6 items-center justify-center transition-colors"
                        href=""
                        target="_blank"
                        title="View GitHub"
                      >
                        <Github />
                      </Link>
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
                      {items.technologies.slice(0, 4).map((tech, idx) => {
                        return (
                          <Skill
                            className={"text-black/75 dark:text-white/75"}
                            key={idx}
                            name={tech.name}
                            href={tech.href}
                          >
                            {tech.icon}
                          </Skill>
                          // <Tooltip key={tech.name}>
                          //   <TooltipTrigger>
                          //     <div className="size-6 transition-all duration-300 hover:scale-120 hover:cursor-pointer">
                          //       {tech.icon}
                          //     </div>
                          //   </TooltipTrigger>
                          //   <TooltipContent>{tech.name}</TooltipContent>
                          // </Tooltip>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
              {items.details && (
                <CardFooter className="flex w-full items-center justify-between px-4 py-6 pt-0">
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
                    className="text-secondary hover:text-primary flex items-center gap-2 text-sm underline-offset-4 transition-colors duration-200 ease-[ease] hover:underline"
                  >
                    View Details <ArrowRight className="mt-0.5 size-4" />
                  </Link>
                </CardFooter>
              )}
            </Card>
          </Motion.div>
        );
      })}
    </Container>
  );
};

export default ProjectCard;
