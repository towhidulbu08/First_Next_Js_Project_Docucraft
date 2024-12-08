import ContentDisplay from "@/components/ContentDisplay";

export default function SubContentPage({ params: { subcontentId } }) {
  return <ContentDisplay id={subcontentId} />;
}
