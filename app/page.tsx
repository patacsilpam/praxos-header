import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import {
  ArrowRight,
  Instagram,
  Twitter,
  Send,
  MessageCircle,
  ChevronDown,
  MapPin,
  Star,
} from "lucide-react";
import Head from "next/head";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black  to-black text-white relative overflow-hidden">
      <Header />
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147,51,234,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/15 via-transparent to-purple-900/20 animate-pulse" />

      {/* Main Content */}
      <main className="relative z-10 px-6 py-12 lg:px-12">
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch min-h-[700px] w-full">
            <div className="flex-1 bg-gradient-to-br from-purple-900/10 via-purple-800/10 to-gray-900/10 backdrop-blur-xl border border-gray-600/30 rounded-3xl p-12 lg:p-16 shadow-2xl shadow-black/50 hover:shadow-purple-900/20 transition-all duration-500">
              <div className="space-y-12 h-full flex flex-col justify-center">
                <Badge
                  variant="outline"
                  className="border-purple-500/30 text-gray-200 bg-purple-900/20 backdrop-blur-sm w-fit px-6 py-3 rounded-full shadow-lg hover:bg-purple-900/30 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex -space-x-2">
                      <div className="w-7 h-7 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-gray-800 shadow-md" />
                      <div className="w-7 h-7 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full border-2 border-gray-800 shadow-md" />
                      <div className="w-7 h-7 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full border-2 border-gray-800 shadow-md" />
                    </div>
                    <span className="font-semibold">
                      Over 7+ years of expertise
                    </span>
                    <ArrowRight className="w-5 h-5 text-purple-400" />
                  </div>
                </Badge>

                <div className="space-y-8">
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-medium leading-[0.9] tracking-tight text-balance">
                    All Talent,{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 drop-shadow-lg">
                      None
                    </span>
                    <br />
                    of the Overhead.
                  </h1>

                  <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
                    Full-spectrum virtual teams in admin, sales, marketing, ops,
                    finance & tech — all-in-one, 70% more cost-effective than
                    in-house.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <Button className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 text-white px-10 py-4 rounded-full flex items-center space-x-3 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 font-semibold text-lg">
                    <span>Get started with us</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>

                  <Button
                    variant="outline"
                    className="border-gray-500/50 text-gray-200 hover:bg-gray-800/50 hover:border-purple-500/50 px-10 py-4 rounded-full flex items-center space-x-3 bg-transparent backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold text-lg"
                  >
                    <span>Book a discovery call</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[700px] bg-gradient-to-br from-purple-900/ via-purple-900/10 to-gray-900/10 backdrop-blur-xl border border-gray-600/30 rounded-3xl p-12 lg:p-16 relative shadow-2xl shadow-black/50 hover:shadow-purple-900/20 transition-all duration-500">
              <div className="flex flex-row justify-evenly ">
                {/* Statistics Panel - OUR NUMBERS */}
                <div className="absolute top-12 left-7 space-y-8 z-10">
                  <div className="text-left">
                    <div className="w-fit py-3 px-5 flex items-center justify-start space-x-2 text-sm rounded-full bg-white/5 backdrop-blur-2xl text-gray-400 mb-4 font-medium">
                      <span className="tracking-wider">OUR NUMBERS</span>
                      <ChevronDown className="w-4 h-4 text-purple-400" />
                    </div>
                    {/*Expert Support*/}
                    <div className="space-y-8">
                      <div className=" rounded-2xl p-4 ">
                        <div className="text-5xl font-black ">360°</div>
                        <div className="text-sm text-gray-400 font-medium">
                          Expert Support
                        </div>
                      </div>
                      {/*Specialist Performance*/}
                      <div className="rounded-2xl p-4 ">
                        <div className="flex items-center justify-start space-x-2">
                          <span className="text-3xl">
                            <Star size={32} />
                          </span>
                          <span className="text-5xl font-black ">5</span>
                          <span className="text-2xl font-bold">Stars</span>
                        </div>
                        <div className="text-sm text-gray-400 font-medium">
                          specialist's performance
                        </div>
                      </div>
                      {/*Secure & trusted*/}
                      <div className=" rounded-2xl p-4">
                        <div className="text-5xl font-black ">100%</div>
                        <div className="text-sm text-gray-400 font-medium">
                          Secure & trusted
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Location Badge */}
                {/* Moved to top-right of the header */}
                {/*  */}
                <div className="absolute top-12 right-7  hidden lg:flex items-center space-x-3 text-sm text-gray-300  px-4 py-2 rounded-full ">
                  <MapPin className="w-4 h-4 " />
                  <span className="font-medium">Location:</span>
                  <span className="flex items-center space-x-2">
                    <span>&#x1F1FA;&#x1F1F8;</span>
                    <span className="font-semibold">United States</span>
                  </span>
                </div>
              </div>

              <div className="mt-20 ml-20 relative w-full h-96 lg:h-[450px] flex items-center justify-center">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Main globe structure */}
                  <div className="absolute inset-0 rounded-full border-2 border-purple-400/40 shadow-2xl shadow-purple-500/20">
                    {/* Latitude lines */}
                    <div className="absolute top-[15%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
                    <div className="absolute top-[35%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
                    <div className="absolute top-[65%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />
                    <div className="absolute top-[85%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />

                    {/* Longitude lines */}
                    <div className="absolute top-0 bottom-0 left-[15%] w-px bg-gradient-to-b from-transparent via-purple-400/30 to-transparent" />
                    <div className="absolute top-0 bottom-0 left-[35%] w-px bg-gradient-to-b from-transparent via-purple-400/40 to-transparent" />
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-purple-400/50 to-transparent" />
                    <div className="absolute top-0 bottom-0 left-[65%] w-px bg-gradient-to-b from-transparent via-purple-400/40 to-transparent" />
                    <div className="absolute top-0 bottom-0 left-[85%] w-px bg-gradient-to-b from-transparent via-purple-400/30 to-transparent" />
                  </div>

                  {/* Continental outlines - more detailed */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    {/* North America */}
                    <div className="absolute top-[25%] left-[20%] w-20 h-16 border border-purple-400/50 rounded-xl transform rotate-12 bg-purple-500/5" />
                    {/* Europe/Africa */}
                    <div className="absolute top-[30%] left-[45%] w-12 h-20 border border-purple-400/50 rounded-lg transform rotate-6 bg-purple-500/5" />
                    {/* Asia */}
                    <div className="absolute top-[20%] right-[25%] w-16 h-14 border border-purple-400/50 rounded-lg transform -rotate-12 bg-purple-500/5" />
                    {/* South America */}
                    <div className="absolute bottom-[30%] left-[25%] w-8 h-16 border border-purple-400/50 rounded-lg transform rotate-15 bg-purple-500/5" />
                    {/* Australia */}
                    <div className="absolute bottom-[35%] right-[30%] w-10 h-6 border border-purple-400/50 rounded transform -rotate-6 bg-purple-500/5" />
                  </div>

                  {/* Multiple glow layers for depth */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-blue-500/10 to-purple-500/20 blur-2xl animate-pulse" />
                  <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-400/10 to-blue-400/10 blur-xl" />

                  {/* Rotating highlight effect */}
                  <div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-purple-300/20 to-transparent animate-spin"
                    style={{ animationDuration: "20s" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-8 right-8 z-20 px-6 py-5">
        <Button className="px-10 py-5 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 text-white  rounded-full flex items-center shadow-2xl shadow-black/50 hover:shadow-purple-900/30 transition-all duration-300 hover:scale-105 border border-gray-600/30 backdrop-blur-sm font-semibold">
          <span className="text-xl font-normal">Let's chat</span>
          <MessageCircle className="w-14 h-14 text-purple-400" size={20} />
        </Button>
      </div>
    </div>
  );
}
