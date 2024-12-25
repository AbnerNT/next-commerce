import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>here is our app home</h1>
      <Image src="/assets/images/logo.svg" alt="logo" width={200} height={200}/>
    </>
  );
}
