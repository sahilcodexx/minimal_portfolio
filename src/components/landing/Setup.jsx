import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import Container from "../layouts/Container";
import { Card } from "../ui/card";
import { ArrowRight, Code } from "lucide-react";
import Gear from "@/svgs/GearIcon";

const setup = [
  {
    name: "Gears Used",
    description: "Productivity Tools, Gears i use to get my work done.",
    icon: <Gear className="size-4" />,
    href: "/gear",
  },
  // {
  //   name: "VS Code / Cursor Setup",
  //   description: "VS Code / Cursor Setup i use daily.",
  //   icon: <Code className="size-4" />,
  //   href: "/setup",
  // },
];

export default function Setup() {
  return (
    <Container className="my-30">
      <SectionHeading subHeading="Development" heading="Setup" />
      <div className="mt-8 flex flex-col gap-4">
        {setup.map((item) => (
          <Link className="group" to={item.href} key={item.name}>
            <Card className="flex flex-row items-center justify-between gap-4 px-4 py-2">
              <div className="bg-muted flex items-center justify-center rounded-md p-2">
                {item.icon}
              </div>
              <div className="flex w-full flex-col">
                <h3 className="text-base font-semibold">{item.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
              <ArrowRight className="hidden size-4 transition-all duration-300 group-hover:block" />
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
