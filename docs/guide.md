---
title: Developer Guide
date: 2016-05-29
collection: main
collectionSort: 0
layout: guide-listing.hbs
-------------------------

This is the guide listings page. Add documents to the guide by adding the `guide` collection to the yaml frontmatter.

Example:

`docs/guide/installation.md`
```markdown
---
title: Installation
date: 2016-06-03
collection: guide
collectionSort: 0
layout: guide-listing.hbs

---

## Quickstart

$ npm install my-awesome-package

```

Note the `collectionSort` metadata property can be added to sort the items in the collection