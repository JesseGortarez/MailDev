# MailDev: HTML Email Development Support

## Why?

Email development suffers from a serious lack of standards and continues to fall behind web development practices which benefit greatly from standardization. Despite the headaches developing for email can cause, it's still one of the best ways to communicate with your users and customers. Since we have to do it, we might as well look for ways to make it easier. MailDev is here as a simple tool comprised of several other simple tools to help us developers get our email projects completed correctly and much more quickly.

## Setup

- Install Node
- Run `npm install` to get the necessary packages.
- Run `grunt` to build and watch (with live reload) template files.

## Working with MailDev

**A sample layout is included which can be viewed at http://localhost:3333/[http://localhost:3333/] after you run `grunt`**

In `assets/modules` you'll find handlebars partials - Note: handlebars can be swapped out for other templating languages such as haml. Simply install the proper grunt task and rewrite the template files as necessary. These modules all take the same format, with the exception of the media query. Each module contains some element or abstracted template component wrapped in a `<table></table>` element. This `<table>` element should have attributes for `border`, `cellpadding`, and `cellspacing`. Other options are to include specific `width` and `align` attributes. Additionally, for further styling needs, a `class` should be added to the `table`.

### Styles

In `assets/modules` are `less` files. `all.less` is the main file where all partials are imported and eventually compiled by `grunt`. Depending on your coding style and preference, new modules can have stylesheets broken out by module name such as `_buttons.less` and `_layout.less` or simply include all code directly in `all.less` - the choice is yours.




## Troubleshooting

If you run into issues with `npm install`, you may need to install Command Line Utilities (on Mac).

The utilities can be installed (on Mac) with `xcode-select --install`.
