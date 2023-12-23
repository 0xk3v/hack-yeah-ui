import { TProject } from "@/data/mock";
import { Link } from "react-router-dom";

const ProjectItem = ({ props }: { props: TProject }) => {
  return (
    <Link to={`project/${props.id}`}>
      <div className="shadow-sm bg-white w-full md:w-56">
        <div className="w-full">
          <img
            src={props.imageUrl}
            className="w-full h-52 object-cover"
            alt={props.title}
          />
        </div>
        <div className="p-6">{props.title}...</div>
      </div>
    </Link>
  );
};

export default ProjectItem;
