import RecentPostItem from "./RecentPostItem";
import { useState, useEffect } from "react";

function RecentPosts() {
  const sectionTitle = "News";
  let [selectedPosts, setSelectedPosts] = useState([]);

  let recentPostAmount = 10;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        let selected: any = [];
        for (let i = 0; i < recentPostAmount; i++) {
          selected.push(
            <RecentPostItem
              key={data[i].id}
              image={"https://picsum.photos/seed/" + data[i].id + "/400/700"}
              imageAlt={data[i].title}
              title={data[i].title}
              abstract={data[i].body}
            />
          );
        }
        setSelectedPosts(selected);
      });
  }, [recentPostAmount]);

  return (
    <div id="page-posts">
      <h2>{sectionTitle}</h2>
      <div className="post-container">{selectedPosts}</div>
    </div>
  );
}

export default RecentPosts;
