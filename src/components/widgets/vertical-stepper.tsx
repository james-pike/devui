import { component$, useSignal, useComputed$, useStyles$ } from '@builder.io/qwik';
import { Carousel, Separator } from '@qwik-ui/headless';
import { cn } from '@qwik-ui/utils';

export default component$(() => {
  useStyles$(styles);

  const space = { marginBlock: '1rem' };

  // Hardcoded 4 phases of a roadmap with icons
  const roadmapPhases = [
    {
            headline: 'Phase 4:',

      title: 'Phase 1: Foundation & Planning',
      icon: '🛠️',
      description: 'Lay the groundwork for the project, including initial research, team formation, and technical setup.',
      milestones: [
        'Conduct market research and user interviews',
        'Define project scope and objectives',
        'Set up development environment and CI/CD pipelines',
        'Assemble core team and assign roles',
      ],
    },
    {
            headline: 'Phase 4:',

      title: 'Phase 2: Development & Prototyping',
      icon: '💻',
      description: 'Build initial prototypes and core features, focusing on iterative development and user feedback.',
      milestones: [
        'Develop MVP with core functionality',
        'Conduct usability testing with early users',
        'Implement feedback loops for iterative improvements',
        'Establish backend infrastructure and APIs',
      ],
    },
    {
            headline: 'Phase 4:',

      title: 'Phase 3: Testing & Refinement',
      icon: '🧪',
      description: 'Focus on rigorous testing, bug fixing, and feature refinement to ensure a polished product.',
      milestones: [
        'Perform comprehensive QA and stress testing',
        'Optimize performance and scalability',
        'Incorporate advanced features based on user feedback',
        'Prepare for production deployment',
      ],
    },
    {
      headline: 'Phase 4:',
      title: 'Launch & Growth',
      icon: '🚀',
      description: 'Release the product to the public, monitor performance, and plan for future enhancements.',
      milestones: [
        'Execute marketing and launch strategy',
        'Monitor user engagement and analytics',
        'Roll out updates and new features',
        'Plan for long-term scalability and support',
      ],
    },
  ];

  // Bind to carousel's selectedIndex for reactive updates
  const selectedIndex = useSignal(0);

  // Compute progress index to determine which separators are active
  const progressIndex = useComputed$(() => selectedIndex.value);

  return (
    <Carousel.Root class="carousel-root w-full pt-4" gap={30} bind:selectedIndex={selectedIndex}>
      <div class="flex flex-row items-start w-full">
        {/* Vertical progress line */}
        <div class="flex flex-col items-center justify-start w-2 mr-3">
          {roadmapPhases.map((_, index) => (
            <>
              <div
                class="w-1 h-0 bg-gray-200 rounded-full"
                style={{ marginTop: index === 0 ? '1rem' : '0.5rem' }}
                key={`spacer-${index}`}
              />
              {index < roadmapPhases.length - 1 && (
                <Separator
                  class={cn(
                    'w-1 h-4 bg-gray-200 rounded-full',
                    progressIndex.value >= index && 'bg-primary'
                  )}
                  style={{ transform: 'rotate(0deg)' }}
                  key={`separator-${index}`}
                />
              )}
            </>
          ))}
          <div
            class="w-1 h-4 bg-gray-200 rounded-full"
            style={{ marginBottom: '1rem' }}
            key="bottom-spacer"
          />
        </div>

        {/* Stepper with alternating steps and slides */}
        <Carousel.Stepper class="carousel-stepper w-full" style={{ flexDirection: 'column' }}>
          {roadmapPhases.map((phase, index) => (
            <>
              <Carousel.Step
                class="carousel-step flex items-start justify-start cursor-pointer"
                key={`step-${index}`}
                onClick$={() => {
                  console.log(`Clicked index: ${index}`); // Debug click
                  selectedIndex.value = index; // Manually update selected index
                }}
              >
                <span
                  class={cn(
                    ' text-sm md:text-base -ml-2 font-medium px-3 py-1.5 rounded',
                    selectedIndex.value === index && 'bg-primary/20 ' // Highlight only the selected title
                  )}
                >
                  
                <span class=""> {phase.title}</span> 
                  <span class="ml-1">{phase.icon}</span>
                </span>
          
              </Carousel.Step>
              <Carousel.Slide
                style={space}
                class="carousel-slide p-3 text-sm md:p-4 !mt-2  bg-primary/10  rounded-lg shadow-sm"
                key={`slide-${index}`}
              >
                <p class=" ">{phase.description}</p>
                <ul class="list-disc list-outside pl-5 space-y-0">
                  {phase.milestones.map((milestone, i) => (
                    <li key={`milestone-${i}`} class="">
                      {milestone}
                    </li>
                  ))}
                </ul>
              </Carousel.Slide>
            </>
          ))}
        </Carousel.Stepper>
      </div>
    </Carousel.Root>
  );
});

// internal
import styles from './carousel.css?inline';
