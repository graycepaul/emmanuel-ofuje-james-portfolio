import Image from "next/image";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Flight Experience" },
  { href: "#training", label: "Training" },
  { href: "#skills", label: "Skills" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const STATS = [
  { value: "500+", label: "Total Flight Hours" },
  { value: "8", label: "Years Military Aviation" },
  { value: "4", label: "UAS / Aircraft Platforms" },
  { value: "20+", label: "Students Trained" },
];

const PLATFORMS = [
  {
    name: "Bayraktar TB2",
    role: "Military UAS Operator",
    hours: "250+ flight hours",
    image: "/images/tb2-nose-duo.jpg",
    points: [
      "Conducted operational UAS missions in support of military ISR and security operations",
      "Participated in establishing Bayraktar TB2 RPAS capability, including Ground Control Station farm setup and platform assembly",
      "Mission planning, crew coordination and operational execution in demanding environments",
      "Supported surveillance and reconnaissance missions applying aviation safety and risk-management principles",
    ],
  },
  {
    name: "CW-40D RPA",
    role: "UAS Operator / Instructor",
    hours: "230+ flight hours",
    image: "/images/uas-assembly-1.jpg",
    points: [
      "Instructed 20+ students from ground school through completion of the flight phase",
      "Delivered theoretical and practical instruction in UAS operations and flight procedures",
      "Supervised trainees during practical flight operations, evaluated performance and mentored operators",
      "Applied flight-safety procedures and supported aircraft preparation and operational readiness",
    ],
  },
  {
    name: "CH-4B RPA",
    role: "Military UAS Operator",
    hours: "20+ flight hours",
    image: "/images/tb2-instructor-brief.jpg",
    points: [
      "Operated CH-4B RPA in military aviation environments",
      "Supported ISR-oriented missions and operational tasking",
      "Conducted pre-flight preparation, mission planning and post-flight activities applying operational safety procedures",
    ],
  },
  {
    name: "DA-40",
    role: "Manned Aircraft: Ab-Initio / Instrument Training",
    hours: "20+ flight hours",
    image: "/images/da40-standing.jpg",
    points: [
      "Completed in-house manned-aircraft flight training",
      "Conducted instrument-flying training as part of military aviation development",
      "Developed practical understanding of aviation procedures, navigation, communications and cockpit discipline",
    ],
  },
];

const COMPETENCIES = [
  "UAS/RPAS Operations",
  "UAS Operator Training & Instruction",
  "Military UAS Operations",
  "ISR & Surveillance Operations",
  "Mission Planning & Execution",
  "Flight Safety & Risk Management",
  "Crew Resource Management",
  "UAS Operational Readiness",
  "UAS Technical Operations",
  "Ground Control Station Operations",
  "UAS Communications",
  "Payload & Mission-System Operations",
  "Operator Evaluation",
  "Field Operations & Deployment",
  "Technical Troubleshooting",
  "Aviation Communications",
  "Defence & Security Operations",
  "Training Development & Mentoring",
  "Emergency & Abnormal Procedures",
  "Team Leadership & Coordination",
];

const APPOINTMENTS = [
  {
    title: "Staff Officer Grade 2, Safety and Evaluation",
    body: "Supported aviation safety, evaluation and operational standards; contributed to risk identification, mitigation and continuous improvement.",
  },
  {
    title: "Officer Commanding Communications",
    body: "Led communications activities supporting aviation and operational requirements; supervised personnel and associated technical systems.",
  },
  {
    title: "Instructor, CW-40D",
    body: "Conducted theoretical and practical UAS training; trained 20+ students from ground school through completion of the flight phase; supervised flight training and assessed performance.",
  },
  {
    title: "Operations Officer",
    body: "Supported planning and coordination of aviation and UAS operations, mission tasking, personnel and operational resources, and real-time decision-making.",
  },
];

const TECHNICAL = [
  "UAS Ground Control Station operations; UAS communications systems; platform preparation and configuration",
  "Mission-system and payload operations; UAS troubleshooting and fault identification",
  "Military communications systems; radar systems; Instrument Landing System (ILS); Airfield Ground Lighting systems",
  "Electrical/Electronics systems maintenance; computer hardware maintenance and troubleshooting; basic website design and hosting",
];

const SAFETY = [
  "Flight safety management; operational risk assessment; hazard identification and mitigation",
  "Pre-flight planning and preparation; weather assessment and operational decision-making",
  "Communication-link-loss procedures; Air Traffic Services coordination; emergency and abnormal procedures",
  "Crew Resource Management; safe Return-to-Base decision-making; operational evaluation",
];

const EDUCATION = [
  {
    title: "B.Eng., Electrical/Electronics Engineering",
    body: "Bachelor of Engineering, completed.",
  },
  {
    title: "M.Sc., Information & Communications Technology",
    body: "In progress.",
  },
  {
    title: "Additional Military & Technical Training",
    body: "Military Communications Systems; Radar Systems; ILS; Airfield Ground Lighting; Computer Hardware Maintenance & Repairs; Website Design & Hosting.",
  },
];

const CERTIFICATIONS = [
  {
    title: "Military UAS/RPAS Qualifications",
    body: "Military-certified operational and instructional experience across four UAS/aircraft platforms.",
    status: "Held",
  },
  {
    title: "Transport Canada RPAS Pilot Certificate, Advanced Operations",
    body: "Prepared to undertake applicable Canadian certification requirements upon relocation.",
    status: "In progress",
  },
  {
    title: "Civilian ICAO/FAA/EASA Remote Pilot Licence",
    body: "Not currently held.",
    status: "Not held",
  },
];

const GALLERY = [
  { src: "/images/tb2-nose-duo.jpg", alt: "Standing beneath the nose of a Bayraktar TB2 RPAS with a fellow operator" },
  { src: "/images/gcs-operator.jpg", alt: "Operating the Ground Control Station, dual monitors, joystick and mission map" },
  { src: "/images/tb2-instructor-brief.jpg", alt: "Briefing a group of operators beside a UAS platform and power equipment" },
  { src: "/images/da40-cockpit.jpg", alt: "Seated in the DA-40 cockpit reviewing checklists before instrument training" },
  { src: "/images/uas-assembly-1.jpg", alt: "Assembling a fixed-wing UAS airframe with a fellow operator" },
  { src: "/images/uas-assembly-2.jpg", alt: "Close-up preparation of a small fixed-wing UAS payload bay" },
  { src: "/images/tb2-tail-duo.jpg", alt: "Standing beside the tail assembly of a Bayraktar TB2 with a fellow operator" },
  { src: "/images/da40-lean.jpg", alt: "Portrait beside a DA-40 manned training aircraft on the apron" },
];

export default function Home() {
  return (
    <>
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-panel-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-semibold tracking-wide">
            EMMANUEL <span className="text-accent">OFUJE JAMES</span>
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-muted md:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-navy px-4 py-2 text-sm font-medium text-white transition hover:bg-navy-2"
          >
            Get in Touch
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-navy text-white">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
          <div className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent-2">
                Portfolio &middot; UAS/RPAS Operator, Instructor &amp; Training Specialist
              </p>
              <h1 className="font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl">
                Captain Emmanuel Ofuje James
              </h1>
              <p className="mt-3 text-lg font-medium text-accent-2">
                UAS/RPAS Operator &middot; UAS Instructor &middot; ISR &amp; Defence Operations
              </p>
              <p className="mt-6 max-w-xl text-white/75">
                Military UAS/RPAS operator and instructor with over 500 hours of total flight
                experience and 8 years of military aviation and operational experience. Experienced
                across Bayraktar TB2, CW-40D, CH-4B and DA-40 platforms, with a strong background in
                flight operations, ISR missions, mission planning, flight safety, operational risk
                management, crew resource management and operator training. Open to relocation to
                Canada and extensive travel.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/files/Emmanuel-Ofuje-James-CV.docx"
                  className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-navy transition hover:bg-accent-2"
                >
                  Download CV
                </a>
                <a
                  href="/files/Emmanuel-Ofuje-James-Cover-Letter.docx"
                  className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Download Cover Letter
                </a>
                <a
                  href="#experience"
                  className="rounded-full px-5 py-3 text-sm font-semibold text-white/70 transition hover:text-white"
                >
                  View Flight Experience &rarr;
                </a>
              </div>
            </div>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src="/images/portrait-uniform.jpg"
                alt="Captain Emmanuel Ofuje James in Nigerian Air Force uniform"
                fill
                priority
                className="object-cover object-top"
                sizes="(min-width: 768px) 384px, 90vw"
              />
            </div>
          </div>
          <div className="relative border-t border-white/10 bg-navy-2">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-semibold text-accent-2 sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wide text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">About</p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-balance">
                Defence-trained UAS operator ready to serve as a frontline technical ambassador
                for UAS programs
              </h2>
              <p className="mt-4 text-muted">
                Eight years of structured military aviation service have built a foundation in
                disciplined mission execution, operational safety, and clear communication under
                pressure. These are the same qualities customers and organizations need when
                adopting a new UAS platform in the field.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-panel-border bg-panel p-6">
                <h3 className="font-display text-lg font-semibold">Operational Experience</h3>
                <p className="mt-2 text-sm text-muted">
                  Combat and non-combat UAS missions, predominantly ISR-focused, plus VIP protection
                  and security-oriented aviation operations. Experience with mission planning, crew
                  coordination and flight execution in challenging operational environments, within
                  structured military command and multidisciplinary teams.
                </p>
              </div>
              <div className="rounded-xl border border-panel-border bg-panel p-6">
                <h3 className="font-display text-lg font-semibold">Training &amp; Instruction</h3>
                <p className="mt-2 text-sm text-muted">
                  Trained and mentored 20+ UAS students from ground school through flight-phase
                  completion, translating technical and operational concepts into practical
                  instruction, supervising flight activities, evaluating performance and reinforcing
                  standard operating procedures.
                </p>
              </div>
              <div className="rounded-xl border border-panel-border bg-panel p-6 sm:col-span-2">
                <h3 className="font-display text-lg font-semibold">Emergency &amp; Abnormal Procedures</h3>
                <p className="mt-2 text-sm text-muted">
                  Experience responding to abnormal and emergency situations, including
                  communication-link-loss procedures, with strong emphasis on flight safety, risk
                  management and operational discipline throughout every mission.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FLIGHT EXPERIENCE */}
        <section id="experience" className="bg-panel/60 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Flight Experience Summary
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold">
              500+ hours across four UAS and aircraft platforms
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {PLATFORMS.map((platform) => (
                <div
                  key={platform.name}
                  className="overflow-hidden rounded-2xl border border-panel-border bg-panel shadow-sm"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={platform.image}
                      alt={`${platform.name} operations`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-5">
                      <div className="flex items-baseline justify-between">
                        <h3 className="font-display text-xl font-semibold text-white">
                          {platform.name}
                        </h3>
                        <span className="text-sm font-semibold text-accent-2">
                          {platform.hours}
                        </span>
                      </div>
                      <p className="text-sm text-white/70">{platform.role}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 p-6 text-sm text-muted">
                    {platform.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MILITARY APPOINTMENTS */}
        <section id="training" className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Military Aviation &amp; UAS Experience
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold">
            Captain, Military Aviation / UAS Operations
          </h2>
          <p className="mt-2 text-sm text-muted">8 years of military service &middot; selected military appointments</p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <ol className="space-y-6 border-l border-panel-border pl-6">
              {APPOINTMENTS.map((item) => (
                <li key={item.title} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.body}</p>
                </li>
              ))}
            </ol>
            <div className="grid grid-rows-2 gap-6">
              <div className="relative overflow-hidden rounded-2xl border border-panel-border">
                <Image
                  src="/images/tb2-instructor-brief.jpg"
                  alt="Briefing operators on UAS ground power equipment beside a Bayraktar TB2"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-panel-border">
                <Image
                  src="/images/gcs-operator.jpg"
                  alt="Operating a UAS Ground Control Station"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="bg-navy py-20 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-2">
              Core Competencies
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold">
              Skills built for demonstrations, training and field readiness
            </h2>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {COMPETENCIES.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-display text-xl font-semibold text-accent-2">
                  Technical Experience
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-white/75">
                  {TECHNICAL.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-accent-2">
                  Aviation Safety &amp; Risk Management
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-white/75">
                  {SAFETY.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION + CERTS */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Education</p>
              <h2 className="mt-2 font-display text-2xl font-semibold">Engineering foundation</h2>
              <div className="mt-6 space-y-5">
                {EDUCATION.map((item) => (
                  <div key={item.title} className="rounded-xl border border-panel-border bg-panel p-5">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Certification &amp; Licensing
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold">Path to Canadian certification</h2>
              <div className="mt-6 space-y-5">
                {CERTIFICATIONS.map((item) => (
                  <div key={item.title} className="rounded-xl border border-panel-border bg-panel p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-medium">{item.title}</h3>
                      <span
                        className={`flex-none rounded-full px-2.5 py-1 text-xs font-semibold ${
                          item.status === "Held"
                            ? "bg-emerald-100 text-emerald-700"
                            : item.status === "In progress"
                              ? "bg-accent/15 text-accent"
                              : "bg-neutral-200 text-neutral-600"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="bg-panel/60 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Field Gallery</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">On the ramp, in the GCS, in the field</h2>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {GALLERY.map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-[3/4] overflow-hidden rounded-xl border border-panel-border"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition duration-300 hover:scale-105"
                    sizes="(min-width: 768px) 25vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative overflow-hidden bg-navy py-20 text-white">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-2">Contact</p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              Ready to bring military-grade UAS discipline to your team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Open to relocation to Canada and extensive travel. Available to discuss UAS
              operations, training and instructional roles at any time.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
              <a
                href="mailto:Emmanuelofujejames@gmail.com"
                className="rounded-full bg-accent px-6 py-3 font-semibold text-navy transition hover:bg-accent-2"
              >
                Emmanuelofujejames@gmail.com
              </a>
              <a
                href="tel:+2348035098186"
                className="rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                +234 803 509 8186
              </a>
            </div>
            <p className="mt-6 text-sm text-white/50">Based in Nigeria &middot; Open to relocation to Canada</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-panel-border bg-background py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Emmanuel Ofuje James. All rights reserved.</p>
          <p>Portfolio for UAS/RPAS operations, training and defence-technology roles.</p>
        </div>
      </footer>
    </>
  );
}
