import { useLoaderData } from "react-router-dom";

export default function JobDetail() {
  const jobDetail = useLoaderData();

  return (
    <div className="job-details">
      <p>
        <b>Job Title:</b> {jobDetail.title}
      </p>
      <p>
        <b>Job Salary:</b> {jobDetail.salary}
      </p>
      <p>
        <b>Job Location:</b> {jobDetail.location}
      </p>
      <p>
        <b>Description:</b> Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Maiores accusamus, quo nobis officia ut blanditiis provident esse,
        rem temporibus architecto atque labore facere quia consequatur tempora
        voluptate nihil nulla odio! Eveniet obcaecati quos, sapiente aperiam
        numquam minima excepturi eligendi adipisci, hic dolores cupiditate,
        deleniti assumenda tempore doloremque voluptas illum consequatur veniam
        voluptatibus facere ipsa repellendus laborum. Ut ex sint explicabo.
        Dignissimos dolore veniam voluptas reiciendis suscipit vitae. Eos
        eligendi harum quod neque iste soluta, numquam obcaecati vitae incidunt,
        id, quae totam repudiandae recusandae? Eveniet labore nam voluptas
        nulla! Sit, minus. Minus corporis excepturi incidunt ipsam officiis odit
        dolor, totam esse nam sit in consequuntur deleniti veniam quasi quos
        temporibus quam reiciendis, dolores fugit voluptates, mollitia possimus
        porro cumque. Tempore, molestias! Architecto laborum, voluptatum atque
        voluptatibus expedita nemo quas! Minus natus adipisci vel sed ad
        excepturi pariatur dolorem magnam possimus, rem voluptates molestiae
        earum deleniti maiores tempore reprehenderit illum odit facere.
      </p>
      <button>Apply Now</button>
    </div>
  );
}
