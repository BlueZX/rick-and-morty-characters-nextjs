import { AnimateSharedLayout } from 'framer-motion'
import React from 'react'

import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'

type MainLayoutProps = {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <AnimateSharedLayout>
      <Container pt="2.5rem" w="100%">
        {children}
        <DarkModeSwitch />
      </Container>
    </AnimateSharedLayout>
  )
}
