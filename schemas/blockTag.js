export default {
    name: 'tag',
    type: 'document',
    title: 'Tag',
    fields: [
        {
            name: 'tag',
            type: 'string',
            title: 'Tag',
            validation: (Rule) => Rule.required().error('Please enter a tag.'),
        },
    ],
};
