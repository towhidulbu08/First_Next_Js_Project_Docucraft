import fs from "fs";
import path from "path";

import matter from "gray-matter";

import { remark } from "remark";

import remarkHtml from "remark-html";

const postDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {
  const fileNames = fs.readdirSync(postDirectory);

  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");

    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // console.log(fileContents);

    const matterResult = matter(fileContents);
    //console.log(matterResult);

    return {
      id,
      ...matterResult.data,
    };
  });

  //console.log("All", allDocuments);

  return allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }

    return 0;
  });
}

export async function getDocumentContent(id) {
  const fullPath = path.join(postDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  //matterResult is an object

  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);

  //remark().process() একটি প্রসেসড অবজেক্ট রিটার্ন করে।

  const contentHtml = processedContent.toString();
  //.toString() ব্যবহার করে এটি একটি HTML স্ট্রিংয়ে রূপান্তরিত করা হয়।

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
