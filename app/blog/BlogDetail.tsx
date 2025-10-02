
// Blog Detail Component
function BlogDetail({ blog, onBack }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(blog.likes);

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
              {blog.content.sections.map((section, idx) => (
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

            {blog.content.sections.map((section, idx) => (
              <div id={`section-${idx}`} key={idx} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
                {section.points && (
                  <ul className="space-y-2 ml-6">
                    {section.points.map((point, pidx) => (
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
              {blog.tags.map((tag, idx) => (
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