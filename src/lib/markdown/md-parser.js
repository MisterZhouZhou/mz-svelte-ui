import MarkdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import highlight from './highlight';
import { slugify } from 'transliteration';

const parser = new MarkdownIt({
  html: true,
  highlight,
}).use(markdownItAnchor, {
  level: 2,
  slugify,
});

export default parser