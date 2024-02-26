import { ParallaxBanner } from 'react-scroll-parallax'
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types'

export const AdvancedBannerTop = () => {
  const background: BannerLayer = {
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg',
    translateY: [0, 60], // Increased range for more movement
    opacity: [1, 0.3],
    scale: [1.05, 1.5, 'easeOutCubic'], // Slightly more zoom to make it noticeable
    shouldAlwaysCompleteAnimation: true,
  }

  const headline: BannerLayer = {
    translateY: [0, 40], // Adjusted for more movement
    scale: [1, 1.1, 'easeOutCubic'], // Adjusted for a noticeable zoom effect
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center">
        <h1 className="headline white">Hello World!</h1>
      </div>
    ),
  }

  const foreground: BannerLayer = {
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png',
    translateY: [0, 15], // Increased movement
    scale: [1, 1.1, 'easeOutCubic'], // More zoom for the foreground to stand out
    shouldAlwaysCompleteAnimation: true,
  }

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />,
  }

  return <ParallaxBanner layers={[background, headline, foreground, gradientOverlay]} className="full" />
}

export const AdvancedBannerBottom = () => {
  const background: BannerLayer = {
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg',
    translateY: [0, -50], // Start with no vertical translation and move up
    opacity: [1, 0.3], // Start fully opaque and fade as it moves
    scale: [1, 1.5, 'easeOutCubic'], // Start at normal size and scale up to cover the empty area
    shouldAlwaysCompleteAnimation: true,
  }

  const headline: BannerLayer = {
    translateY: [0, -30], // Less movement than the background to maintain visibility
    scale: [1, 1.05, 'easeOutCubic'], // Slight increase to maintain effect without distorting text
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center">
        <h1 className="headline white">Hello World!</h1>
      </div>
    ),
  }

  const foreground: BannerLayer = {
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png',
    translateY: [0, -20], // Ensure it moves up but stays within view longer than the background
    scale: [1, 1.1, 'easeOutCubic'], // Slight zoom to enhance the parallax effect
    shouldAlwaysCompleteAnimation: true,
  }

  const gradientOverlay: BannerLayer = {
    opacity: [1, 0, 'easeOutCubic'], // Start visible and fade out to reveal the parallax layers beneath
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />,
  }

  return <ParallaxBanner layers={[background, headline, foreground, gradientOverlay]} className="full" />
}
