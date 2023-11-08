import Image from "next/image";

export function LoginSidebarImage() {
  return (
    <div className="hidden 2xl:block lg:w-[480px] bg-black left-0 absolute h-screen-navbar -z-10">
      <Image
        src={"/assets/Rectangle5.png"}
        alt="Hands on"
        className="object-cover h-full w-full"
        fill
      />
    </div>
  );
}
