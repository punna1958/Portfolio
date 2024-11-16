export const Languages = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Languages</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <LanguageCard language="English" proficiency="Professional Proficiency" />
        <LanguageCard language="Hindi" proficiency="Native" />
        <LanguageCard language="Punjabi" proficiency="Native" />
      </div>
    </div>
  </section>
);

const LanguageCard = ({ language, proficiency }: { language: string; proficiency: string }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <h3 className="font-semibold text-gray-900">{language}</h3>
    <p className="text-gray-600">{proficiency}</p>
  </div>
);
