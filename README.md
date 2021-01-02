# netlify-cms-editor-component-media-file-link

This package provides a link component especially for inserting links to uploaded files/media for for Netlify CMS for those times you need to upload and link to a PDF, DOC or similar.

The Netlify CMS media component already allows these files to be uploaded, but if you wanted to add a link to a non-image file you'd have to manually create the link.

Now, just point and click!

## Installation

Add this package to your Netlify CMS project

```
npm install netlify-cms-editor-component-media-file-link
```

## Usage

Import and register the component where Netlify CMS lives in your project.

```
<script src="https://unpkg.com/netlify-cms-editor-component-media-file-link/dist/index.js"></script>
...
<script>
  CMS.registerEditorComponent(NetlifyCmsEditorComponentMediaFileLink)
</script>
```
