import Image from "next/image";
import { styled } from "@/lib/stitches.config";
import { url } from "inspector";

const links = [
  {
    title: "Youtube",
    description: "3D Speed Art Videos",
    url: "https://www.youtube.com/@Ple_Studio1",
  },
  {
    title: "Behance",
    description: "Design work",
    url: "https://www.behance.net/bloodben",
  },
  {
    title: "Portfolio",
    description: "Design and Experience",
    url: "https://triwarut.my.canva.site/ple-triwarut-portfolio",
  },
];

const Main = styled ('main', {
  backgroundColor : 'Black' ,
  padding : '10px' ,
})

export default function Home() {
  return (
    <Main>
      <div>Ple Triwarut CFX Artist / Rigging / 3D Generalist.</div>
      <div>
        <a href="#youtube">Youtube</a>
        <a href="#twitter">Twitter</a>
        <a href="#Instagram">Instagram</a>
      </div>
      <div>
        {links.map((link) => (
          <a key={link.url} href={link.url}>
            <span>{link.title}</span>
            <span>{link.description}</span>
          </a>
        ))}
      </div>
    </Main>
  );
}
