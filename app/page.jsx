import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FEATURES, STEPS, TESTIMONIALS } from "@/lib/landing";

export default function LandingPage() {
  return (
    <div className="flex flex-col pt-16">
      {/* ───── Split Hero Section ───── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#F4F7F6]">
        {/* Organic Background Shape for Visual Side */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-[#244C3E] to-[#3E6E5C] rounded-br-[100px] shadow-2xl z-0 hidden lg:block" />

        <div className="container relative z-10 mx-auto px-4 md:px-6 py-12 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content Area (Visual/Functional mix) */}
            <div className="space-y-8 lg:pr-10">
              <Badge variant="outline" className="bg-[#8DC7D2]/20 text-white border-transparent lg:text-white px-4 py-1 rounded-full backdrop-blur-sm lg:bg-white/10 lg:border-white/20 shadow-sm text-primary">
                Split expenses. Simplify life.
              </Badge>

              <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl lg:text-white text-primary leading-[1.1]">
                The smartest way to split expenses
              </h1>

              <p className="max-w-[500px] text-lg lg:text-[#C7D4D2] text-muted-foreground leading-relaxed">
                Track shared expenses, organize trips, and settle up quickly. Never worry about who owes who again with our calm, organized approach.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#D9A11E] hover:bg-[#E0A92B] text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="/dashboard">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg font-medium bg-white/50 backdrop-blur-sm border-transparent hover:bg-white/80 lg:text-white lg:hover:text-primary lg:border-white/20 transition-all text-[#2F5D50]"
                >
                  <Link href="#how-it-works">See How It Works</Link>
                </Button>
              </div>
            </div>

            {/* Right Dashboard Mockup Area */}
            <div className="relative w-full aspect-[4/3] lg:aspect-[16/11] max-w-[700px] mx-auto hidden md:block">
              {/* Decorative Blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#8DC7D2] rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-pulse" />
              
              <div className="absolute inset-0 bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(35,78,69,0.3)] border border-gray-100 overflow-hidden flex flex-col transition-transform hover:-translate-y-2 duration-500">
                {/* Mock Header */}
                <div className="h-16 border-b border-[#F4F7F6] flex items-center px-6 justify-between bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#D9A11E] flex justify-center items-center text-white font-bold text-xs shadow-inner">AJ</div>
                    <div className="h-4 w-32 bg-[#F4F7F6] rounded-full" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#F4F7F6]" />
                    <div className="h-8 w-24 rounded-full bg-[#D9A11E] shadow-sm" />
                  </div>
                </div>
                
                {/* Mock Body */}
                <div className="flex-1 flex bg-[#F4F7F6]/50">
                  {/* Mock Sidebar */}
                  <div className="w-16 lg:w-48 border-r border-[#F4F7F6] bg-white p-4 flex flex-col gap-3">
                    <div className="h-10 rounded-xl bg-[#234E45]/5 w-full hidden lg:block" />
                    <div className="h-10 rounded-xl bg-[#F4F7F6] w-full hidden lg:block" />
                    <div className="h-10 rounded-xl bg-[#F4F7F6] w-full hidden lg:block" />
                    {/* Collapsed icons for small screens */}
                    <div className="h-10 w-10 mx-auto rounded-xl bg-[#234E45]/5 block lg:hidden" />
                    <div className="h-10 w-10 mx-auto rounded-xl bg-[#F4F7F6] block lg:hidden" />
                  </div>
                  
                  {/* Mock Content */}
                  <div className="flex-1 p-6 flex flex-col gap-6">
                    <div className="h-24 rounded-2xl bg-white shadow-sm border border-[#F4F7F6] p-4 flex gap-4">
                      <div className="h-full w-16 bg-[#F4F7F6] rounded-xl" />
                      <div className="flex-1 flex flex-col gap-2 justify-center">
                        <div className="h-3 w-1/3 bg-[#C7D4D2] rounded-full" />
                        <div className="h-4 w-1/2 bg-[#234E45] rounded-full" />
                      </div>
                      <div className="w-16 h-full flex flex-col gap-2 justify-center items-end">
                        <div className="h-3 w-10 bg-[#C7D4D2] rounded-full" />
                        <div className="h-5 w-14 bg-[#D9A11E] rounded-full" />
                      </div>
                    </div>
                    
                    <div className="h-24 rounded-2xl bg-white shadow-sm border border-[#F4F7F6] p-4 flex gap-4">
                      <div className="h-full w-16 bg-[#F4F7F6] rounded-xl" />
                      <div className="flex-1 flex flex-col gap-2 justify-center">
                        <div className="h-3 w-1/4 bg-[#C7D4D2] rounded-full" />
                        <div className="h-4 w-2/5 bg-[#234E45] rounded-full" />
                      </div>
                      <div className="w-16 h-full flex flex-col gap-2 justify-center items-end">
                        <div className="h-3 w-12 bg-[#C7D4D2] rounded-full" />
                        <div className="h-5 w-16 bg-[#8DC7D2] rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Features ───── */}
      <section id="features" className="bg-[#FFFFFF] py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="bg-[#8DC7D2]/20 text-[#234E45] border-transparent px-4 py-1 rounded-full">
            Features
          </Badge>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#234E45] md:text-5xl">
            Everything you need
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[#2F5D50] md:text-xl/relaxed">
            Our platform provides all the tools you need to handle shared
            expenses with calm precision.
          </p>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ title, Icon, bg, color, description }) => (
              <Card
                key={title}
                className="flex flex-col items-center space-y-6 p-8 text-center rounded-3xl shadow-xl shadow-[#234E45]/5 hover:-translate-y-2 transition-transform duration-300 border-none bg-[#F4F7F6]"
              >
                <div className={`rounded-2xl p-4 shadow-sm bg-white`}>
                  <Icon className={`h-8 w-8 text-[#D9A11E]`} />
                </div>

                <h3 className="text-xl font-bold text-[#234E45]">{title}</h3>
                <p className="text-[#2F5D50] leading-relaxed">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── How it works ───── */}
      <section id="how-it-works" className="py-24 bg-[#F4F7F6]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="bg-[#D9A11E]/20 text-[#D9A11E] border-transparent px-4 py-1 rounded-full">
            How It Works
          </Badge>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#234E45] md:text-5xl">
            Splitting expenses is simple
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[#2F5D50] md:text-xl/relaxed">
            Follow these simple steps to start tracking and splitting expenses
            with friends.
          </p>

          <div className="mx-auto mt-16 grid max-w-5xl gap-12 md:grid-cols-3 relative">
            <div className="absolute top-1/4 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-[#C7D4D2] to-transparent hidden md:block" />
            
            {STEPS.map(({ label, title, description }) => (
              <div key={label} className="flex flex-col items-center space-y-6 relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg text-2xl font-bold text-[#D9A11E]">
                  {label}
                </div>
                <h3 className="text-xl font-bold text-[#234E45]">{title}</h3>
                <p className="text-[#2F5D50] text-center leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Testimonials ───── */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="bg-[#8DC7D2]/20 text-[#234E45] border-transparent px-4 py-1 rounded-full">
            Testimonials
          </Badge>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#234E45] md:text-5xl">
            What our users are saying
          </h2>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map(({ quote, name, role, image }) => (
              <Card key={name} className="flex flex-col justify-between rounded-3xl shadow-xl shadow-[#234E45]/5 border-none bg-[#F4F7F6]">
                <CardContent className="space-y-6 p-8">
                  <p className="text-[#2F5D50] leading-relaxed relative">
                    <span className="text-4xl text-[#C7D4D2] absolute -top-4 -left-2 leading-none">"</span>
                    <span className="relative z-10">{quote}</span>
                  </p>
                  <div className="flex items-center space-x-4 pt-4 border-t border-[#C7D4D2]/30">
                    <Avatar className="h-12 w-12 ring-2 ring-white shadow-sm">
                      {/* Placeholder avatar */}
                      <AvatarImage src={image} alt={name} />
                      <AvatarFallback className="uppercase bg-[#D9A11E] text-white">
                        {name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-base font-bold text-[#234E45]">{name}</p>
                      <p className="text-sm text-[#8DC7D2]">{role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Call‑to‑Action ───── */}
      <section className="py-24 bg-gradient-to-r from-[#244C3E] to-[#3E6E5C]">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-white">
            Ready to simplify sharing?
          </h2>
          <p className="mx-auto max-w-[600px] text-[#AFC3C0] md:text-xl/relaxed">
            Join thousands of users who have made splitting expenses
            stress‑free.
          </p>
          <Button asChild size="lg" className="bg-[#D9A11E] hover:bg-[#E0A92B] text-white rounded-full px-10 py-7 text-lg font-medium shadow-xl hover:-translate-y-1 transition-all">
            <Link href="/dashboard">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="bg-[#F4F7F6] py-12 text-center text-sm text-[#2F5D50]">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Splitr. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
