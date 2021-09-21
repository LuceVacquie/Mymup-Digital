import Carousel from "text-carousel-react";
import React from "react";

//COMPONENTS
import Testimonial from "./Testimonials";

const testimonials = [
    {
        component: (
            <Testimonial
                text={
                    <p>
                        &ldquo;I know we've a lot to do to improve our
                        children’s mental health services but today I heard
                        excellent feedback about our work with @MYMUPUK! This
                        service consistently receives good feedback from
                        parents, hospital, schools, services and young
                        people.&rdquo;
                    </p>
                }
                author="Sasha Bhat"
                role="Head of Commissioning for Mental Health,
            Bradford CCG"
            />
        ),
    },
    {
        component: (
            <Testimonial
                text={
                    <p>
                        &ldquo;I am supportive of the work MYMUP is involved
                        with relating to digital transformation of services
                        within mental health and community services in Bradford.
                        MYMUP has a shared vision with commissioners, partners
                        and voluntary sector to develop services that are
                        accessible virtually and support efforts for self-help
                        and prevention which will help deliver system change and
                        improvement for the health sector in the
                        District.&rdquo;
                    </p>
                }
                author="Farhan Rafiq"
                role="Head of Business & Service Development,
            Bradford District Care Trust"
            />
        ),
    },
    {
        component: (
            <Testimonial
                text={
                    <p>
                        &ldquo;We have been working with the MYMUP team to
                        design a new database for our organisation as our
                        current system is not fit for purpose. This will involve
                        transitioning data over as well as making us compatible
                        to submit data to the MHSDS. Our experience is that
                        MYMUP have a good understanding of the differing needs
                        we face as a smaller voluntary sector organisation
                        trying to submit data to a statutory body. We have had
                        previous frustrations speaking directly with NHS Digital
                        who have limited understanding of our service and
                        processes and it has been really helpful and supportive
                        to have MYMUP as the advocate on our behalf. We find the
                        team to be very approachable, quick to respond and
                        highly supportive.&rdquo;
                    </p>
                }
                author="Ruth Hirst"
                role="Operations Co-ordinator, The Market
            Place"
            />
        ),
    },
    {
        component: (
            <Testimonial
                text={
                    <p>
                        &ldquo;As a database which has been purpose-built with
                        mental health services in mind, MYMUP gives us potential
                        to really showcase and evidence the depth and quality of
                        what we do. It can allow us to collate information
                        showing the detail of our trauma and attachment focussed
                        therapy approach in a way that we have never previously
                        had before.&rdquo;
                    </p>
                }
                author="Catherine Tatman"
                role="Head of Commissioning for Mental Health,
            Bradford CCG"
            />
        ),
    },
    {
        component: (
            <Testimonial
                text={
                    <iframe
                        src="https://player.vimeo.com/video/385658741?h=23eec9ee94"
                        width="640"
                        height="360"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        className="mx-auto"
                    ></iframe>
                }
                author="Claire Hopkins"
                role="Director, Impaqt North"
            />
        ),
    },
];

const TestimonialSlider = () => {
    return (
        <div className="bg-white w-full relative top-0 px-4 py-28 sm:px-6 lg:px-8">
            <h2 className="text-center text-5xl text-darkGrey mb-12">
                Testimonials
            </h2>

            <Carousel items={testimonials} />
        </div>
    );
};

export default TestimonialSlider;
