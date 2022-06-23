export default {
    name: 'gif',
    type: 'document',
    title: 'Gif',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule) => Rule.required().error('Please select a gif.'),
        },
        {
            name: 'url',
            type: 'string',
            title: 'URL',
            validation: (Rule) => Rule.required().error('Please select a gif.'),
        },
    ],
};
