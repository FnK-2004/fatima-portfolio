const jobs = [
  {
    company: "AMGS",
    title: "Salesforce Intern",
    date: "Apr 2025 – Present",
    desc: "Built LWC components, styled login/registration pages, ran Jest tests."
  },
  {
    company: "Kastech",
    title: "Data Migration Intern",
    date: "Feb 2025 – Present",
    desc: "Worked on PeopleSoft migrations to cloud (OCI, AWS, Azure)."
  }
];

export default function Experience() {
  return (
    <section className="p-8 bg-gray-100" id="experience">
      <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <div className="bg-white shadow-md p-4 rounded" key={job.title}>
            <h3 className="text-xl font-semibold">{job.title} @ {job.company}</h3>
            <p className="text-sm text-gray-500">{job.date}</p>
            <p className="mt-2">{job.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
