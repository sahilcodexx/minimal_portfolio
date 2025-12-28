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
const ProjectCard = () => {
  return (
    <Container
      className={`mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2`}
    >
      <Card className="group h-full w-full overflow-hidden border-gray-100 p-0 shadow-none transition-all dark:border-gray-800">
        <CardHeader className="p-0">
          <img
            width={1920}
            height={1080}
            src="https://ramx.in/_next/image?url=%2Fproject%2Fnotesbuddy.png&w=1920&q=75"
            alt="image"
          />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <Link href="">
                <h3 className="group-hover:text-primary text-xl leading-tight font-semibold hover:cursor-pointer">
                  ChefyAi
                </h3>
              </Link>
              <div className="flex items-center gap-2">
                <Tooltip>
                  <TooltipTrigger>
                    <Link
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia
              rerum officiis
            </p>
            <div>
              <h4 className="text-secondary mb-2 text-sm font-medium">
                Technologies
              </h4>
              <Tooltip>
                <TooltipTrigger>
                  <div className="size-6 transition-all duration-300 hover:scale-120 hover:cursor-pointer">
                    <JavaScript />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>JavaScript</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between p-6 pt-0">
            
        </CardFooter>
      </Card>
    </Container>
  );
};

export default ProjectCard;
