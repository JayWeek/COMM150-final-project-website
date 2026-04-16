export default function PerspectiveProjectLandingPage() {
  const sections = [
    {
      id: "wanted-to-learn",
      title: "What I wanted to learn.",
      image:
        "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ?auto=format&fit=crop&w=1200&q=80",
      content: [
        "I desire so much to understand the people around me. To understand how they feel and think. Learning how to view people from different perspectives will help me have much better communication with these people that I love so much.",
      ],
    },
    {
      id: "how-i-learned",
      title: "My project: How I learned.",
      image:
        "https://images.unsplash.com/photo-1587309492480-eae85a198e08?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ?auto=format&fit=crop&w=1200&q=80",
      content: [
        "To improve my understanding of people, I engaged myself in real life conversations with friends, family and peers.",
        "I had real intentional interactions that helped me better understand how differently people think, talk and behave due to so many factors such as culture, society, etc. I thought before that everyone thinks similar to how I do, however, that all changed. Everyone is different!",
      ],
    },
    {
      id: "investing-hours",
      title: "INVESTING 10 FULL HOURS",
      image:
        "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=1200&q=80",
      content: [
        "2 hours. April 3, I watched videos and read materials that helped me understand different cultures and societies. I learned their similarities and differences. I also watched videos that explained why people often misinterpret each other during communication.",
        "7 hours. April 4-10, This is where I put most of my energy and soul into. I constantly engaged myself in conversations where I practiced listening more and interrupted less and made sure to be actively present during those moments.",
        "1 hour. April 11, I spent this time reflecting on myself. I practiced intrapersonal skills here to better understand myself and prepare myself for my next interactions.",
        "Total time: 10 hours."
      ],
    },
    {
      id: "growth",
      title: "GROWTH: THREE THINGS I LEARNED ABOUT UNDERSTANDING PEOPLE’S PERSPECTIVE.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      content: [
        "This project helped me realize three things particularly",
        "Lesson one. One situation can be interpreted in many ways by different people because each has their own perspective.",
        "Lesson two. Asking is better than assuming. It is best to ask someone on a particular topic rather than just jumping straight to conclusions. Many times, misunderstandings happen because we rather assume based on past events and information we gained and yet, that wasn’t the case.",
        "Lesson three. When we listen to others from a gospel perspective, with fullness of heart, usually, it’s easier to listen and understand each other much better than when we do at a secular level.",
      ],
    },
    {
      id: "conclusion",
      title: "CONCLUSION: TYING IT ALL TOGETHER",
      image:
        "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ?auto=format&fit=crop&w=1200&q=80",
      content: [
        "This project has really blessed my life. From this project, I’ve come to understand that communication is not just all about speaking more clearly, but it is also about understanding the perspective of others when communicating with them.",
        "I know these skills will help me build stronger relationships and avoid unnecessary conflicts in my day to day life.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0d09] text-[#f8f3ea]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(212,175,55,0.10),_transparent_26%)] pointer-events-none" />

      <header className="relative overflow-hidden border-b border-[#d4af37]/20">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4af37]">
                Perspective Project
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                How can I better understand the people I love?
              </h1>
              <div className="mt-8 h-px w-32 bg-[#d4af37]" />
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#e7dfd0] md:text-xl">
                Perception is how we interpret and understand other people, their actions, and situations.
              </p>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#e7dfd0] md:text-xl">
                A personal reflection on understanding people more deeply through
                real conversations, listening, perspective, and growth.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] border border-[#d4af37]/20" />
              <img
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80"
                alt="People sharing a thoughtful moment together"
                className="relative h-[420px] w-full rounded-[2rem] object-cover shadow-2xl shadow-black/40"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12 lg:py-20">
        <div className="space-y-12">
          {sections.map((section, index) => (
            <section
              key={section.id}
              className="grid items-center gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm md:p-8 lg:grid-cols-2 lg:gap-10 lg:p-10"
            >
              <div className={index % 2 === 0 ? "order-2 lg:order-1" : "order-2"}>
                <div className="mb-5 flex items-center gap-4">
                  <div className="h-px w-12 bg-[#d4af37]" />
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#d4af37]">
                    Section {index + 1}
                  </p>
                </div>
                <h2 className="text-2xl font-semibold leading-snug text-white md:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-[#ece4d6] md:text-lg">
                  {section.content.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className={index % 2 === 0 ? "order-1 lg:order-2" : "order-1"}>
                <div className="relative overflow-hidden rounded-[1.75rem] border border-[#d4af37]/20 bg-[#17130d]">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-[300px] w-full object-cover transition duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-[#d4af37]/15">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center md:px-10 lg:px-12">
          <p className="text-sm uppercase tracking-[0.28em] text-[#d4af37]">
            Understanding others starts with choosing to listen.
          </p>
        </div>
      </footer>
    </div>
  );
}
