import { Badge } from "@/components/ui/badge";
import skillsList from "./constants/skillsList";

const Skills = () => (
  <section className="container mx-auto md:mt-20">
    <div className="font-roboto text-xl mb-6">Skills</div>
    <div className="flex sm:justify-between flex-wrap sm:w-1/2 w-full ">
      {skillsList.map((skill) => (
        <Badge className="bg-primary text-secondary p-2" variant="outline">
          {skill}
        </Badge>
      ))}
    </div>
  </section>
);

export default Skills;
