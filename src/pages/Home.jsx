import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee, Heart, Share2, UserPlus, ArrowRight, Rocket } from 'lucide-react';

export default function HomePage() {
    const navigate = useNavigate();
    
    const handleDiscoverClick = () => {
    navigate('/creators')
  };

  const handleHowItWorksClick = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLoginClick = () => {
    navigate('/login')
  };

  const handleSignUpClick = () => {
    navigate('/signup')
  };

  const mockCreators = [
    {
      name: "Sarah Johnson",
      category: "Digital Artist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      supporters: 234,
      description: "Creating beautiful digital illustrations and art tutorials"
    },
    {
      name: "Mike Chen",
      category: "Content Creator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      supporters: 189,
      description: "Sharing tech reviews and coding tips"
    },
    {
      name: "Emma Davis",
      category: "Writer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      supporters: 456,
      description: "Writing stories that inspire and entertain"
    }
  ];

  const steps = [
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: "Create Your Page",
      description: "Set up your profile in minutes and start receiving support from your community"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Share Your Link",
      description: "Share your unique link with your audience across all platforms"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Receive Support",
      description: "Get support from your fans and keep creating what you love"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Coffee className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-semibold">
                <span className="text-gray-900">BuyMeACoffee</span>
                <span className="text-blue-600">-Africa</span>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <button onClick={handleLoginClick} className="text-gray-600 hover:text-gray-900 text-sm font-medium cursor-pointer">
                Log In
              </button>
              <button onClick={handleSignUpClick} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full mb-8 text-sm">
              <Rocket className="w-4 h-4" />
              Support Your Local Creators
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Fuel creativity with your community.
              <br />
              One coffee at a time.
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Empower local creators to keep doing what they love. Support them directly and help build a thriving creative community in your area.
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handleDiscoverClick}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                Discover Creators
                <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={handleHowItWorksClick} className="bg-white text-gray-700 px-6 py-3 rounded-lg text-base font-medium border border-gray-300 hover:border-gray-400 transition-colors cursor-pointer">
                How It Works
              </button>
            </div>

            {/* Preview Window */}
            <div className="mt-16">
              <div className="bg-gray-100 rounded-lg p-2 shadow-lg max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="flex-1 bg-white rounded text-center py-1 text-xs text-gray-500">
                    Preview
                  </div>
                </div>
                <div className="bg-white rounded h-64 flex items-center justify-center">
                  <Coffee className="w-20 h-20 text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">Get started in three simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Creators Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Creators
            </h2>
            <p className="text-xl text-gray-600">Meet some of our amazing local creators</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockCreators.map((creator, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{creator.name}</h3>
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      {creator.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{creator.description}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Heart className="w-4 h-4" />
                    <span>{creator.supporters} supporters</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Team</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Overview</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">About</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Company</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Projects</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Developers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-600">
            © 2025 BuyMeACoffee-Africa. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}