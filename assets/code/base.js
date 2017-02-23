import {
  isString,
  matches,
  startsWith,
} from 'lodash'

import React, {PropTypes} from 'react'
import cn from 'classnames'
import uri from 'uri-js'
import styles from './base.css'
import {Link as RRLink} from 'react-router'


export const H1 = ({className}) => (
  <h1 className={cn(styles.h1, className)} />
)

export const H2 = ({className}) => (
  <h2 className={cn(styles.h2, className)} />
)

export const H3 = ({className}) => (
  <h3 className={cn(styles.h3, className)} />
)

export const P = ({
  className,
  size,
  ...props
}) => (
  <p className={cn(
    styles.p,
    className,
    styles[`pSize${size}`])}
  />
)

// These are here so the above
// components fit on slide
H1.propTypes = {
  className: PropTypes.string,
}

H2.propTypes = {
  className: PropTypes.string,
}

H3.propTypes = {
  className: PropTypes.string,
}

P.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number, // 1-6
}

P.defaultProps = {
  size: 3,
}

const getButtonClassName = (size, light, secondary, className) => cn(className, {
  [styles.primaryDark]: !secondary && !light,
  [styles.secondaryDark]: secondary && !light,
  [styles.primaryLight]: !secondary && light,
  [styles.secondaryLight]: secondary && light,
  [styles[`buttonSize${size}`]]: size >= 1 && size <= 6,
})

export const Button = ({
    size,
    light,
    secondary,
    className,
    ...props
}) => (
  <button
    className={getButtonClassName(
      size,
      light,
      secondary,
      className,
    )}
    {...props} />
)

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  light: PropTypes.bool,
  secondary: PropTypes.bool,
  size: PropTypes.number, // size scale 1-6
}

Button.defaultProps = {
  light: false,
  secondary: false,
  size: 2,
}

const isExtLink = (url) =>
  isString(url) &&
  matches({reference: 'absolute'})(uri.parse(url))

const isProtoRelUrl = (url) =>
  startsWith(url, '//')

export const RawLink = ({to, ...props}) =>
  isProtoRelUrl(to) || isExtLink(to)
    ? (<a href={to} {...props} />)
    : (<RRLink to={to} {...props} />)

RawLink.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
}

const StyledLink = ({
  className,
  size,
  ...props
}) => (
  <RawLink
    className={cn(
      className,
      styles.link,
      styles[`linkSize${size}`])}
    {...props} />
)

StyledLink.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number, // size scale 1-6

}

StyledLink.defaultProps = {
  size: 3,
}

export {StyledLink as Link}


export const ButtonLink = ({
    size,
    light,
    secondary,
    className,
    ...props
}) => (
  <RawLink
    className={getButtonClassName(
      size,
      light,
      secondary,
      className,
    )}
    {...props} />
)

ButtonLink.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  light: PropTypes.bool,
  secondary: PropTypes.bool,
  size: PropTypes.number, // size scale 1-6
}

ButtonLink.defaultProps = {
  light: false,
  secondary: false,
  size: 2,
}


