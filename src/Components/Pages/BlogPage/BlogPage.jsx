import style from "./BlogPage.module.css";
import { BlogFooter } from "./BlogPageComponents/BlogFooter";
import { BlogNotes } from "./BlogPageComponents/BlogNotes";
import { ReactBlock } from "./BlogPageComponents/ReactBlock";
import { ReactBlog } from "./BlogPageComponents/ReactBlog";

export function BlogPage() {
  return (
    <div className={style.blog_page}>
      <ReactBlog />
      <ReactBlock
        h2={"React Conf 2024 Recap"}
        date={"May 22, 2024"}
        p={
          "Last week we hosted React Conf 2024, a two-day conference in Henderson, Nevada where 700+ attendees gathered in-person to discuss the latest in UI engineering. This was our first in-person conference since 2019, and we were thrilled to be able to bring the community together again …"
        }
      />
      <ReactBlock
        h2={"React 19 RC"}
        date={"April 25, 2024"}
        p={
          "In the React 19 RC Upgrade Guide, we shared step-by-step instructions for upgrading your app to React 19. In this post, we’ll give an overview of the new features in React 19, and how you can adopt them …"
        }
      />
      <ReactBlock
        h2={"React 19 RC Upgrade Guide"}
        date={"April 25, 2024"}
        p={
          "The improvements added to React 19 require some breaking changes, but we’ve worked to make the upgrade as smooth as possible, and we don’t expect the changes to impact most apps. In this post, we will guide you through the steps for upgrading libraries to React 19 …"
        }
      />
      <ReactBlock
        h2={"React Labs: What We`ve Been Working On-February 2024"}
        date={"February 15, 2024"}
        p={
          "In React Labs posts, we write about projects in active research and development. Since our last update, we’ve made significant progress on React Compiler, new features, and React 19, and we’d like to share what we learned."
        }
      />
      <ReactBlock
        h2={"React Canaries: Incremental Feature Rollout Outside Meta"}
        date={"May 3, 2023"}
        p={
          "Traditionally, new React features used to only be available at Meta first, and land in the open source releases later. We’d like to offer the React community an option to adopt individual new features as soon as their design is close to final—similar to how Meta uses React internally. We are introducing a new officially supported Canary release channel. It lets curated setups like frameworks decouple adoption of individual React features from the React release schedule."
        }
      />
      <ReactBlock
        h2={"React Labs: What We`ve Been Working On-March 2023"}
        date={"March 22, 2023"}
        p={
          "In React Labs posts, we write about projects in active research and development. Since our last update, we’ve made significant progress on React Server Components, Asset Loading, Optimizing Compiler, Offscreen Rendering, and Transition Tracing, and we’d like to share what we learned."
        }
      />
      <ReactBlock
        h2={"Introducing react.dev"}
        date={"March 16, 2023"}
        p={
          "Today we are thrilled to launch react.dev, the new home for React and its documentation. In this post, we would like to give you a tour of the new site."
        }
      />
      <ReactBlock
        h2={"React Labs: What We`ve Been Working On-June 2022"}
        date={"June 15, 2022"}
        p={
          "React 18 was years in the making, and with it brought valuable lessons for the React team. Its release was the result of many years of research and exploring many paths. Some of those paths were successful; many more were dead-ends that led to new insights. One lesson we’ve learned is that it’s frustrating for the community to wait for new features without having insight into these paths that we’re exploring…"
        }
      />
      <ReactBlock
        h2={"React v18.0"}
        date={"March 29, 2022"}
        p={
          "React 18 is now available on npm! In our last post, we shared step-by-step instructions for upgrading your app to React 18. In this post, we’ll give an overview of what’s new in React 18, and what it means for the future…"
        }
      />
      <ReactBlock
        h2={"How to Upgrade to React 18"}
        date={"March 8, 2022"}
        p={
          "As we shared in the release post, React 18 introduces features powered by our new concurrent renderer, with a gradual adoption strategy for existing applications. In this post, we will guide you through the steps for upgrading to React 18…"
        }
      />
      <ReactBlock
        h2={"React Conf 2021 Recap"}
        date={"December 17, 2021"}
        p={
          "Last week we hosted our 6th React Conf.  In previous years, we’ve used the React Conf stage to deliver industry changing announcements such as React Native and React Hooks. This year, we shared our multi-platform vision for React, starting with the release of React 18 and gradual adoption of concurrent features…"
        }
      />
      <ReactBlock
        h2={"Introducing Zero-Bundle-Size React Server Components"}
        date={"December 21, 2020"}
        p={
          "2020 has been a long year. As it comes to an end we wanted to share a special Holiday Update on our research into zero-bundle-size React Server Components. To introduce React Server Components, we have prepared a talk and a demo. If you want, you can check them out during the holidays, or later when work picks back up in the new year…"
        }
      />
      <BlogNotes />
      <BlogFooter />
    </div>
  );
}
