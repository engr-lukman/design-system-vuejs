import type { Meta, StoryObj } from '@storybook/vue3'
import Carousel from './Carousel.vue'
import CarouselSlide from './CarouselSlide.vue'

const meta: Meta<typeof Carousel> = {
  title: 'Data Display/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    autoplay: { control: 'boolean' },
    interval: { control: 'number' },
    loop: { control: 'boolean' },
    showArrows: { control: 'boolean' },
    showDots: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Carousel>

const slideColors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-amber-500', 'bg-red-500']

export const Default: Story = {
  render: (args) => ({
    components: { Carousel, CarouselSlide },
    setup: () => ({ args, slideColors }),
    template: `
      <div class="w-full max-w-lg">
        <Carousel v-bind="args">
          <CarouselSlide v-for="(color, i) in slideColors" :key="i">
            <div :class="[color, 'flex h-64 items-center justify-center rounded-lg text-2xl font-bold text-white']">
              Slide {{ i + 1 }}
            </div>
          </CarouselSlide>
        </Carousel>
      </div>
    `,
  }),
}

export const Autoplay: Story = {
  args: { autoplay: true, interval: 2000 },
  render: (args) => ({
    components: { Carousel, CarouselSlide },
    setup: () => ({ args, slideColors }),
    template: `
      <div class="w-full max-w-lg">
        <Carousel v-bind="args">
          <CarouselSlide v-for="(color, i) in slideColors" :key="i">
            <div :class="[color, 'flex h-48 items-center justify-center rounded-lg text-xl font-bold text-white']">
              Slide {{ i + 1 }}
            </div>
          </CarouselSlide>
        </Carousel>
      </div>
    `,
  }),
}

export const WithCards: Story = {
  render: (args) => ({
    components: { Carousel, CarouselSlide },
    setup: () => ({ args }),
    template: `
      <div class="w-full max-w-lg">
        <Carousel v-bind="args">
          <CarouselSlide v-for="i in 4" :key="i">
            <div class="p-2">
              <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 class="text-lg font-semibold text-gray-900">Card {{ i }}</h3>
                <p class="mt-2 text-sm text-gray-500">This is a card inside a carousel slide. Great for showcasing content.</p>
              </div>
            </div>
          </CarouselSlide>
        </Carousel>
      </div>
    `,
  }),
}
