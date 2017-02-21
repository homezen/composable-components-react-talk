import React from 'react'

const NextButton = ({children, ...props}) => (
    <Button
        {...props}
        className={styles.nextButton}
    >
        {children}
        <Chevron right />
    </Button>
)


