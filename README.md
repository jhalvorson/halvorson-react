# Halvorson.co.uk - React & WP-API

> Work in progress 💩

[Blog post on why/how/wtf](https://halvorson.co.uk/blog/rebuilding-halvorson-co-uk-using-react-the-wp-api/)

A single paged WordPress React site that uses the WP-API for all content. Currently just pulls in custom fields and blog posts to a homepage, about page and blog. The site will be expanded to showcase projects in the future.

This site is incredibly simple, as it stands it has the following pages:

- Home
- About
- Blog
	- Single Blog

The site uses React, WP-API, React Router, React Motion, React Body Class, Classnames and was bootstrapped with `create-react-app`.

##Plugins in use

- [ACF Pro](https://www.advancedcustomfields.com/)
- [Rest API Console](https://wordpress.org/plugins/rest-api-console/)
- [ACF to Rest API](https://github.com/airesvsg/acf-to-rest-api)

##Plan 🚀

**The todo list:**

- [ ] React Router transitions
- [ ] Implement environment variables
- [X] Finish single post styles
- [X] Add pagination to blog
- [ ] Check proptypes
- [X] Add footer
- [ ] Add tests

**Way in the future:**

- [ ] Blog categories (WordPress, FabFit etc.)
- [ ] Add projects
- [ ] Add search to the blog
- [ ] Add recent work
- [ ] Add comments to blog posts
