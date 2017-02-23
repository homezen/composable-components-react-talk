// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  Appear,
  Code,
  Deck,
  Heading,
  Image,
  Link,
  Slide,
  Spectacle,
  Text,
} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
// Link
require('normalize.css')
require('spectacle/lib/themes/default/index.css')


const images = {
  homezenLogo: require('../assets/images/homezen-logo.png'),
  buttons: require('../assets/images/buttons.png'),
  buttonLinks: require('../assets/images/button-links.png'),
  testimonials: require('../assets/images/testimonials.png'),
  tipsLibraryHero: require('../assets/images/tips-library-hero.png'),
  tipsLibraryContent: require('../assets/images/tips-library-content.png'),
  blogHero: require('../assets/images/blog-hero.png'),
  blogContent: require('../assets/images/blog-content.png'),
  bellCurve: require('../assets/images/bellcurve.png'),
  bimodalDistribution: require('../assets/images/bimodal-dist.png'),
  styleGuideButtons: require('../assets/images/style-guide-buttons.png'),
}

preloader(images)

const theme = createTheme({
  primary: '#00c977', // homezen green
  secondary: '#212c31', // dark gray
  tertiary: '#f0f0f0', // light gray
  quartenary: 'white',
}, {
  primary: 'Open Sans Condensed',
  secondary: 'Lobster Two',
  tertiary: 'monospace',
})

/*
 * About
 */

// Real world composition using base components
const TitleSlide = (
  <Slide transition={['zoom']} bgColor="primary">
    <Heading size={1} fit caps lineHeight={2} textColor="secondary">
      {'Composable components for getting stuff done'}
    </Heading>
    <Text margin="1em 0 0 0" textColor="tertiary" size={1} fit bold>
      {'Using base and layout components to iterate quickly and build flexible applications.'}
    </Text>
  </Slide>
)

const AuthorSlide = (
  <Slide
    transition={['fade']}
    notes='product app ~ year; one major redesign; applied these patterns in redesign'
  >
    <Code
      bgColor='secondary'
      textColor='primary'
      textSize='3em'
      padding='0.1em 0.2em'
    >
      {'$ whoami'}
    </Code>
    <Heading size={1} fit caps lineHeight={1.5} textColor='secondary' margin='0.3em 0 0'>
      {'Patrick Gilday'}
    </Heading>
    <Heading size={4} fit textColor='tertiary' >
      {'engineer @ homezen'}
    </Heading>
    <Link href='https://www.myhomezen.com'>
      <Image src={images.homezenLogo} width={240} margin='4em auto 0' />
      <Text bold caps textColor='tertiary' margin='1em auto'>
        {'myhomezen.com'}
      </Text>
    </Link>
  </Slide>
)

const ContainerViewComponentsSlide = (
  <Slide>
    <Heading size={3} textColor='secondary'>
      {'Container Components'}
    </Heading>
    <Text margin='1em 0 2em 0' textColor='tertiary'>
      {'Handles prop manipulation and all logic'}
    </Text>
    <Heading size={3} textColor='secondary'>
      {'Presentational Components'}
    </Heading>
    <Text margin='1em 0' textColor='tertiary'>
      {'Stateless functional components that take props and return jsx'}
    </Text>
  </Slide>
)

const PresentationalComponentsBreakdownSlide = (
  <Slide>
    <Heading size={3} textColor='secondary'>
      {'Presentational Components'}
    </Heading>
    <Text margin='1em 0' textColor='tertiary'>
      {'Base components - core styles'}
    </Text>
    <Text margin='1em 0' textColor='tertiary'>
      {'Layout components - component structure'}
    </Text>
  </Slide>
)

const BackgroundSlide = (
  <Slide>
    <Heading size={1} textColor='secondary'>
      {'Background'}
    </Heading>
    <Text textColor='tertiary' margin='1em 0' >
      {'Built reusable components early on based on designs'}
    </Text>
    <Appear>
      <Text textColor='tertiary' margin='1em 0' >
        {'We ran user tests and iterated on designs'}
      </Text>
    </Appear>
    <Appear>
      <Text textColor='tertiary' margin='1em 0' >
        {'"Reusable" components quickly caused more harm then good'}
      </Text>
    </Appear>
  </Slide>
)

// TODO coupling between parent and children components
// Top point - Slow and difficult to add, update, or change existing components and styling
// Due to - strong coupling between components
const ProblemSlide = (
  <Slide>
    <Heading size={1} textColor='secondary'>
      {'The Problem'}
    </Heading>
    <Text textColor='tertiary' textSize='1.5em' margin='1em 0 2em 0' >
      {'Slow and difficult to add, update, or change existing components and styling'}
    </Text>
    <Text textColor='tertiary' textSize='1.5em' margin='1em 0 2em 0' >
      {'Conflated styles with function'}
    </Text>
  </Slide>
)

const BellCurveGraphSlide = (
  <Slide>
    <Heading size={3} textColor='secondary'>
      {'Component Distribution'}
    </Heading>
    <Image src={images.bellCurve} width='100%' />
  </Slide>
)

// Background and intro section


const SolutionSlide = (
  <Slide>
    <Heading size={1} textColor='secondary' >
      {'Solution'}
    </Heading>
    <Appear>
      <Text margin='1em 0' textColor='tertiary'>
        {'Only abstract things that are 100% reusable up front'}
      </Text>
    </Appear>
    <Appear>
      <Text margin='1em 0' textColor='tertiary'>
        {'Prefer duplication over the wrong abstraction'}
      </Text>
    </Appear>
  </Slide>
)

const SolutionComponentsBreakdownSlide = (
  <Slide
    notes='We already separated logic from view'
  >
    <Heading size={4} textColor='secondary'>
      {'What is 100% reusable up front?'}
    </Heading>
    <Appear>
      <Text margin='1em 0' textColor='tertiary'>
        {'HTML elements'}
      </Text>
    </Appear>
    <Appear>
      <Text margin='1em 0' textColor='tertiary'>
        {'Wrap HTML elements and apply core styles'}
      </Text>
    </Appear>
  </Slide>
)

const SolutionApproachBreakdownSlide = (
  <Slide>
    <Heading size={4} textColor='secondary'>
      {'Duplication over wrong abstraction'}
    </Heading>
    <Appear>
      <Text margin='1em 0' textColor='tertiary'>
        {'Just let it happen...'}
      </Text>
    </Appear>
    <Appear>
      <Text margin='1em 0' textColor='tertiary'>
        {'Use rule of 3s to identify patterns'}
      </Text>
    </Appear>
    <Appear>
      <Text margin='1em 0' textColor='tertiary'>
        {'Keep abstractions small and specific'}
      </Text>
    </Appear>
  </Slide>
)

const BimodalDistributionGraphSlide = (
  <Slide>
    <Heading size={3} textColor='secondary'>
      {'Component Distribution'}
    </Heading>
    <Image src={images.bimodalDistribution} width='100%' />
  </Slide>
)


/*
 * Base components section
 */

const BaseComponentsTitleSlide = (
  <Slide>
    <Heading size={1} textColor='secondary'>
      {'Base components'}
    </Heading>
    <Text margin='1em 0' textColor='tertiary'>
      {'Wraps HTML element'}
    </Text>
    <Text margin='1em 0' textColor='tertiary'>
      {'Applies application level styles'}
    </Text>
  </Slide>
)


const BaseComponentsSimpleExamplesSlide = (
  <CodeSlide
    notes='Can use Heading w/ size prop if you wish, point is basic elements with consistent styles'
    transition={[]}
    lang='jsx'
    code={require('!raw-loader!../assets/code/base.js')}
    ranges={[
      {loc: [0, 270], title: 'Base component examples'},
      {loc: [9, 10], note: 'CSS Modules disclaimer'},
      {loc: [12, 28], note: 'Wrappers around html elements'},
      {loc: [13, 15], note: 'Applies custom styles, and adds className'},
    ]} />
)

const BaseComponentsButtonExampleSlide = (
  <CodeSlide
    transition={[]}
    lang='jsx'
    code={require('!raw-loader!../assets/code/base.js')}
    ranges={[
      {loc: [68, 84], note: ''},
      {loc: [69, 74], note: 'Takes a couple extra props'},
      {loc: [76, 82], note: 'Only used for styling'},
      {loc: [82, 84], note: 'Pass through props'},
    ]} />
)

const ButtonsImageSlide = (
  <Slide>
    <Image src={images.buttons} width='100%' />
  </Slide>
)

const SeparateStylesFromFunctionalitySlide = (
  <Slide>
    <Heading size={3} textColor='secondary'>
      {'Separate styling from functionality'}
    </Heading>
  </Slide>
)

const BaseComponentsLinkExampleSlide = (
  <CodeSlide
    transition={[]}
    lang='jsx'
    code={require('!raw-loader!../assets/code/base.js')}
    ranges={[
      {loc: [106, 110], note: 'RawLink Component - adds functionality'},
      {loc: [118, 130], note: 'StyledLink - adds styling'},
      {loc: [141, 142], note: 'Export our styled link as our base link component'},
    ]} />
)

const WhySeparateLinkSlide = (
  <Slide>
    <Heading size={3} textColor='secondary'>
      {'But this is my base link?'}
    </Heading>
    <Appear>
      <Text margin='1em 0' textColor='tertiary'>
        {'What if we want a link that looks like a button?'}
      </Text>
    </Appear>
  </Slide>
)

const BaseComponentsButtonLinkExampleSlide = (
  <CodeSlide
    transition={[]}
    lang='jsx'
    code={require('!raw-loader!../assets/code/base.js')}
    ranges={[
      {loc: [144, 160], note: 'ButtonLink Component'},
      {loc: [145, 150], note: 'Same extra props as Button'},
      {loc: [151, 158], note: 'Uses RawLink with button styles'},
    ]} />
)

const ButtonLinksImageSlide = (
  <Slide>
    <Image src={images.buttonLinks} width='100%' />
  </Slide>
)

const TestimonialComponentSlide = (
  <CodeSlide
    transition={[]}
    lang='jsx'
    code={require('!raw-loader!../assets/code/testimonial.js')}
    ranges={[
      {loc: [10, 27], note: 'Component using base components'},
      {loc: [2, 8], note: 'Imports base components'},
      {loc: [15, 26], note: 'Uses base components - needs minimal styling'},
    ]} />
)

const TestimonialsImageSlide = (
  <Slide>
    <Image src={images.testimonials} width='100%' />
  </Slide>
)

const StyleGuideIntroSlide = (
  <Slide>
    <Text textColor='secondary'>
      {'JSX only style guide'}
    </Text>
  </Slide>
)

const StyleGuideCodeSlide = (
  <CodeSlide
    transition={[]}
    lang='jsx'
    code={require('!raw-loader!../assets/code/style-guide.js')}
    ranges={[
      {loc: [61, 76], note: 'Easy to use jsx'},
      {loc: [79, 94], note: ''},
      {loc: [97, 118], note: ''},
    ]} />
)

const StyleGuideButtonsImageSlide = (
  <Slide bgImage={images.styleGuideButtons} />
)

/*
 * Layout components section
 */

const LayoutComponentsIntroSlide = (
  <Slide>
    <Heading size={3} textColor='secondary'>
      {'Layout Components'}
    </Heading>
    <Text margin='1em 0' textColor='tertiary'>
      {'Handles responsive layouts'}
    </Text>
    <Text margin='1em 0' textColor='tertiary'>
      {'Agnostic of parent and children components'}
    </Text>
  </Slide>
)

const TipsLibraryImageSlide = (
  <Slide>
    <Image src={images.tipsLibraryHero} width='100%' />
  </Slide>
)

const ListPageHeroAbstractionSlide = (
  <CodeSlide
    transition={[]}
    lang='js'
    code={require('!raw-loader!../assets/code/list-page-hero-initial.js')}
    ranges={[
      {loc: [8, 28], note: ''},
    ]} />
)

const BlogHeroImageSlide = (
  <Slide>
    <Image src={images.blogHero} width='100%' />
  </Slide>
)

const SplitPaneLayoutSlide = (
  <CodeSlide
    transition={[]}
    lang='js'
    code={require('!raw-loader!../assets/code/layouts.js')}
    ranges={[
      {loc: [6, 25], note: 'Using a layout component'},
      {loc: [15, 21], note: 'Places children in layout'},
    ]} />
)

const BlogHeroCodeSlide = (
    <CodeSlide
        transition={[]}
        lang='js'
        code={require('!raw-loader!../assets/code/blog-hero.js')}
        ranges={[
            {loc: [8, 15], note: 'Using a layout approach'},
            {loc: [10, 11], note: 'First child'},
            {loc: [11, 12], note: 'Second child'},
        ]} />
)

const SplitPaneLayoutImagesSlide = (
  <Slide>
    <Image src={images.blogHero} width='80%' />
    <Image src={images.tipsLibraryHero} width='80%' />
  </Slide>
)

const LayoutsAnywhereOnPageSlide = (
  <Slide>
    <Text>
      {'Multiple layout components on one page'}
    </Text>
  </Slide>
)

const TipsLibraryContentImageSlide = (
  <Slide>
    <Image src={images.tipsLibraryContent} width='100%' />
  </Slide>
)

const BlogContentImageSlide = (
  <Slide notes='explain goals - sticky aside, stacking, consistent padding between menu/content'>
    <Image src={images.blogContent} width='100%' />
  </Slide>
)


const StickyAsideLayoutSlide = (
  <CodeSlide
    transition={[]}
    lang='jsx'
    code={require('!raw-loader!../assets/code/layouts.js')}
    ranges={[
      {loc: [31, 35], note: 'Slightly more complex layout component'},
      {loc: [44, 48], note: 'Prop for menu to stack below content'},
      {loc: [48, 59], note: 'Use `Sticky` component on desktop and `div` when stacked on mobile'},
      {loc: [60, 63], note: 'Add second child as content'},
    ]} />
)

const BlogPageCodeSlide = (
  <CodeSlide
    transition={[]}
    lang='jsx'
    code={require('!raw-loader!../assets/code/blog-page.js')}
    ranges={[
      {loc: [13, 25], note: 'Using both layout components'},
      {loc: [15, 19], note: 'Could use previous BlogHero component'},
      {loc: [20, 24], note: 'Our new StickyAsideLayout'},
    ]} />
)

const DemoSlide = (
  <Slide>
    <Heading size={1} textColor='secondary'>
      {'See it all in action!'}
    </Heading>
  </Slide>
)

const ThanksSlide = (
  <Slide>
    <Heading size={1} textColor='secondary'>
      {'Thanks'}
    </Heading>
    <Text textColor='tertiary'>
      {'Questions?'}
    </Text>
  </Slide>
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500}>
          {TitleSlide}
          {AuthorSlide}
          {ContainerViewComponentsSlide}
          {PresentationalComponentsBreakdownSlide}
          {BackgroundSlide}
          {BellCurveGraphSlide}
          {ProblemSlide}
          {SolutionSlide}
          {SolutionComponentsBreakdownSlide}
          {SolutionApproachBreakdownSlide}
          {BimodalDistributionGraphSlide}
          {PresentationalComponentsBreakdownSlide}



          {BaseComponentsTitleSlide}
          {BaseComponentsSimpleExamplesSlide}
          {BaseComponentsButtonExampleSlide}
          {ButtonsImageSlide}

          {SeparateStylesFromFunctionalitySlide}
          {BaseComponentsLinkExampleSlide}
          {WhySeparateLinkSlide}
          {BaseComponentsButtonLinkExampleSlide}
          {ButtonLinksImageSlide}

          {TestimonialComponentSlide}
          {TestimonialsImageSlide}
          {StyleGuideIntroSlide}
          {StyleGuideCodeSlide}
          {StyleGuideButtonsImageSlide}


          {LayoutComponentsIntroSlide}
          {TipsLibraryImageSlide}
          {ListPageHeroAbstractionSlide}
          {BlogHeroImageSlide}
          {SplitPaneLayoutSlide}
          {BlogHeroCodeSlide}
          {SplitPaneLayoutImagesSlide}

          {LayoutsAnywhereOnPageSlide}
          {TipsLibraryContentImageSlide}
          {BlogContentImageSlide}
          {StickyAsideLayoutSlide}
          {BlogPageCodeSlide}

          {DemoSlide}
          {ThanksSlide}
        </Deck>
      </Spectacle>
    )
  }
}
