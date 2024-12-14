import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc-util";

export default function TagPage({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocs = getDocumentsByTag(docs, name);
  return <ContentDisplay id={matchedDocs[0].id} />;
}
