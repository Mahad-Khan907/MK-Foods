import { defineType, defineField } from 'sanity';

export const report = defineType({
  name: 'message',
  title: 'Message',
  type: 'document',
  fields: [
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
    })
]
});