import { About } from './components/about/about'
import { Build } from './components/build/build'
import { Connect } from './components/connect/connect'
import { Igaming } from './components/igaming/igaming'
import { Info } from './components/info/info'
import { Partner } from './components/partner/partner'
import { Scale } from './components/scale/scale'

export function HomeModule() {
  return (
    <>
      <Igaming />
      <About />
      <Build />
      <Partner />
      <Scale />
      <Connect />
      <Info />
    </>
  )
}
