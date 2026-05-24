export default function Home() {
  const milestones = [
    {
      emoji: '💬',
      title: 'Large Language Models',
      description: 'ChatGPT and similar LLMs revolutionized natural language processing, making AI accessible to millions worldwide.',
    },
    {
      emoji: '🎨',
      title: 'Generative AI',
      description: 'Tools like DALL-E, Midjourney, and Stable Diffusion brought AI-powered creative capabilities to the mainstream.',
    },
    {
      emoji: '🏥',
      title: 'Medical AI',
      description: 'AI systems now assist in disease diagnosis, drug discovery, and personalized medicine with remarkable accuracy.',
    },
    {
      emoji: '🚀',
      title: 'Autonomous Systems',
      description: 'Self-driving cars, drones, and robotics continue to advance, pushing the boundaries of automation.',
    },
  ]

  const facts = [
    'ChatGPT reached 100 million users faster than any application in history (2 months)',
    'AI-powered drug discovery has accelerated pharmaceutical research timelines',
    'Computer vision AI now exceeds human-level performance in many tasks',
    'Enterprise adoption of AI has grown by over 270% in the past 3 years',
    'AI is projected to contribute $15.7 trillion to the global economy by 2030',
    'AI ethics and responsible AI governance have become critical focus areas',
  ]

  return (
    <>
      <header>
        <h1>🤖 The Growth of AI</h1>
        <p>"Transforming the World, One Algorithm at a Time"</p>
      </header>

      <main>
        <section>
          <h2>The AI Revolution</h2>
          <p>
            Artificial Intelligence has experienced exponential growth over the past few years, fundamentally transforming how we work, communicate, and solve problems. From breakthrough machine learning models to sophisticated generative AI systems, the field has evolved at an unprecedented pace.
          </p>
          <p>
            The last few years have witnessed a paradigm shift in AI capabilities, driven by advances in deep learning, increased computational power, and the availability of massive datasets. This progress has led to remarkable applications across healthcare, finance, education, and beyond.
          </p>
        </section>

        <section>
          <h2>Key Milestones</h2>
          <div className="milestones">
            {milestones.map((milestone, index) => (
              <div key={index} className="milestone-card">
                <h3>{milestone.emoji} {milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Notable Achievements & Trends</h2>
          <div className="facts">
            <ul>
              {facts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 The Growth of AI | Built with ❤️ using Next.js</p>
      </footer>
    </>
  )
}
