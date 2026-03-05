// contentlayer.config.ts na RAIZ do projeto
import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`, // Isso vai procurar em todas as subpastas de contentDirPath
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: true },
  },
  computedFields: {
    slug: { 
      type: 'string', 
      resolve: (doc) => doc._raw.sourceFileName.replace('.md', '') 
    },
    displayImage: {
      type: 'string',
      resolve: (post) => post.image.replace(/\r/g, '').trim(),
    },
  },
}))

export default makeSource({ 
  contentDirPath: 'src/posts', // Aponta para onde seus arquivos .md estão
  documentTypes: [Post] 
})