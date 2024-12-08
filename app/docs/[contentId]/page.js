import ContentDisplay from "@/components/ContentDisplay";

export default function ContentPage({ params: { contentId } }) {
  console.log("ContentId", contentId);
  return <ContentDisplay id={contentId} />;
}
