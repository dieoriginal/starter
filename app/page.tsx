import { Main, Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import DeniLogo from "@/public/denilogo.png";
import cyber from "@/public/cyber.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
          <ExampleJsx />
        </Container>
      </Section>
    </Main>
  );
}

const ExampleJsx = () => {
  return (
    <article className="prose-m-none">
      <article className="not-prose">
        <h1 className="text-4xl font-extrabold italic m-0 p-0 flex items-center gap-2">
        
            <Balancer>
              <Image src={DeniLogo} alt="Deni Logo" width={300} height={300} />
              <p className="text-4xl font-extrabold italic m-0 p-0">Frontend Developer</p>
            </Balancer>

        
            <div className="flex items-center gap-2 ml-auto mr-30">
              <Balancer>
                <Image src={cyber} alt="cyber" width={200} height={200} />
              </Balancer>
            </div>
         {/* Personal Info */}
        </h1>
      </article>
     
      
      <hr />
      {/* Programing Language */}
      <h2>Frameworks</h2>
      <p>
        This is an example paragraph to illustrate what an article section might
        look like in this context. You can add more content here to expand on
        the topic and provide more detailed information to your readers.
      </p>
      <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ul>
      <hr />
      <h2>Languages</h2>
      <p>
        This is an example paragraph to illustrate what an article section might
        look like in this context. You can add more content here to expand on
        the topic and provide more detailed information to your readers.
      </p>
      <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ul>
      <h3>Gear</h3>
      <p>
        Further explore the topic by discussing relevant points, providing
        insights, or sharing experiences that can engage the audience. An
        article is not just about listing information but also about
        storytelling and conveying a message that resonates with the readers.
      </p>
      <pre>
        <code>
          {`// This is an example code block
function exampleFunction() {
  console.log("This is a code snippet.");
}`}
        </code>
      </pre>
      <p>
        Lastly, you may want to conclude with a summary or a call-to-action that
        encourages readers to take the next steps, such as learning more about a
        subject or getting involved in a community discussion.
      </p>
      <blockquote>
        This is an example blockquote. It can be used to highlight important
        information or quotes from other sources.
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 6</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};
