import React from 'react';

const fileLink = {
  label: 'Media file link',
  id: 'media-file-link',

  pattern: /^\[(.+)\]\(([A-Za-z0-9\:\/\. ]+)( \"(.+)\")?\)$/,

  fromBlock: match =>
    match && {
      file: match[2],
      linkText: match[1],
      title: match[4],
    },

  toBlock: ({ file, linkText, title }) =>
    `[${linkText || 'file link'}](${file || ''}${title ? ` "${title.replace(/"/g, '\\"')}"` : ''})`,
  
  toPreview: ({ file, linkText, title }, getAsset, fields) => {
    const fileField = fields?.find(f => f.get('widget') === 'file');
    const src = getAsset(file, fileField);
    return <a href={src || ''} title={title || ''}>{linkText}</a>
  },
  
  fields: [
    {
      label: 'File',
      name: 'file',
      widget: 'file',
      media_library: {
        allow_multiple: false,
      },
    },
    {
      label: 'Link text',
      name: 'linkText',
    },
    {
      label: 'Title (optional)',
      name: 'title',
    },
  ],
};

export const NetlifyCmsEditorComponentMediaFileLink = fileLink;
export default fileLink;
