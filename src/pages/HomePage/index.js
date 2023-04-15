import "./styles.scss";
import hero from "./images/hero.png";
import logo1 from "./images/logos/logo1.webp";
import logo2 from "./images/logos/logo2.webp";
import logo3 from "./images/logos/logo3.png";
import logo4 from "./images/logos/logo4.webp";
import cta from "./images/cta.jpg";
import thumbnail1 from "./images/thumbnail1.jpg";
import thumbnail2 from "./images/thumbnail2.jpg";
import thumbnail3 from "./images/thumbnail3.jpg";
import small from "./images/small.jpg";
import trend from "./images/trend.jpg";
import eco from "./images/eco.jpg";
import ContentCard from "../../components/ContentCard";
import { Button, Link } from "../../components/Button";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="hero">
        <img src={hero} alt="a kitchen with modern design" />
        <div>
          <h2>Decorate your life with wood</h2>
          <p>
            Don't be confusion about choosing home decoration.
            <br />
            We're presenting the Best Creative future.
          </p>
          <Button text="View in products →" href="/products" />
        </div>
      </div>
      <div className="certificates">
        <img src={logo1} alt="home canada certificate" />
        <img src={logo2} alt="home canada certificate 2" />
        <img src={logo3} alt="houzz certificate" />
        <img src={logo4} alt="point 2 home certificate" />
      </div>
      <div className="features">
        <ContentCard title="Well Considered Design" className="feature1">
          Great design is more than just making a space look good. We take the
          time to understand your unique needs and preferences.
          <Link text="Read More →" href=" " />
        </ContentCard>
        <ContentCard title="We create for you" className="feature2">
          We take a collaborative approach to our interior design services. From
          start to finish, we're dedicated to bringing your vision to life.
          <Link text="Read More →" href=" " />
        </ContentCard>
        <ContentCard title="Leave the details for us" className="feature3">
          The design process can be overwhelming. With us, you can enjoy the
          process, knowing that every detail is taken care of.
          <Link text="Read More →" href=" " />
        </ContentCard>
      </div>
      <div className="cta">
        <div className="left">
          <ContentCard
            title="Filling the home with the beautiful decorations"
            className="cta-card"
          >
            <p>
              At SpaceSavvy, we believe that decorating your home is about more
              than just filling it with pretty objects. We see it as an
              opportunity to create a space that's truly unique and reflective
              of your personal style.
              <br /> <br />
              Whether you're looking for a cozy and inviting atmosphere or a
              sleek and modern vibe, we can help you find the perfect
              decorations to bring your vision to life.
            </p>
            <p>
              Call <strong>123-456-7890</strong> and talk with our consultants.
            </p>

            <Button text="Read More → " href=" " />
          </ContentCard>
        </div>
        <div className="right">
          <img src={cta} alt="a corner of living room" />
          <div className="color-block"></div>
        </div>
      </div>
      <div className="how-it-works">
        <ContentCard title="How it works" className="HIW-explain">
          We take care of everything for you, from selecting the perfect
          furniture and decor to coordinating with contractors and managing the
          project timeline.
        </ContentCard>
        <div className="thumbnail-group">
          <div className="thumbnail">
            <img src={thumbnail1} alt="home office" />
            <span>1</span>
            <ContentCard title="Consultation" className="">
              Get to know you, your preferences, and your goals for the space.
              By the end of this meeting, we'll have a clear understanding of
              your vision and be able to provide you with a quote for our
              services.
            </ContentCard>
          </div>
          <div className="thumbnail">
            <img src={thumbnail2} alt="living room" />
            <span>2</span>
            <ContentCard title="Design Development" className="">
              Once we've agreed on the scope of the project, our team will
              create a custom design plan for your space. We'll work with you to
              refine the design until it's perfect, and then move on to the next
              phase.
            </ContentCard>
          </div>
          <div className="thumbnail">
            <img src={thumbnail3} alt="kitchen" />
            <span>3</span>
            <ContentCard title="Project Management" className="">
              With the design plan in place, we'll begin the project management
              phase. At the end of the process, you'll have a beautiful,
              functional, and personalized space that you'll love for years to
              come.
            </ContentCard>
          </div>
        </div>
      </div>
      <div className="pick-your-choice">
        <ContentCard title="Pick your choice">
          Personalize your space and make it truly your own with our Pick Your
          Choice selection. From unique accent pieces to customizable furniture,
          you're sure to find something that speaks to your individual style and
          needs.
        </ContentCard>
        <div className="video">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/BJeg2Kta2wY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ border: "0px" }}
          ></iframe>
        </div>
      </div>

      <div className="articles-news">
        <ContentCard title="Articles & News" className="AN-explain">
          Stay up to date with the latest trends and tips in interior design
          with our curated collection of news and articles. From expert advice
          to inspiring design ideas, we've got you covered.
        </ContentCard>
        <div className="thumbnail-group">
          <div className="thumbnail">
            <img src={small} alt="a small but cozy livingroom" />
            <a href=" ">Learn more</a>
            <ContentCard
              title="Small Space Solutions: How to Make the Most of Your Tiny Home"
              className=""
            >
              Living in a small home doesn't mean you have to sacrifice style or
              functionality. We'll share some tips about how to create a home
              that's both beautiful and practical, no matter how small it may
              be.
            </ContentCard>
          </div>
          <div className="thumbnail">
            <img src={trend} alt="livingroom with bold colors" />
            <a href=" ">Learn more</a>
            <ContentCard
              title="Design Trends 2023: What's Hot in Interior Design?"
              className=""
            >
              Are you curious about the latest interior design trends for 2023?
              You'll learn how to incorporate the latest design trends into your
              home and create a space that's fresh, modern, and on-trend.
            </ContentCard>
          </div>
          <div className="thumbnail">
            <img src={eco} alt="bedroom with lots of greens" />
            <a href=" ">Learn more</a>
            <ContentCard
              title="Sustainable Design: How to Create an Eco-Friendly Home"
              className=""
            >
              If you're passionate about sustainability and the environment, you
              can create an eco-friendly home that's both beautiful and
              functional.
            </ContentCard>
          </div>
        </div>
      </div>
      <div className="join">
        <ContentCard title="Wanna join the SpaceSavvy?" className="">
          Join us and get all offers from our newsletter!
        </ContentCard>
      </div>
    </div>
  );
}
