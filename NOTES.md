
# Ideas

title options: “composable components for getting stuff done”

ListPageHero - Used in many places on marketing pages, expects certain
props. For blog, need almost the exact same component, but with a form
to follow our blog. Solution is to create SplitHeroLayout that is now
used by ListPageHero, and can be used by the blog to insert the “follow
us” email form. 

## Intro

Composing components for a production app in a way that allows you get things done 
quickly. 

## Background

There are two of us at homezen, we not only build the product, but the marketing pages. Being able
to quickly tweak styles, keep our brand and style guide enforced with little overhead is something
that is extremely important (like it is for everyone, just giving context). After falling into the
mistake, that I believe, many people new to react make and creating large "reusable" components,
then having to make drastic overhauls to our site, we realized we were not utilizing the power of functional 
components.

## Base components



```js
export const H1 = ({className, ...props}) => (
    <h1 className={mergeClassNames(styles.h1, className)} {...props} />
)
```


(Maybe) Notice we take a `className` prop here (can take style or similar if using css in js), 
this is there in case you want to apply a class to some margin, maybe a border, but you shouldn't be
applying much else or overriding the styles set by this component.

If you find yourself needing to override existing styles, that probably means you need a new base
component... or a presentational component. 

Seems super simple, and maybe even a little stupid. 

See a lot of examples for Button, Input, but what about p, h1-h6.

Using CSS modules, CSS in JS, styled components? Doesn't really matter your css solution, this
approach will work. 

- Consistent styling across your app
- Easy to change/update styles
- Quickly put together new pages
- CSS not needed for basic consistent styles. 


"Why not just add a class to it?" - Why add a class 


It is worth noting scales here. <insert links to scale blog posts> I won't talk much on it, and have
linked to some posts on its usefulness. However, what I will mention is that scales, like base
components, give you predictable consistent styles in your app. I strongly encourage using scales
for all things related to size, margin/padding (spacing scale), font sizes, etc. Along these lines,
we should have scales for some of our base components. Headings are naturally scaled, by using
h1-h6, but links and buttons should take a `size` prop (suggest 1-6). I have seen examples of
`BigButton`, `SmallButton`, and while this is fine for some apps, large production apps need to be
able to make things look just right for every scenario, and taking a `size` prop allows for great
flexibility, and is easy to use. 

Add loading to existing button - easy and simple, and applies across the board.


## Presentational components

Lets say you have a button, we'll call `NextButton`, it has a right chevron after the text. You
could do the following: 

```jsx
<Button onClick={foo} className={styles.workflowButton}>
    {'Continue'}
    <Chevron right />
</Button>
```

The styling aligns the chevron, you still get default button styles by using base component.
Everything is all good... until you need that button again.. at this point you pull the same class 
to align the chevron and text, not a ton of boilerplate, probably fine. However, this is were
presentational components come in. A presentational component builds on base components, but adds
some extra styling. The presentational component for this could look like the below.

```jsx 
export const NextButton = ({children, ...props}) => (
    <Button {...props} className={styles.nextButton}>
        {children}
        <Chevron right />
    </Button>
)
```

Again, simple, not awful to duplicate, but assures consistent style, and now adding a `NextButton`
in your app is dead simple.

It is worth mentioning that I am a big fan of "duplication over the wrong abstraction". This
strategy works better if you are not cluttering up presentational components with every possible
presentational component. The way we determine this at homezen is based on a couple things. 

1. Based on a design, is this a component we are reusing exactly as is, throughout the app
1. Have we repeated this component a couple, or a few, times. Having the same component twice
   doesn't always mean it is a good canidate for a presentational component. If it isn't clear this
   is a component that will be used multiple times, then it is probably better to leave the
   duplication until that becomes clear.

Creating a presentational component and refactoring components to use it is much simpler then
undoing the use of a presentational component built on the wrong abstraction. 


With just base and presentational components, you can quickly change styles, colors, fonts, etc for your app without a
painful refactor. It also allows building basic components to be super quick, freeing you up to
think or work on more complicated aspects of your app. 


## Layout components
step guide page and tip library guide page look basically identical, but
they're not, its the layout that is consistent. Perfect for layout
component. 

- Quickly add common layouts
- Similarly laid out components, are not necessarily same component (use layout instead of flags
  etc).


## power of combining these component types 

- Can put together components without much css, this allows css for a component to be pretty
  specific and reduces boilerplate.
- Was able to build our blog super quickly. 
    
    

Show the benefits how/why - what backing it up.

**establish problems/goals/solution
evolution of how we got here - wrappers 

graph - show one end html elements wrapped, single one time use on far end
start with base, build one time page, identify patterns.

Show components using base components to show how to build pages quickly
Style guide
