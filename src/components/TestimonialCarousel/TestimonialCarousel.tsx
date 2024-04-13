import Carousel from '@components/Carousel'
import { Review } from '@typings/Review'
import React, { type FC } from 'react'
import ReviewCard from './ReviewCard'

interface TestimonialCarouselProps {
  reviews: Review[]
}

const TestimonialCarousel: FC<TestimonialCarouselProps> = ({ reviews }) => {
  return (
    <Carousel
      gap={2.4}
      slides={reviews.map((review) => (
        <ReviewCard review={review} />
      ))}
      itemsPerPage={3}
    />
  )
}

export default TestimonialCarousel
