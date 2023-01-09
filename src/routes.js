/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const { 
  addNoteHandler, 
  getAllNotesHandler, 
  getNoteByIdHandler, 
  editNoteByIdHandler,
  deleteNoteByIdHandler,
 } = require('./handler');

const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    {
      method: 'PUT',
      path: '/notes/{id}',
      handler: editNoteByIdHandler,
    },
    {
      method: 'DELETE',
      path: '/notes/{id}',
      handler: deleteNoteByIdHandler,
    },
  ];

// eslint-disable-next-line eol-last
module.exports = routes;