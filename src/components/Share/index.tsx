import { Button } from "../ui/button";
import { shareButtons } from "./data";
import { useRouter } from "next/router";

export default function Share() {

    const router = useRouter()
  return (
    <div className="flex flex-col gap-5 text-left w-full md:w-[30%]">
      <h5 className="text-heading-xs text-white hidden md:block">
        Compartilhar
      </h5>
      <article className="flex flex-row w-full justify-between md:flex-col md:w-full gap-2">
        {shareButtons.map((button, key) => (
          <Button key={key} variant={"share"} onClick={() => router.push(button.url)}>
            {button.icon}
            <p className="hidden md:block">{button.text}</p>
          </Button>
        ))}
      </article>
    </div>
  );
}
