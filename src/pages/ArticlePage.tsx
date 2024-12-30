import { useParams } from "react-router-dom"
import { articles } from "../data/data";
import { TypeAnimation } from "react-type-animation";
import useStore from "../data/store";
import Container from "../components/Container";

const ArticlePage = () => {
  const { index } = useParams();
  const { menuOpen } = useStore();

  const project = articles[Number(index)];

  return (
    <section className=" h-fit mb-8 pt-20 flex gap-4 justify-center items-center" id="hero">

      <Container menuOpen={menuOpen}>
        <div className=" bg-black absolute left-8 -top-3.5 text-2xl z-20 pl-4 pr-2">
          <TypeAnimation
            sequence={[
              `${project.title}:~`,
            ]}
            speed={50}
            cursor={false}
          />
        </div>

        <div className=" flex flex-col gap-12 pt-6">
          {/* <h3 className=" text-3xl flex items-start gap-5"><span className=" text-4xl">$</span>Welcome to my portfolio</h3> */}

          <h1 className=" text-3xl tracking-wider flex items-start">
            <TypeAnimation
              sequence={[
                `${project.description}:~`,
                1000,
              ]}
              speed={60}
              cursor={false}
            />
          </h1>

          <h2 className=" text-xl flex flex-col items-start gap-16 text-green-600/95">
            {project.longerDesc.map((line, index) => (
              <div className=" flex items-start gap-5" key={index}>
                <span className=" text-3xl text-green-400">$</span>
                <p>{line.split("\n").map((line, index) => <span key={index}>{line}<br /></span>)}</p>
              </div>
            ))}
          </h2>
        </div>
      </Container>

    </section>
  )
}

export default ArticlePage