import { visit } from 'unist-util-visit';

// Prepend a base path to leading-slash links/definitions/images in markdown.
// Skips external URLs (http://, https://, //, mailto:, tel:), fragments, and
// links already prefixed with the base. Fragment-only and query-only URLs are
// left alone. The plugin is idempotent.
export default function remarkBasePath({ base } = {}) {
  if (typeof base !== 'string' || !base.startsWith('/')) {
    throw new Error(
      "remark-base-path: `base` is required and must start with '/'"
    );
  }
  // Normalise: ensure base is leading-slash, no trailing slash.
  const prefix = base.replace(/\/+$/, '');
  const prefixWithSlash = prefix + '/';

  return function transformer(tree) {
    visit(tree, ['link', 'linkReference', 'definition', 'image'], (node) => {
      const url = node.url;
      if (typeof url !== 'string' || url === '') return;
      // Skip external, protocol-relative, fragment, query, and non-http schemes.
      if (
        url.startsWith('http://') ||
        url.startsWith('https://') ||
        url.startsWith('//') ||
        url.startsWith('#') ||
        url.startsWith('?') ||
        url.startsWith('mailto:') ||
        url.startsWith('tel:')
      ) {
        return;
      }
      // Already prefixed.
      if (url === prefix || url === prefixWithSlash || url.startsWith(prefixWithSlash)) {
        return;
      }
      // Only rewrite leading-slash paths.
      if (url.startsWith('/')) {
        node.url = prefix + url;
      }
    });
  };
}
