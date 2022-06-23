export default {
    title: 'About',
    name: 'about',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'First Paragraph',
            name: 'first',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
            ],
        },
        {
            title: 'Second Paragraph',
            name: 'second',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
            ],
        },
        {
            title: 'Third Paragraph',
            name: 'third',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
            ],
        },
        {
            title: 'Images',
            name: 'images',
            type: 'array',
            of: [{ type: 'picture' }],
        },
        {
            name: 'skillsets',
            title: 'Skillsets',
            type: 'array',
            of: [{ type: 'skillset' }],
        },
    ],
};
