import { Button } from "@/components/ui/button";
import { projects } from "@/data/mock";
import { MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const SingleProject = () => {
  const params = useParams();

  const filteredProject = projects.filter(
    (project) => project.id === parseInt(params.id as unknown as string),
  );

  return (
    <div>
      <div className="w-full">
        <img
          src={filteredProject[0].imageUrl}
          className="w-full h-52 md:h-64 object-cover"
          alt={filteredProject[0].title}
        />
      </div>
      <div className="flex flex-col w-full p-4 bg-white shadow-sm">
        <h1 className="text-lg font-semibold">{filteredProject[0].title}</h1>
        <div className="flex flex-col justify-center my-4">
          <div className="flex items-center text-blue-800 gap-x-3 my-2">
            <MapPin />
            {filteredProject[0].voivodeship}
          </div>
          <div>
            <strong>Beneficiary: </strong>
            {filteredProject[0].beneficiary}
          </div>
          <div className="flex flex-col justify-between my-2">
            <div className="flex flex-col">
              <div>
                <strong className="text-blue-800">Project value: </strong>
                {filteredProject[0].project_value}
              </div>
              <div>
                <strong className="text-blue-800">Co-Financing: </strong>
                {filteredProject[0].co_financing}
              </div>
            </div>
            <Link to={filteredProject[0].learn_more}>
              <Button variant="link">Learn more</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
