import { Facebook, Link, Linkedin, Slack } from "lucide-react";
import { Button } from "../ui/button";

export default function Share() {
  return (
    <div className="flex flex-col gap-5 text-left w-full md:w-[30%]">
      <h5 className="text-heading-xs text-white hidden md:block">
        Compartilhar
      </h5>
      <article className="flex flex-row md:flex-col md:w-full gap-2">
        <Button variant={"share"}>
          <Linkedin width={16} height={16} />
          <p className="text-body-sm  hidden md:block">Linkedin</p>
        </Button>
        <Button variant={"share"}>
          <Facebook width={16} height={16} />
          <p className="text-body-sm  hidden md:block">Facebook</p>
        </Button>
        <Button variant={"share"}>
          <Slack width={16} height={16} />
          <p className="text-body-sm  hidden md:block">Slack</p>
        </Button>
        <Button variant={"share"}>
          <Link width={16} height={16} />
          <p className="text-body-sm  hidden md:block">Copiar link</p>
        </Button>
      </article>
    </div>
  );
}
