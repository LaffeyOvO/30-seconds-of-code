export default (id, snippetNode, markdownNode) => {
  return {
    id: snippetNode.id,
    tags: snippetNode.tags,
    expertise: snippetNode.expertise,
    title: snippetNode.title,
    code: snippetNode.code,
    slug: snippetNode.slug,
    url: snippetNode.url,
    path: markdownNode.fileAbsolutePath,
    text: snippetNode.text,
    language: snippetNode.language,
    icon: snippetNode.icon,
    ranking: snippetNode.ranking,
    firstSeen: snippetNode.firstSeen,
    lastUpdated: snippetNode.lastUpdated,
    searchTokens: snippetNode.searchTokens,
  };
};
