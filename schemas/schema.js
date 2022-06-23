import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import project from './blockProject';
import tag from './blockTag';
import gif from './blockGif';
import picture from './blockPicture';
import pageAbout from './pageAbout';
import skillset from './blockSkillset';

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        // blocks
        project,
        tag,
        gif,
        picture,
        skillset,

        // pages
        pageAbout,
    ]),
});
