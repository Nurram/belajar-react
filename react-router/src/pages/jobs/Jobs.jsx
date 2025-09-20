import { Link, useLoaderData } from "react-router-dom";

export default function Jobs() {
  const jobsData = useLoaderData();

  return (
    <div className="jobs">
      {jobsData.map((job) => {
        return (
          <Link to={job.id.toString()} key={job.id}>
            <h4>{job.title}</h4>
            <p>{job.location}</p>
          </Link>
        );
      })}
    </div>
  );
}
