/* eslint max-len:0 */
import {
    noop,
} from 'lodash'
import React from 'react'
import classnames from 'classnames'
import {Flex, Box} from 'reflexbox'

import {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    H7,
    P,
    Button,
    Checkbox,
    Checkmark,
    LabeledCheckbox,
    Link,
    MarkdownContent,
    Input,
    Select,
    TextArea,
    Radio,
    LabeledRadio,
} from './base'
import {NextButton, NextLink, PreviousLink} from './presentational'
import styles from './style-guide.css'

const GuideSection = ({children, className}) => ( // eslint-disable-line react/prop-types
    <div className={classnames(className, styles.guideSection)}>
        {children}
    </div>
)

const StyleGuide = () => {
  return (
    <div>
      <GuideSection className={styles.section}>
        <H1>{'H1. Create a beautiful listing website'}</H1>

        <H2>{'H2. Answer a few simple questions.'}</H2>

        <H3>{'H3. Home size'}</H3>

        <H4>{'H4. Home details'}</H4>

        <H5>{'H5. Help your home stand out in a crowd.'}</H5>

        <H6>{'H6. Townhouse'}</H6>

        <H7>{'H7. Number of bedrooms'}</H7>
      </GuideSection>

      <GuideSection>
          <P size={5}>
              {'Font Scale Five'}
          </P>
          <P size={4}>
              {'Font Scale Four'}
          </P>
          <P size={3}>
              {'Font Scale Three'}
          </P>
          <P size={2}>
              {'Font Scale Two'}
          </P>
          <P size={1}>
              {'Font Scale One'}
          </P>
      </GuideSection>

      <GuideSection>
        <Button>
          {'Get Started'}
        </Button>

        <Button secondary>
          {'Get Started'}
        </Button>

        <Button disabled>
          {'Get Started'}
        </Button>

        <Button secondary disabled>
          {'Get Started'}
        </Button>
      <GuideSection>

      <GuideSection dark >
        <Button light >
          {'Get Started'}
        </Button>

        <Button light secondary >
          {'Get Started'}
        </Button>
        <Button light disabled >
          {'Get Started'}
        </Button>

        <Button light secondary disabled >
          {'Get Started'}
        </Button>
      </GuideSection>

      <GuideSection>
        <H3>{'Button Sizes'}</H3>
        <div className={styles.buttonRow}>
          <H4>{'size = 1'}</H4>
          <Button size={1}>
            {'Get Started'}
          </Button>
          <Button size={1} disabled>
            {'Get Started'}
          </Button>
        </div>
        <div className={styles.buttonRow}>
          <H4>{'size = 2 (default)'}</H4>
          <Button size={2}>
            {'Get Started'}
          </Button>
          <Button size={2} disabled>
            {'Get Started'}
          </Button>
        </div>
        <div className={styles.buttonRow}>
          <H4>{'size = 3'}</H4>
          <Button size={3}>
            {'Get Started'}
          </Button>
          <Button size={3} disabled>
            {'Get Started'}
          </Button>
        </div>
        <div className={styles.buttonRow}>
          <H4>{'size = 4'}</H4>
          <Button size={4}>
            {'Get Started'}
          </Button>
          <Button size={4} disabled>
            {'Get Started'}
          </Button>
        </div>
        <div className={styles.buttonRow}>
          <H4>{'size = 5'}</H4>
          <Button size={5}>
            {'Get Started'}
          </Button>
          <Button size={5} disabled>
            {'Get Started'}
          </Button>
        </div>
        <div className={styles.buttonRow}>
          <H4>{'size = 6'}</H4>
          <Button size={6}>
            {'Get Started'}
          </Button>
          <Button size={6} disabled>
            {'Get Started'}
          </Button>
        </div>
      </GuideSection>

      <GuideSection>
          <H2>{'links'}</H2>
          <div>
              <H4>{'size = 1'}</H4>
              <Link size={1} to='#'>
                  {'homezen link'}
              </Link>
          </div>
          <div>
              <H4>{'size = 2'}</H4>
              <Link size={2} to='#'>
                  {'homezen link'}
              </Link>
          </div>
          <div>
              <H4>{'size = 3 (default)'}</H4>
              <Link size={3} to='#'>
                  {'homezen link'}
              </Link>
          </div>
          <div>
              <H4>{'size = 4'}</H4>
              <Link size={4} to='#'>
                  {'homezen link'}
              </Link>
          </div>
          <div>
              <H4>{'size = 5'}</H4>
              <Link size={5} to='#'>
                  {'homezen link'}
              </Link>
          </div>
          <div>
              <H4>{'size = 6'}</H4>
              <Link size={6} to='#'>
                  {'homezen link'}
              </Link>
          </div>
      </GuideSection>
      <GuideSection>
          <H2>{'Next links'}</H2>
          <div>
              <H4>{'size = 1'}</H4>
              <NextLink size={1} to='#'>
                  {'Get Started'}
              </NextLink>
          </div>
          <div>
              <H4>{'size = 2'}</H4>
              <NextLink size={2} to='#'>
                  {'Get Started'}
              </NextLink>
          </div>
          <div>
              <H4>{'size = 3 (default)'}</H4>
              <NextLink to='#'>
                  {'Get Started'}
              </NextLink>
          </div>
          <div>
              <H4>{'size = 4'}</H4>
              <NextLink size={4} to='#'>
                  {'Get Started'}
              </NextLink>
          </div>
          <div>
              <H4>{'size = 5'}</H4>
              <NextLink size={5} to='#'>
                  {'Get Started'}
              </NextLink>
          </div>
          <div>
              <H4>{'size = 6'}</H4>
              <NextLink size={6} to='#'>
                  {'Get Started'}
              </NextLink>
          </div>
      </GuideSection>

      <GuideSection className={styles.linkSizeSection}>
          <H2>{'Previous links'}</H2>
          <div>
              <H4>{'size = 1'}</H4>
              <PreviousLink size={1} to='#'>
                  {'Go Back'}
              </PreviousLink>
          </div>
          <div>
              <H4>{'size = 2'}</H4>
              <PreviousLink size={2} to='#'>
                  {'Go Back'}
              </PreviousLink>
          </div>
          <div>
              <H4>{'size = 3 (default)'}</H4>
              <PreviousLink to='#'>
                  {'Go Back'}
              </PreviousLink>
          </div>
          <div>
              <H4>{'size = 4'}</H4>
              <PreviousLink size={4} to='#'>
                  {'Go Back'}
              </PreviousLink>
          </div>
          <div>
              <H4>{'size = 5'}</H4>
              <PreviousLink size={5} to='#'>
                  {'Go Back'}
              </PreviousLink>
          </div>
          <div>
              <H4>{'size = 6'}</H4>
              <PreviousLink size={6} to='#'>
                  {'Go Back'}
              </PreviousLink>
          </div>
      </GuideSection>

    </div>
  )
}

export default StyleGuide
