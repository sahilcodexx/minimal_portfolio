import React, { useState } from "react";
import Container from "../layouts/Container";
import SectionHeading from "../common/SectionHeading";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "./theme-provider";

const Featured = () => {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const [contributions, setContributions] = useState(0);
  fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query {
  user(login: "sahil-coder-2070") {
    contributionsCollection {
      contributionCalendar {
        totalContributions
      }
    }
  }
}
    `,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      setContributions(
        data.data.user.contributionsCollection.contributionCalendar
          .totalContributions,
      );
    });

  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Container className={`mt-20`}>
      <SectionHeading subHeading={"Featured"} heading={"GitHub Activity"} />
      <div className="space-y-6">
        <div className="flex w-full justify-between">
          <p className="text-primary mt-1 text-sm font-medium">
            Total: <span className="font-bold">{contributions} </span>{" "}
            contributions
          </p>
          {/* <h3>Total: 1,916 contributions</h3> */}
        </div>
        <div className="inset-shadow bg-background/50 github-card-shadow relative flex items-center justify-center rounded-lg border border-black/10 p-2 px-5 py-2 backdrop-blur-sm sm:p-4 md:p-6 dark:border-white/10">
          <GitHubCalendar
            username="sahil-coder-2070"
            blockSize={7}
            blockMargin={5}
            colorScheme={currentTheme === "dark" ? "dark" : "light"}
            showTotalCount={false}
          />
        </div>
      </div>
    </Container>
  );
};

export default Featured;
