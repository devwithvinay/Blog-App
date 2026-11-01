"use client";
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

function BlogList() {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/blog");
      setBlogs(response.data.blogs || []);
      // Debug: shows exactly what is stored in the DB
      console.log(response.data.blogs.map((b) => JSON.stringify(b.category)));
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const categories = ["All", "Technology", "Startup", "Lifestyle"];

  const filteredBlogs = blogs.filter((item) =>
    menu === "All"
      ? true
      : (item.category || "").trim().toLowerCase() === menu.toLowerCase(),
  );

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setMenu(cat)}
            className={`py-1 px-4 rounded-sm cursor-pointer ${
              menu === cat ? "bg-black text-white" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {filteredBlogs.map((item) => (
          <BlogItem
            key={item._id}
            id={item._id}
            image={item.image}
            title={item.title}
            description={item.description}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
