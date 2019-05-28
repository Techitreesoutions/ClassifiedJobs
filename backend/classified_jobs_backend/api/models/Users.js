/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        firstName: {
            type: "string",
            required: true
        },
        lastName: {
            type: "string",
            required: true
        },
        experience: {
            type: "number",
            required: true
        },

        expected: {
            type: "number",
            required: true
        },
        expectedPeriod: {
            type: "string",
            required: true
        },
        title: {
            type: "string",
            required: false,
        },
        email: {
            type: "string",
            unique: true,
            required: true
        },
        phoneno: {
            type: "string",
            required: true
        },
        description: {
            type: "string",
            required: false
        },
        keyword: {
            type: 'json',
            columnType: 'array',
            required: false
        },
        preferredLocation: {
            type: 'json',
            columnType: 'array',
            required: true
        },
        hidePersonalInfo: {
            type: "boolean",
            required: false,
            defaultsTo: false
        }
    },

};
