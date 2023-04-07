import "./styles.scss";
import team from "./images/team.jpg";
import sarah from "./images/sarah.jpg";
import john from "./images/john.jpg";
import lisa from "./images/lisa.jpg";
import samantha from "./images/samantha.jpg";
import micheal from "./images/micheal.jpg";
import emily from "./images/emily.jpg";
import {
  ImageTextBlock,
  TextImageBlock,
} from "../../components/TextImageBlock";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="slogan">
        <div>
          <h2>We bring style and functionality to every space</h2>
        </div>
        <div>
          <p>
            Ad dolore deserunt ullamco ut consectetur pariatur ipsum enim et.
            Velit nulla ad eiusmod minim consectetur reprehenderit laborum ipsum
            est tempor labore tempor.
          </p>
        </div>
      </div>
      <div className="team-pic">
        <img src={team} alt="SpaceSavvy Team" />
      </div>

      <div className="history">
        <h3>The Evolution of SpaceSavvy: Our Story</h3>
        <p>
          <strong>
            At SpaceSavvy, we've been creating beautiful and functional interior
            design solutions for more than a decade.{" "}
          </strong>
          <br />
          Our company was founded in 2010 by a team of passionate designers who
          wanted to make high-quality design services accessible to everyone.
          Since then, we've helped hundreds of clients create their dream homes,
          from cozy apartments to sprawling estates. We're proud of our
          reputation for excellence in design and customer service, and we're
          excited to continue growing and evolving in the years to come.
        </p>
      </div>
      <hr />
      <div className="mission">
        <h3>Transforming Spaces, Transforming Lives: Our Mission</h3>
        <p>
          <strong>
            Our mission at SpaceSavvy is simple: to help our clients create
            beautiful and functional living spaces that reflect their unique
            personalities and lifestyles.
          </strong>
          <br /> We believe that good design should be accessible to everyone,
          regardless of their budget or location. That's why we offer a range of
          interior design services to meet all your needs, from small decor
          updates to full-scale renovations. We're committed to using
          sustainable materials and practices whenever possible, and we're
          always looking for new ways to reduce our environmental impact.
        </p>
      </div>
      <div className="team">
        <div>
          <div className="meet">
            <h3>
              Meet Our <br />
              Amazing Team
            </h3>
            <hr />
          </div>

          <div className="bio">
            <TextImageBlock
              title="Sarah | CEO"
              src={sarah}
              alt="CEO Sarah"
              className="sarah"
            >
              Sarah Williams is the CEO of SpaceSavvy and has been with the
              company since its founding. <br />
              <br />
              With over 20 years of experience in the interior design industry,
              Sarah is a seasoned professional who brings a wealth of knowledge
              and expertise to her role. <br />
              <br />
              Under her leadership, SpaceSavvy has grown into a successful and
              highly respected design firm, known for its innovative designs and
              exceptional customer service.
            </TextImageBlock>
            <ImageTextBlock
              title="John | Co-founder / Head of Design Team"
              src={john}
              alt="Co-founder / Head of Design Team John"
              className="john"
            >
              John Smith is the co-founder of SpaceSavvy and serves as the head
              of the design team. <br />
              <br />
              With over 15 years of experience in the interior design industry,
              John is a highly skilled designer who has a passion for creating
              beautiful and functional living spaces.
              <br />
              <br />
              He works closely with clients to understand their needs and
              preferences and is responsible for overseeing all aspects of the
              design process.
            </ImageTextBlock>
            <TextImageBlock
              title="Lisa | CMO"
              src={lisa}
              alt="CMO Lisa"
              className="lisa"
            >
              Lisa Brown is the Chief Marketing Officer at SpaceSavvy and brings
              over a decade of experience in marketing and advertising to the
              company.
              <br />
              <br /> With a keen eye for detail and a deep understanding of
              consumer behavior, Lisa is responsible for developing and
              implementing marketing strategies that drive growth and increase
              brand awareness. <br />
              <br />
              She is passionate about connecting with customers and building
              lasting relationships with them.
            </TextImageBlock>
            <ImageTextBlock
              title="Samantha | Designer"
              src={samantha}
              alt="Designer Samantha"
              className="samantha"
            >
              Samantha Lee is a talented interior designer at SpaceSavvy with a
              passion for creating beautiful and functional living spaces.{" "}
              <br />
              <br />
              With a degree in interior design and over 8 years of experience in
              the industry, Samantha has developed a keen eye for detail and a
              deep understanding of design principles. <br />
              <br />
              She works closely with clients to understand their needs and
              preferences and is dedicated to creating spaces that reflect their
              unique personalities and lifestyles.
            </ImageTextBlock>
            <TextImageBlock
              title="Michael | Designer"
              src={micheal}
              alt="Designer Micheal"
              className="micheal"
            >
              Michael Chen is a skilled designer at SpaceSavvy with a background
              in architecture and a passion for creating innovative design
              solutions. <br />
              <br />
              With over 10 years of experience in the industry, Michael brings a
              unique perspective to each project and is known for his ability to
              transform even the most challenging spaces.
              <br />
              <br /> He works closely with clients to develop designs that are
              both beautiful and functional.
            </TextImageBlock>
            <ImageTextBlock
              title="Emily | Designer"
              src={emily}
              alt="Designer Emily"
              className="emily"
            >
              Emily Nguyen is a talented interior designer at SpaceSavvy who
              specializes in creating contemporary and minimalist living spaces.
              <br />
              <br />
              With a degree in interior design and over 5 years of experience in
              the industry, Emily has a keen eye for detail and a passion for
              creating spaces that are both stylish and functional. <br />
              <br />
              She works closely with clients to understand their design
              preferences and is dedicated to creating spaces that reflect their
              unique personalities and lifestyles.
            </ImageTextBlock>
          </div>
        </div>
      </div>
    </div>
  );
}
