'use client'
import { useState } from 'react';
import { Clock, Calendar, Eye, Heart, Share2, Tag, ArrowLeft } from 'lucide-react';

// Type definitions
interface BlogSection {
  heading: string;
  content: string;
  points?: string[];
}

interface BlogContent {
  introduction: string;
  sections: BlogSection[];
  conclusion: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  views: string;
  author: string;
  authorBio: string;
  image: string;
  category: string;
  tags: string[];
  likes: number;
  content: BlogContent;
}

interface BlogDetailProps {
  blog: BlogPost;
  onBack: () => void;
}

// Blog data with full content
const blogData: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 Neighborhoods in Delhi NCR for Property Investment in 2025",
    excerpt: "Discover the most promising neighborhoods in Delhi NCR that offer excellent investment opportunities with high growth potential and modern amenities.",
    date: "January 15, 2025",
    readTime: "8 min read",
    views: "1,000 views",
    author: "Rajesh Kumar",
    authorBio: "Senior Market Analyst with 15+ years of experience in Delhi NCR market research.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
    category: "Market Analysis",
    tags: ["Delhi NCR", "Investment", "Neighborhoods", "2025"],
    likes: 155,
    content: {
      introduction: "Delhi NCR continues to be one of India's most dynamic real estate markets. With new infrastructure developments and growing connectivity, certain neighborhoods are emerging as prime investment destinations. The real estate market in Delhi NCR continues to evolve with new developments, infrastructure projects, and changing buyer preferences. Understanding these trends is crucial for both investors and homebuyers looking to make informed decisions.",
      sections: [
        {
          heading: "Market Analysis",
          content: "Current market conditions show promising growth potential across various segments. Key factors driving this growth include: improved infrastructure connectivity, government policy support, rising disposable income, and urbanization trends. The market has shown consistent appreciation rates of 8-12% annually in prime locations."
        },
        {
          heading: "Investment Tips",
          content: "For successful real estate investment, consider these essential factors:",
          points: [
            "Location analysis and future development plans",
            "Price appreciation potential",
            "Rental yield calculations",
            "Builder reputation and project quality"
          ]
        }
      ],
      conclusion: "The real estate market presents numerous opportunities for those who approach it with the right knowledge and strategy. By staying informed about market trends and following sound investment principles, you can make decisions that align with your financial goals."
    }
  },
  {
    id: 2,
    title: "Investment Opportunities Near Jewar Airport: A Complete Guide",
    excerpt: "Explore the strategic growth potential of properties near the upcoming Jewar Airport and why smart investors are already making their moves.",
    date: "January 10, 2025",
    readTime: "6 min read",
    views: "850 views",
    author: "Priya Sharma",
    authorBio: "Real Estate Investment Consultant specializing in emerging markets.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
    category: "Investment Tips",
    tags: ["Jewar Airport", "Investment", "Greater Noida"],
    likes: 142,
    content: {
      introduction: "The Noida International Airport at Jewar is set to transform the real estate landscape of the region. This comprehensive guide explores investment opportunities and growth potential in the surrounding areas.",
      sections: [
        {
          heading: "Airport Impact on Real Estate",
          content: "Major airports have historically driven significant real estate appreciation in surrounding areas. The Jewar Airport project is expected to catalyze development across multiple sectors including residential, commercial, and hospitality."
        },
        {
          heading: "Key Investment Zones",
          content: "Several zones around the airport offer unique advantages:",
          points: [
            "Primary zone: 0-5 km radius - Maximum appreciation potential",
            "Secondary zone: 5-15 km - Balanced growth with affordability",
            "Tertiary zone: 15-25 km - Long-term investment options"
          ]
        }
      ],
      conclusion: "Investing near Jewar Airport presents a once-in-a-decade opportunity. Early investors stand to benefit from significant capital appreciation as infrastructure development accelerates."
    }
  },
  {
    id: 3,
    title: "First-Time Home Buyer's Guide: Navigate Delhi NCR Market Like a Pro",
    excerpt: "Everything you need to know about buying your first home in Delhi NCR, from financing options to legal documentation.",
    date: "January 5, 2025",
    readTime: "10 min read",
    views: "1,200 views",
    author: "Amit Gupta",
    authorBio: "Property Consultant helping first-time buyers for over 10 years.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=400&fit=crop",
    category: "Buying Guide",
    tags: ["First Time", "Delhi NCR", "Home Buying"],
    likes: 198,
    content: {
      introduction: "Buying your first home is an exciting yet challenging journey. This comprehensive guide will help you navigate the Delhi NCR real estate market with confidence and make informed decisions.",
      sections: [
        {
          heading: "Understanding Your Budget",
          content: "Before starting your home search, it's crucial to understand your financial capacity. Consider your down payment, loan eligibility, and ongoing EMI affordability. Factor in additional costs like registration, stamp duty, and maintenance."
        },
        {
          heading: "Choosing the Right Location",
          content: "Location is paramount in real estate. Consider these factors:",
          points: [
            "Proximity to workplace and essential services",
            "Connectivity and transportation options",
            "Social infrastructure and amenities",
            "Future development plans in the area"
          ]
        }
      ],
      conclusion: "With proper planning, research, and professional guidance, buying your first home can be a smooth and rewarding experience. Take your time, do your due diligence, and make a choice that aligns with your long-term goals."
    }
  },
  {
    id: 4,
    title: "Property Documentation: Legal Guide for Safe Real Estate Transactions",
    excerpt: "Understand essential legal documents required for property transactions and avoid common pitfalls that could impact property ownership rights.",
    date: "January 5, 2025",
    readTime: "10 min read",
    views: "920 views",
    author: "Advocate Sarah Khan",
    authorBio: "Real Estate Lawyer with expertise in property law and documentation.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop",
    category: "Legal Advice",
    tags: ["Legal", "Documentation", "Property Law"],
    likes: 176,
    content: {
      introduction: "Proper documentation is the foundation of secure property ownership. This guide covers all essential legal documents and verification processes to ensure safe real estate transactions.",
      sections: [
        {
          heading: "Essential Documents",
          content: "Every property transaction requires thorough documentation. Key documents include title deeds, sale agreements, encumbrance certificates, and property tax receipts. Each document serves a specific purpose in establishing clear ownership."
        },
        {
          heading: "Verification Process",
          content: "Document verification steps:",
          points: [
            "Title search and chain of ownership verification",
            "Encumbrance certificate check",
            "Property tax and utility bill verification",
            "Building approval and occupancy certificate review"
          ]
        }
      ],
      conclusion: "Investing time in proper documentation review can save you from future legal complications. Always consult with legal experts and conduct thorough due diligence before finalizing any property transaction."
    }
  },
  {
    id: 5,
    title: "Luxury Apartments in Gurgaon: Market Trends and Investment Outlook",
    excerpt: "Analyze the luxury apartment market in Gurgaon, including price trends, upcoming projects, and investment potential.",
    date: "December 28, 2024",
    readTime: "7 min read",
    views: "780 views",
    author: "Dr. Vikram Singh",
    authorBio: "Real Estate Market Analyst specializing in luxury segment.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=400&fit=crop",
    category: "Market Trends",
    tags: ["Luxury", "Gurgaon", "Market Trends"],
    likes: 134,
    content: {
      introduction: "The luxury real estate segment in Gurgaon has shown remarkable resilience and growth. This analysis explores current market dynamics, emerging trends, and future outlook for high-end residential properties.",
      sections: [
        {
          heading: "Current Market Overview",
          content: "Gurgaon's luxury market is experiencing robust demand driven by corporate executives, entrepreneurs, and NRIs. Premium locations like Golf Course Road, DLF Phase 5, and Sector 42 continue to command premium prices."
        },
        {
          heading: "Investment Considerations",
          content: "Key factors for luxury property investment:",
          points: [
            "Brand reputation of the developer",
            "Exclusive amenities and facilities",
            "Location prestige and connectivity",
            "Rental yield potential for high-net-worth tenants"
          ]
        }
      ],
      conclusion: "The luxury segment in Gurgaon offers excellent opportunities for discerning investors. With continued infrastructure development and increasing affluence, the market is poised for sustained growth."
    }
  },
  {
    id: 6,
    title: "Affordable Housing Schemes in Delhi NCR: Your Guide to Subsidized Homes",
    excerpt: "Explore government schemes and affordable housing options that make homeownership accessible for middle-income families.",
    date: "December 25, 2024",
    readTime: "9 min read",
    views: "1,350 views",
    author: "Meeta Joshi",
    authorBio: "Housing Policy Expert and Social Development Consultant.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=400&fit=crop",
    category: "Government Schemes",
    tags: ["Affordable Housing", "Government Schemes", "PMAY"],
    likes: 223,
    content: {
      introduction: "The Government of India has launched several initiatives to make housing affordable for all. This guide covers various schemes, eligibility criteria, and application processes to help you achieve your dream of homeownership.",
      sections: [
        {
          heading: "PMAY - Pradhan Mantri Awas Yojana",
          content: "PMAY offers interest subsidies and financial assistance to economically weaker sections and middle-income groups. The scheme has different components for urban and rural areas, with varying subsidy amounts based on income categories."
        },
        {
          heading: "Eligibility and Application",
          content: "How to apply for affordable housing:",
          points: [
            "Check income eligibility criteria for your category",
            "Gather required documents (income proof, ID, etc.)",
            "Apply through official portal or approved developers",
            "Track application status and complete verification"
          ]
        }
      ],
      conclusion: "Affordable housing schemes have made homeownership a reality for millions of families. Understanding these programs and leveraging available benefits can significantly reduce your financial burden."
    }
  }
];

export default function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: string[] = ['All', 'Market Analysis', 'Investment Tips', 'Buying Guide', 'Legal Advice', 'Neighborhood Guides'];

  const filteredBlogs = blogData.filter((blog: BlogPost) => {
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (selectedBlog) {
    return <BlogDetail blog={selectedBlog} onBack={() => setSelectedBlog(null)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Real Estate Insights & Market Updates</h1>
          <p className="text-xl mb-8 text-blue-100">
            Stay informed with the latest trends, investment opportunities, and expert advice from Delhi NCR's leading real estate professionals.
          </p>
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search articles, topics, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            {/* Popular Articles */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-4">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                📈 Popular Articles
              </h3>
              <div className="space-y-3">
                <div className="flex gap-3 pb-3 border-b">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=80&h=80&fit=crop" 
                    alt="Top 10" 
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-black line-clamp-2 hover:text-blue-600 cursor-pointer">
                      Top 10 Neighborhoods
                    </p>
                    <p className="text-xs text-black mt-1">5,243 views</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat: string) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${
                      activeCategory === cat
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Blog Grid */}
          <main className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredBlogs.map((blog: BlogPost) => (
                <article key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                    />
                    <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {blog.category}
                    </span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {blog.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold mb-3 text-black hover:text-blue-600 transition cursor-pointer line-clamp-2">
                      {blog.title}
                    </h2>
                    
                    <p className="text-black text-sm mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                          {blog.author.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-black">{blog.author}</span>
                      </div>
                      <button 
                        onClick={() => setSelectedBlog(blog)}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1"
                      >
                        Read More →
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {blog.tags.slice(0, 3).map((tag: string, idx: number) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Newsletter Section */}
   
    </div>
  );
}

// Blog Detail Component
function BlogDetail({ blog, onBack }: BlogDetailProps) {
  const [liked, setLiked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(blog.likes);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Home</span>
            <span>›</span>
            <span>Blog</span>
            <span>›</span>
            <span className="text-gray-900">{blog.category}</span>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Blog</span>
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
              {blog.title}
            </h1>
            <div className="flex items-center gap-4 text-white text-sm">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {blog.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                {blog.readTime}
              </span>
              <span className="flex items-center gap-2">
                <Eye size={16} />
                {blog.views}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Author Info */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
              {blog.author.charAt(0)}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-gray-900">{blog.author}</h3>
              <p className="text-gray-600 text-sm">{blog.authorBio}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                  liked ? 'bg-red-100 text-red-600' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
                <span className="font-semibold">{likes}</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition">
                <Share2 size={18} />
                <span className="font-semibold">Share</span>
              </button>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-blue-900">
              📋 Table of Contents
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#introduction" className="text-blue-700 hover:text-blue-900 hover:underline">
                  Introduction
                </a>
              </li>
              {blog.content.sections.map((section: BlogSection, idx: number) => (
                <li key={idx}>
                  <a
                    href={`#section-${idx}`}
                    className="text-blue-700 hover:text-blue-900 hover:underline"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
              <li>
                <a href="#conclusion" className="text-blue-700 hover:text-blue-900 hover:underline">
                  Conclusion
                </a>
              </li>
            </ul>
          </div>

          {/* Article Content */}
          <article className="bg-white rounded-lg shadow-md p-8 mb-8 prose prose-lg max-w-none">
            <div id="introduction" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">{blog.content.introduction}</p>
            </div>

            {blog.content.sections.map((section: BlogSection, idx: number) => (
              <div id={`section-${idx}`} key={idx} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
                {section.points && (
                  <ul className="space-y-2 ml-6">
                    {section.points.map((point: string, pidx: number) => (
                      <li key={pidx} className="text-gray-700 leading-relaxed list-disc">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div id="conclusion" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed">{blog.content.conclusion}</p>
            </div>
          </article>

          {/* Tags */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Tag size={20} />
              Tags:
            </h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag: string, idx: number) => (
                <span
                  key={idx}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="font-bold text-2xl mb-6 flex items-center gap-2">
              💬 Comments
            </h3>
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <p className="text-gray-600 font-medium mb-2">Comments feature coming soon!</p>
              <p className="text-gray-500 text-sm">Share your thoughts on social media for now.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}