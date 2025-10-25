import { useState, useEffect } from 'react';

export default function Contributors() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        setLoading(true);
        // Using a CORS proxy for demonstration - in production, use your own backend
        const response = await fetch(
          'https://api.allorigins.win/raw?url=' + 
          encodeURIComponent('https://api.github.com/repos/2MJ-DEV/BuyMeACoffee-Africa/contributors')
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch contributors');
        }
        
        const data = await response.json();
        setContributors(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
          <p className="mt-4 text-gray-700 font-medium">Loading contributors...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
          <div className="text-red-600 text-center">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-xl font-bold mb-2">Error Loading Contributors</h2>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Amazing Contributors
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Thank you to all the wonderful people who have contributed to BuyMeACoffee-Africa! 
            Your contributions make this project possible.
          </p>
          <div className="mt-4 inline-block bg-orange-100 rounded-full px-6 py-2">
            <span className="text-orange-700 font-semibold">
              {contributors.length} Contributor{contributors.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Contributors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {contributors.map((contributor) => (
            <a
              key={contributor.id}
              href={contributor.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 flex flex-col items-center group"
            >
              <div className="relative mb-4">
                <img
                  src={contributor.avatar_url}
                  alt={`${contributor.login}'s avatar`}
                  className="w-24 h-24 rounded-full border-4 border-orange-200 group-hover:border-orange-400 transition-colors duration-300"
                />
                <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg">
                  {contributor.contributions}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 text-center">
                {contributor.login}
              </h3>
              
              <p className="text-sm text-gray-600 mt-1">
                {contributor.contributions} contribution{contributor.contributions !== 1 ? 's' : ''}
              </p>
              
              <div className="mt-3 flex items-center text-orange-600 group-hover:text-orange-700 text-sm font-medium">
                <span>View Profile</span>
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            Want to see your name here? Check out our{' '}
            <a 
              href="https://github.com/2MJ-DEV/BuyMeACoffee-Africa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-700 font-medium underline"
            >
              GitHub repository
            </a>
            {' '}and start contributing today!
          </p>
        </div>
      </div>
    </div>
  );
}