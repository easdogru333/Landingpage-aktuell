const StartWithKetoAI = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[40px] border border-gray-200 shadow-lg p-12 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 font-outfit tracking-tight">Start with KetoAI</h2>
          <p className="text-gray-600 mb-12 font-inter text-lg leading-relaxed">
            Simplify your Keto diet with AI-powered analysis and reach your goals faster
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="bg-gradient-to-r from-red-50 to-red-100 px-6 py-2 rounded-full">
              <span className="text-red-500 font-inter font-medium tracking-wide text-sm uppercase">IOS App coming soon</span>
            </div>
            <a 
              href="https://keto-ai.vercel.app/app"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-black via-gray-800 to-black px-8 py-4 text-base font-semibold font-outfit text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-gray-700"
            >
              <span>Try Beta</span>
              <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartWithKetoAI; 