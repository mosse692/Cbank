import React, { useState } from 'react';
import {HeroContainer, HeroBg, VideoBg, HeroContent, Heroh1, HeroP, HeroBtnWrapper, ArrowFoward, ArrowRight} from './HeroElements'
import { Button } from '../../Components/ButtonElement';
import Video from '../../videos/1.mp4'

const HeroSection = () => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return <HeroContainer>
      <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <Heroh1>Virtual Banking Made Easy</Heroh1>
        <HeroP>Sign up for a new account today and receive $250 in credit towards your next payment.</HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
            Get started {hover ? <ArrowFoward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
  </HeroContainer>;
};

export default HeroSection;
