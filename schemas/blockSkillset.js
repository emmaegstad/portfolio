export default {
    name: 'skillset',
    type: 'document',
    title: 'Skillset',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule) => Rule.required().error('Please enter a tag.'),
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ],
};
