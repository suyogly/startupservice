import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeCheck, BookOpen, Building2, Calculator, CheckCircle2, ChevronRight, GraduationCap, Landmark, Lightbulb, Megaphone, Monitor, Network, Newspaper, Scale, Search, ShieldCheck, Target, Users } from 'lucide-react'
import SiteHeader from "@/components/site-header"
import { Reveal } from "@/components/reveal"
import { StatsBar } from "@/components/stats-bar"
import { Testimonials } from "@/components/testimonials"
import Footer from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Page() {
  return (
    <div className="min-h-[100dvh] bg-white">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative gap-y-6">
          <div className="container mx-auto px-4 pt-6 md:pt-10">
            <div className="relative overflow-hidden rounded-2xl border bg-zinc-950 text-white">
              {/* background image */}
              <Image
                src="/modern-business-team.png"
                alt="Business team in office background"
                width={2000}
                height={1200}
                className="absolute inset-0 h-full w-full object-cover opacity-60"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" aria-hidden="true" />

              <div className="relative z-10 px-6 pt-16 pb-20 sm:px-10 md:pt-24 md:pb-28 lg:px-16">
                <Reveal>
                  <p className="inline-block rounded-full bg-blue-600/90 px-3 py-1 text-xs font-medium text-white">
                    Welcome to Startup Management Services
                  </p>
                </Reveal>

                <Reveal delay={0.08}>
                  <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                    End-to-End Business Management Services for Startups & Growing Businesses
                  </h1>
                </Reveal>

                <Reveal delay={0.14}>
                  <p className="mt-6 max-w-3xl text-lg text-zinc-200">
                    Formerly part of Professional Financial Services (PFS), we handle the operational complexity
                    so you can focus on building your product and achieving your business goals.
                  </p>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button asChild size="lg" className="h-11 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
                      <Link href="#contact">Get a Consultation</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-11 rounded-xl border-zinc-400/40 bg-white/10 backdrop-blur hover:bg-white/15">
                      <Link href="tel:+9779860519083">Call: +977-9860519083</Link>
                    </Button>
                  </div>
                </Reveal>
              </div>

              {/* accent bar bottom-left */}
              <div className="pointer-events-none absolute bottom-3 left-6 h-2 w-24 rounded-full bg-blue-600 md:left-10 md:w-28 lg:left-16" aria-hidden="true" />
            </div>
          </div>

          {/* Stats overlapping strip */}
          <div className="container mx-auto mt-8 py-12 px-4 md:-mt-8">
            <StatsBar />
          </div>
        </section>

        {/* About */}
        <section id="about" className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl border">
                  <Image
                    src="/professionals-reviewing-documents.png"
                    alt="Our team reviewing documents"
                    width={1600}
                    height={1100}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 left-6 h-2 w-24 rounded-full bg-blue-600 md:w-28" aria-hidden="true" />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">About Us</span>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Your All-in-One Partner for Startup Operations and Growth
                </h2>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="mt-4 text-muted-foreground">
                  Startup Management Services (SMS) was formerly part of Professional Financial Services (PFS), built to
                  provide startups and growing businesses with end-to-end operational support. From accounting and IT to
                  legal services, marketing, logistics, workplace facilities, and research support, SMS handles auxiliary
                  tasks so you can focus on your core competencies — without the overhead of in-house hiring or additional
                  infrastructure.
                </p>
              </Reveal>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Reveal>
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium">24/7 Support</div>
                      <p className="text-sm text-muted-foreground">Responsive help from experienced professionals across all service areas.</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.06}>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Multi-Sector Expertise</div>
                      <p className="text-sm text-muted-foreground">Specialists across accounting, IT, legal, marketing, operations, and research.</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.12}>
                <div className="mt-8 flex items-center gap-4">
                  <Image
                    src="/handwritten-signature.png"
                    alt="Founder signature"
                    width={220}
                    height={80}
                    className="h-12 w-auto"
                  />
                  <div>
                    <div className="font-semibold">Saurabh Joshi</div>
                    <div className="text-sm text-muted-foreground">Director</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Why partner & commercial model */}
        <section id="partner" className="border-y bg-zinc-50">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Partnership</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Reasons to Partner With SMS</h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-4 text-muted-foreground">
                  Whether you are building a market‑ready product or navigating the early years of your business,
                  operational complexity and fragmented expertise are unavoidable. Bringing every specialist in‑house is
                  often costly, and finding the right people adds further strain.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-4 text-muted-foreground">
                  SMS is designed to complement your vision: we supply the multidisciplinary support startups need —
                  accounting, IT, legal, marketing, logistics, workspace, research, coaching, funding pathways, and
                  more —{" "}
                  <span className="font-medium text-foreground">without steering your strategic goals.</span> Our aim is to
                  be a pivotal operational partner so you can validate faster, streamline execution, and grow with
                  confidence.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <Card className="mx-auto mt-10 max-w-3xl rounded-2xl border-blue-200/80 bg-blue-50/40 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-950">Aligning incentives with Professional Financial Services (PFS)</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Working with professionals can involve cost and complexity. Through our arrangement with PFS, SMS aims
                    to lower the barrier for founders: Startup Management Services can provide complementary startup‑stage
                    support at{" "}
                    <span className="font-medium text-foreground">no direct service cost</span> to qualifying partners,
                    while Professional Financial Services may take{" "}
                    <span className="font-medium text-foreground">a minimum equity position</span> in your venture. Profit
                    sharing aligns our incentive to{" "}
                    <span className="font-medium text-foreground">accelerate sustainable growth alongside you.</span>
                    Details are confirmed during consultation and diligence.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-y bg-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center">
              <Reveal>
                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Services</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Services We Provide</h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                  Accounting, IT, management, legal, research, social media marketing, logistics, and workplace facilities —
                  plus extended programmes in funding, networking, and training — so you can focus on product and growth.
                </p>
              </Reveal>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Reveal>
                <ServiceCard
                  icon={<Calculator className="h-6 w-6 text-blue-600" />}
                  title="Accounting"
                  description="Bookkeeping, financial reporting, tax preparation, payroll, and budgeting to keep your records accurate and decisions informed."
                />
              </Reveal>
              <Reveal delay={0.04}>
                <ServiceCard
                  icon={<Monitor className="h-6 w-6 text-blue-600" />}
                  title="IT Services"
                  description="Setup and maintenance of IT infrastructure — computer systems, networks, and software — so your team stays efficient and productive."
                />
              </Reveal>
              <Reveal delay={0.08}>
                <ServiceCard
                  icon={<Target className="h-6 w-6 text-blue-600" />}
                  title="Management & Advisory"
                  description="Guidance on goal-setting, decision-making, problem-solving, and business development coaching tailored for early-stage companies."
                />
              </Reveal>
              <Reveal delay={0.12}>
                <ServiceCard
                  icon={<Scale className="h-6 w-6 text-blue-600" />}
                  title="Legal Services"
                  description="Contract review and drafting, company registration, licenses, permits, and intellectual property guidance including trademarks and copyrights."
                />
              </Reveal>
              <Reveal delay={0.14}>
                <ServiceCard
                  icon={<Search className="h-6 w-6 text-blue-600" />}
                  title="Research"
                  description="Desk and field research support to sharpen product–market fit, validate assumptions, and inform planning as you prepare to go to market."
                />
              </Reveal>
              <Reveal delay={0.16}>
                <ServiceCard
                  icon={<Megaphone className="h-6 w-6 text-blue-600" />}
                  title="Marketing & Outreach"
                  description="Social media account management, content creation, advertising campaigns, and marketing plans to grow your audience and brand presence."
                />
              </Reveal>
              <Reveal delay={0.2}>
                <ServiceCard
                  icon={<Building2 className="h-6 w-6 text-blue-600" />}
                  title="Operations & Workspace"
                  description="Logistical support for day-to-day operations, plus shared workspace in co-working spaces and incubators — conference rooms, printing, kitchen facilities, and flexible rental options for a professional presence. We are also exploring collaborations with restaurants and complementary venues for day-to-day work, meetings, and events."
                />
              </Reveal>
            </div>

            <div className="mt-16 border-t pt-16">
              <Reveal>
                <h3 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">Additional programmes</h3>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
                  Beyond core operations, SMS supports growth through marketing plans, coaching, capital access, community, and
                  structured learning.
                </p>
              </Reveal>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Reveal>
                  <ServiceCard
                    icon={<Newspaper className="h-6 w-6 text-blue-600" />}
                    title="Marketing & advertising"
                    description="Help developing and implementing marketing plans that reach your target audience."
                  />
                </Reveal>
                <Reveal delay={0.04}>
                  <ServiceCard
                    icon={<Landmark className="h-6 w-6 text-blue-600" />}
                    title="Funding assistance"
                    description="Connections to funding opportunities, investors, grants, and investment capital as you scale."
                  />
                </Reveal>
                <Reveal delay={0.08}>
                  <ServiceCard
                    icon={<Network className="h-6 w-6 text-blue-600" />}
                    title="Networking"
                    description="Introductions to successful entrepreneurs and industry experts for partnerships and opportunities."
                  />
                </Reveal>
                <Reveal delay={0.12}>
                  <ServiceCard
                    icon={<GraduationCap className="h-6 w-6 text-blue-600" />}
                    title="Training & education"
                    description="Programmes in marketing, sales, financial management, and related skills for your team."
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        {/* <section id="cases" className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <Reveal>
                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Case Studies</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">View Our Most Recent Projects</h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-2 max-w-2xl text-muted-foreground">
                  Real examples of how we optimize operations, improve compliance, and boost decision‑making.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <Button variant="default" className="rounded-xl bg-blue-600 text-white hover:bg-blue-700">
                Learn More
              </Button>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <CaseCard
                image="/placeholder-34bnf.png"
                title="Acquisitions & Mergers"
                description="Streamlined due diligence, financial modeling, and compliance integration."
              />
            </Reveal>
            <Reveal delay={0.06}>
              <CaseCard
                image="/placeholder-r2dbg.png"
                title="Cashflow Forecasting"
                description="Predictive cashflow models and scenario planning for smarter growth."
              />
            </Reveal>
          </div>
        </section> */}

        {/* What SMS can do */}
        <section id="platform" className="border-y bg-zinc-50">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center">
              <Reveal>
                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Platform</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">What Startup Management Services Can Do</h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                  Member programmes and ecosystem resources designed to amplify visibility, capability, and commercial traction.
                </p>
              </Reveal>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
              <PlatformItem text="Publish articles and journals on startup‑relevant themes for SMS clients." />
              <PlatformItem text="Host an annual conference for members and present awards recognising standout contributions." delay={0.04} />
              <PlatformItem text="Run mentorship and networking programmes so members learn from each other." delay={0.08} />
              <PlatformItem text="Provide templates, tools, and best‑practice playbooks to speed up execution." delay={0.12} />
              <PlatformItem text="Deliver training in marketing, sales, financial management, and adjacent skills." delay={0.16} />
              <PlatformItem text="Connect startups with prospective partners and customers through targeted outreach." delay={0.2} />
              <PlatformItem text="Assist with securing grants, equity, and other funding pathways." delay={0.24} />
              <PlatformItem text="Offer advisory support as you navigate the challenges of scaling a venture." delay={0.28} />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="border-y bg-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center">
              <Reveal>
                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Benefits</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Benefits of Joining SMS</h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                  Structured support replaces isolation with momentum — access people, programmes, and resources that compound
                  your progress.
                </p>
              </Reveal>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Reveal>
                <BenefitCard
                  icon={<Network className="h-6 w-6 text-blue-600" />}
                  title="Networking opportunities"
                  description="Meet fellow founders and seasoned operators who can unlock partnerships, customers, and follow‑on introductions."
                />
              </Reveal>
              <Reveal delay={0.06}>
                <BenefitCard
                  icon={<ShieldCheck className="h-6 w-6 text-blue-600" />}
                  title="Expert advice"
                  description="Tap multidisciplinary professionals accustomed to guiding young companies through legal, finance, tech, and go‑to‑market decisions."
                />
              </Reveal>
              <Reveal delay={0.12}>
                <BenefitCard
                  icon={<BookOpen className="h-6 w-6 text-blue-600" />}
                  title="Operational resources"
                  description="Leverage reusable templates, tooling recommendations, and process guidance that keep administration lean."
                />
              </Reveal>
              <Reveal delay={0.18}>
                <BenefitCard
                  icon={<Users className="h-6 w-6 text-blue-600" />}
                  title="Community support"
                  description="Embed yourself in an SMS community invested in exchanging lessons, introductions, and encouragement."
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Startup fundamentals */}
        <section id="founder-guide" className="border-y bg-zinc-50">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Foundations</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">If You&apos;re Considering a Startup</h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-3 text-muted-foreground">
                  Great ventures begin with disciplined foundations. Anchor your roadmap around these pillars before layering
                  on operational partners like SMS.
                </p>
              </Reveal>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
              <FounderPoint title="Idea" description="Articulate a product or service that solves a tangible problem." />
              <FounderPoint title="Market" description="Research demand, segmentation, and the competitive landscape." delay={0.04} />
              <FounderPoint title="Team" description="Assemble collaborators who complement your strengths and velocity." delay={0.08} />
              <FounderPoint title="Funding" description="Understand capital needs across bootstrapping, grants, angels, VC, or crowdfunding." delay={0.12} />
              <FounderPoint title="Execution" description="Ship learning loops quickly, measuring outcomes and adapting decisively." delay={0.16} />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="border-y bg-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <Reveal>
              <span className="mx-auto block w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Testimonials</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">Our Customer Feedback</h2>
            </Reveal>
            <div className="mt-10">
              <Testimonials />
            </div>
          </div>
        </section>

        {/* Insights */}
        {/* <section id="insights" className="container mx-auto px-4 py-16 md:py-24">
          <Reveal>
            <span className="mx-auto block w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Our Blog</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">Fresh Insights & Articles</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
              Practical guidance for founders, finance teams, and operations leaders.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <ArticleCard
                image="/startup-team-collaboration.png"
                tag="Insight"
                title="Budgeting Basics: Keeping Your Finances Healthy"
              />
            </Reveal>
            <Reveal delay={0.06}>
              <ArticleCard
                image="/placeholder-m8kkm.png"
                tag="Taxation"
                title="Simplify Sales Tax Compliance with Outsourcing"
              />
            </Reveal>
            <Reveal delay={0.12}>
              <ArticleCard
                image="/analytics-team-presentation.png"
                tag="Insight"
                title="Combining Strategy with Operational Excellence"
              />
            </Reveal>
          </div>
        </section> */}

        {/* CTA */}
        <section id="contact" className="pb-16 pt-2 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-2xl border">
              <Image
                src="/bright-office-consultation.png"
                alt="Get a consultation"
                width={2000}
                height={1000}
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
              <div className="relative z-10 px-6 py-16 sm:px-10 md:py-20 lg:px-16">
                <Reveal>
                  <h3 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">Get A Consultation Now!</h3>
                </Reveal>
                <Reveal delay={0.06}>
                  <p className="mt-3 max-w-2xl text-white/85">
                    Tell us about your goals and challenges—our team will propose a clear, actionable plan.
                  </p>
                </Reveal>
                <Reveal delay={0.12}>
                  <div className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
                    <Input
                      type="email"
                      placeholder="Your Email Address"
                      className="h-11 rounded-xl bg-white/95"
                      aria-label="Your email address"
                    />
                    <Button className="h-11 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
                      Contact Us
                    </Button>
                  </div>
                </Reveal>
              </div>
              <div className="pointer-events-none absolute bottom-3 left-6 h-2 w-24 rounded-full bg-blue-600 md:left-10 md:w-28 lg:left-16" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* WhatsApp Button */}
      <WhatsAppButton 
        phoneNumber="+9779860519083" 
        message="Hello! I'm interested in learning more about Startup Management Services (SMS). Could you please share how you can support my business?"
      />
    </div>
  )
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="group rounded-2xl shadow-sm transition hover:shadow-md">
      <CardHeader>
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href="#" className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-blue-800">
          Read more <ChevronRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

function PlatformItem({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="flex gap-3 rounded-2xl border bg-white p-4 shadow-sm">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden />
        <span className="text-sm text-muted-foreground">{text}</span>
      </div>
    </Reveal>
  )
}

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="h-full rounded-2xl border shadow-sm">
      <CardHeader>
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

function FounderPoint({
  title,
  description,
  delay = 0,
}: {
  title: string
  description: string
  delay?: number
}) {
  return (
    <Reveal delay={delay}>
      <div className="flex gap-3 rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
          <Lightbulb className="h-5 w-5 text-blue-600" aria-hidden />
        </div>
        <div>
          <div className="font-semibold">{title}</div>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Reveal>
  )
}

// function CaseCard({
//   image,
//   title,
//   description,
// }: {
//   image: string
//   title: string
//   description: string
// }) {
//   return (
//     <Card className="overflow-hidden rounded-2xl">
//       <CardContent className="p-0">
//         <div className="relative">
//           <Image src={image || "/placeholder.svg"} alt={title} width={1600} height={900} className="h-56 w-full object-cover sm:h-72" />
//         </div>
//         <div className="p-6">
//           <h3 className="text-xl font-semibold">{title}</h3>
//           <p className="mt-2 text-muted-foreground">{description}</p>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// function ArticleCard({
//   image,
//   tag = "Insight",
//   title = "Article title",
// }: {
//   image: string
//   tag?: string
//   title?: string
// }) {
//   return (
//     <Card className="overflow-hidden rounded-2xl shadow-sm">
//       <CardContent className="p-0">
//         <div className="relative">
//           <Image src={image || "/placeholder.svg"} alt={title} width={1600} height={900} className="h-56 w-full object-cover sm:h-64" />
//           <span className="absolute left-4 top-4 rounded-full bg-zinc-900/80 px-2.5 py-1 text-xs font-medium text-white">
//             {tag}
//           </span>
//         </div>
//         <div className="p-6">
//           <h3 className="text-lg font-semibold">{title}</h3 >
//           <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
//             Helpful tips and best practices from our consultants and finance leads.
//           </p>
//           <Link href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-blue-800">
//             Read more <ChevronRight className="h-4 w-4" />
//           </Link>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }
