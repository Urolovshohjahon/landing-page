import React from 'react';
import './Main.css';
import amazon from '../../images/amazon.png';
import airbab from '../../images/airbab.png';
import grab from '../../images/grab.png';
import facebook from '../../images/facebookj.png';
import netflix from '../../images/netflix.png';
import google from '../../images/google.png';
import { BsCalendar3 } from 'react-icons/bs';
import { RiBillFill } from 'react-icons/ri';
import { IoIosPeople } from 'react-icons/io';
import rec19 from '../../images/Rectangle 19.png';
import rec21 from '../../images/Rectangle 21.png';
import video from '../../images/confident-teacher-explaining-lesson-pupils 1.png';
import rec32 from '../../images/Rectangle 32.png';
import rec33 from '../../images/Rectangle 33.png';
import rec34 from '../../images/Rectangle 34.png';
import rec37 from '../../images/Rectangle 37.png';

import o2 from '../../images/image 7.png';
import { BsPlayCircle } from 'react-icons/bs';
import im12 from '../../images/image 12.png';
import Square from '../layout/square';
import italy from '../../images/image 13.png';
import { BsCheck2Circle } from 'react-icons/bs';
import { AiOutlineCloseCircle, AiFillStar } from 'react-icons/ai';
import { RiSendPlaneFill } from 'react-icons/ri';
import onedrive from '../../images/image 2.png';
import box from '../../images/image 3.png';
import googledrive from '../../images/image 5.png';
import T from '../../images/image 6.png';
import { FaArrowRight } from 'react-icons/fa';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import smile from '../../images/smiling-woman-with-afro-posing-pink-sweater 1.png';

function Section() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1500, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section>
      <div className='container'>
        <br /> <br /> <br />
        <div className='row'>
          <p className='trust'>Trusted by 5,000+ Companies Worldwide</p>
        </div>
        <br /> <br /> <br /> <br/>
        <div className='row '>
          <div className='col-lg-2 col-md-4 col-6 d-flex justify-content-center align-items-center'>
            <a href='#!'>
              <img src={google} alt='' />
            </a>
          </div>
          <div className='col-lg-2 col-md-4 col-6 d-flex justify-content-center align-items-center'>
            <a href='#!'>
              <img src={airbab} alt='' />
            </a>
          </div>
          <div className='col-lg-2 col-md-4 col-6 d-flex justify-content-center align-items-center'>
            <a href='#!'>
              <img src={grab} alt='' />
            </a>
          </div>
          <div className='col-lg-2 col-md-4 col-6 d-flex justify-content-center align-items-center'>
            <a href='#!'>
              <img src={amazon} alt='' />
            </a>
          </div>
          <div className='col-lg-2 col-md-4 col-6 d-flex justify-content-center align-items-center'>
            <a href='#!'>
              <img src={netflix} alt='' />
            </a>
          </div>
          <div className='col-lg-2 col-md-4 col-6 d-flex justify-content-center align-items-center'>
            <a href='#!'>
              <img src={facebook} alt='' />
            </a>
          </div>
        </div>
        <br /> <br /> <br />
        <br /> 
        <div className='row'>
          <div className='col-12 d-flex align-items-center flex-column '>
            <h3>
              All-In-One <span>Cloud Software.</span>{' '}
            </h3>
            <p>
              Skilline is one powerful online software suite that combines all
              the tools needed to run a successful school or office.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='sec_blok '>
              <div className='icon_billing'>
                <RiBillFill fontSize='50px' color='white' />
              </div>
              <h4>Online Billing, Invoicing, & Contracts</h4>
              <p className='billing'>
                Simple and secure control of your organization's financial and
                legal transactions. Send customized invoices and contracts
              </p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='sec_blok d-flex flex-column justify-content-end align-items-center'>
              <div className='icon_calendar'>
                <BsCalendar3 fontSize='50px' color='white' />
              </div>
              <h4>Online Billing, Invoicing, & Contracts</h4>
              <p className='billing'>
                Simple and secure control of your organization's financial and
                legal transactions. Send customized invoices and contracts
              </p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='sec_blok d-flex flex-column justify-content-end align-items-center'>
              <div className='icon_people'>
                <IoIosPeople fontSize='50px' color='white' />
              </div>
              <h4>Online Billing, Invoicing, & Contracts</h4>
              <p className='billing'>
                Simple and secure control of your organization's financial and
                legal transactions. Send customized invoices and contracts
              </p>
            </div>
          </div>
        </div>
        <br /> <br /> <br />
        <br /> 
        <div className='row'>
          <div className='col-12 d-flex align-items-center flex-column '>
            <h3>
              What is <span>Skilline?</span>{' '}
            </h3>
            <p className='what'>
              Skilline is a platform that allows educators to create online
              classes whereby they can store the course materials online; manage
              assignments, quizzes and exams; monitor due dates; grade results
              and provide students with feedback all in one place.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='introduction d-flex flex-column align-items-center justify-content-center'>
              <img src={rec19} alt='' />
              <div className='parda'></div>
              <h1>FOR INSTRUCTORS</h1>
              <button className='intro'>Start a class today</button>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='introduction d-flex flex-column align-items-center justify-content-center'>
              <img src={rec21} alt='' />
              <div className='parda'></div>
              <h1>FOR STUDENTS</h1>
              <button className='intro'>Enter a class code</button>
            </div>
          </div>
        </div>
        <div className='row d-flex justify-content-between'>
        <br /><br /><br />
          <div className='col-lg-6 d-flex position-relative flex-column align-items-start justify-content-between'>
            <div className='circle10'></div>
            <div className='circle5'></div>
            <h3 className='w500'>
              Everything you can do in a physical classroom,{' '}
              <span>you can do with Skilline</span>
            </h3>
            <p className='text-start'>
              Skilline's school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <a href='#!'>Learn more</a>
          </div>
          <br /><br /><br />
          <div className='col-lg-5 teacher-blok d-flex position-relative  align-items-center justify-content-center'>
            <div className='square138'></div>
            <div className='square231'></div>
            <img className='teacher' src={video} alt='' />
            <BsPlayCircle fontSize='60px' color='#23BDEE' />
          </div>
        </div>
        <br /> <br /> <br />
        <br /> 
        <div className='row'>
          <div className='col-12 d-flex flex-column justify-content-center align-items-center'>
            <h3>
              Our <span>Features</span>
            </h3>
            <p>
              This very extraordinary feature, can make learning activities more
              efficient
            </p>
          </div>
        </div>
        {/* <div className="row">
                    <div className="col-lg-7">
                        <div className="col-md-4">
                            <div className="caller">
                                    <img src={o1} alt="" />
                                    <div className="network"><GiNetworkBars/> <div className="operator_job">Instructor</div> Evenly Howard </div>
                                
                                <div className="phone">
                                    <button className="present">Present</button>
                                    <button className="calling"><AiTwotonePhone color="white" />Call</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <h3 className="w600">A <span>user interface</span> designed for the classroom</h3>
                        <p></p>
                    </div>
                </div> */}

        <div className='row'>
          <div className='col-lg-6 '>
          <br /> <br /> <br />
        <br /> 
            <h3 className='w600'>
              <span>Tools</span> For Teachers And Learners
            </h3>
            <p className='text-start'>
              Class has a dynamic set of teaching tools built to be deployed and
              used during class. Teachers can handout assignments in real-time
              for students to complete and submit.
            </p>
          </div>
          <div className='col-lg-6 position-relative'>
            <Square />
            <div className='circlegreen5'></div>
            <div className='circleblue5'></div>
            <div className='circleorange5'></div>
            <img style={{width:'100%'}} src={im12} alt='sd' />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='row'>
          <div className='col-lg-6 position-relative'>
            <div className='circleorange5'></div>
            <div className='circleindigo'></div>
            <div className='question'>
              <BsCheck2Circle color='#2DD38E' className='icon_true' />
              <AiOutlineCloseCircle color='#EE3175' className='icon_false' />
              <div className='number_question'>Question1</div>
              <p>True or false? This play takes place in Italy</p>
              <img src={italy} alt='' />
              <div className='sended d-flex justify-content-around align-items-center'>
                <RiSendPlaneFill className='sendicon' />
                <p className='send_msg'>Your message successfully sended</p>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
          <br /> <br /> <br />
        <br /> 
            <h3 className='w600'>
              Assessments, <span>Quizzes</span>, Tests
            </h3>
            <br /> <br />
            <p className='text-start'>
              Easily launch live assignments, quizzes, and tests. Student
              results are automatically entered in the online gradebook.
            </p>
          </div>
        </div>
        <br />
        <div className='row'>
          <div className='col-lg-6 '>
          <br /> <br /> <br />
        <br /> 
            <h3 className='w600'>
              <span>Class Management</span> Tools for Educators
            </h3>
            <p className='text-start'>
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </p>
          </div>
          <div className='col-lg-6'>
            <div className='gradebook'>
              <div className='star-round'>
                <AiFillStar className='big_star_icon' />
              </div>
              <div className='gradetop'>GradeBook</div>
              <div className='grademain '>
                <div className='rightman d-flex justify-content-between align-items-center'>
                  <div className='lenta'></div>
                  <img src={o2} alt='qwerty' />
                  <div className='score-lime'>98</div>
                </div>
                <div className='leftman d-flex justify-content-between align-items-center'>
                  <img src={o2} alt='qwerty' />
                  <div className='lenta'></div>
                  <div className='score'>75</div>
                </div>
                <div className='rightman2 d-flex justify-content-between align-items-center'>
                  <div className='lenta'></div>
                  <img src={o2} alt='qwerty' />
                  <div className='score-red'>66</div>
                </div>

                <div className='leftman2 d-flex justify-content-between align-items-center'>
                  <img src={o2} alt='qwerty' />
                  <div className='lenta'></div>
                  <div className='score'>75</div>
                </div>
                <button className='export'>Export</button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className='row'>
          <div className='col-12 d-flex justify-content-center align-items-center '>
            <button className='see-more-feature'>See more features</button>
          </div>
        </div>
<br /> <br /> <br />
        <br />
        <br />
        <br />
        <div className='row'>
          <div className='col-lg-6'>
            <div className='d-flex justify-content-around'>
              <img style={{width:'45%'}} src={onedrive} alt='' />
              <img style={{width:'45%'}} src={box} alt='' />
            </div>
            <div className='d-flex justify-content-around'>
              <img style={{width:'45%'}} src={googledrive} alt='' />
              <img style={{width:'45%'}} src={T} alt='' />
            </div>
          </div>
          <div className='col-lg-6 INTEGRATIONS d-flex flex-column justify-content-between align-items-start'>
            <div className='d-flex justify-content-around align-items-center'>
              <div className='line'></div>
              <h6>INTEGRATIONS</h6>
            </div>
            <h3 className='w600'>
              200+ educational tools and platform <span>integrations</span>
            </h3>
            <p className='text-start'>
              Schoology has every tool your classroom needs and comes
              pre-integrated with more than 200+ tools, student information
              systems (SIS), and education platforms.
            </p>
            <button className='see-more-feature'>See All Integrations</button>
           
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> 
        <br /> 
        <br /> 
        <div className='row'>
          <div className='col-lg-6 d-flex flex-column justify-content-between align-items-start'>
            <div className='d-flex justify-content-around align-items-center'>
              <div className='line'></div>
              <h6>INTEGRATIONS</h6>
            </div>
            <h3>What They Say?</h3>
            <p className='text-start'>
              Skilline has got more than 100k positive ratings from our users
              around the world.{' '}
            </p>
            <p className='text-start'>
              Some of the students and teachers were greatly helped by the
              Skilline.{' '}
            </p>
            <p className='text-start'>
              Are you too? Please give your assessment
            </p>
            <br />
            <button className='assessment'>
              See All Integrations
              <FaArrowRight className='arrow-icon' />
            </button>
            <br /> <br /> <br />
          </div>
          <div className='col-lg-6'>
            <Carousel
              responsive={responsive}
              autoPlay={false}
              autoPlaySpeed={3000}
              infinite={true}
              className='carousell'
            >
              <div className='toolpat'>
                <div>
                  <a
                    href='https://t.me/urolov_tuit'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={smile} alt='wq' />
                  </a>
                </div>
                <div className='gloria'>
                  <div className='gloria-left'></div>
                  <div className='gloria-text'>
                    <div className='d-flex'>
                      <p>
                        "Thank you so much for your help. It's exactly what I've
                        been looking for. You won't regret it. It really saves
                        me time and effort. Skilline is exactly what our
                        business has been lacking."
                      </p>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <p className='gloria-name'>Gloria Rose</p>
                      <div className='d-flex flex-column'>
                        <div className='stars d-flex'>
                          <AiFillStar color='gold' fontSize='25px' />
                          <AiFillStar color='gold' fontSize='25px' />
                          <AiFillStar color='gold' fontSize='25px' />
                          <AiFillStar color='gold' fontSize='25px' />
                          <AiFillStar color='gold' fontSize='25px' />
                        </div>
                        <p>12 reviews at Yelp </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='row'>
          <div className='col-12 d-flex flex-column justify-content-center align-items-center'>
            <h5>Lastest News and Resources</h5>
            <p>
              See the developments that have occurred to Skillines in the world
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='row'>
          <div className='col-xl-6 d-flex flex-column justify-content-around align-items-start'>
            <img src={rec32} alt='' className='big-news' />
            <br />
            <button className='news'>News</button>
            <br />
            <h6 className='end26'>
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </h6>
            <p className='text-start'>
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <a href='#!'>Read more</a>
          </div>
          <div className='col-xl-6 d-flex  flex-column '>
            <div className='news-card'>
              <div className='new-img'>
                <img src={rec33} alt='' />
                <button className='news'>News</button>
              </div>
              <div className='new-text'>
                <h6 className='end22'>
                  Class Technologies Inc. Closes $30 Million Series A Financing
                  to Meet High Demand
                </h6>
                <p className='text-start20'>
                  Class Technologies Inc., the company that created Class,...
                </p>
                <a href='#!'>Read more</a>
              </div>
            </div>
            <div className='news-card'>
              <div className='new-img'>
                <img src={rec34} alt='' />
                <button className='news'>News</button>
              </div>
              <div className='new-text'>
                <h6 className='end22'>
                  Class Technologies Inc. Closes $30 Million Series A Financing
                  to Meet High Demand
                </h6>
                <p className='text-start20'>
                  Class Technologies Inc., the company that created Class,...
                </p>
                <a href='#!'>Read more</a>
              </div>
            </div>
            <div className='news-card'>
              <div className='new-img'>
                <img src={rec37} alt='' />
                <button className='news'>News</button>
              </div>
              <div className='new-text'>
                <h6 className='end22'>
                  Class Technologies Inc. Closes $30 Million Series A Financing
                  to Meet High Demand
                </h6>
                <p className='text-start20'>
                  Class Technologies Inc., the company that created Class,...
                </p>
                <a href='#!'>Read more</a>
              </div>
            </div>
          </div>
        </div>
        <br /> <br /> <br />
        <br /> 
      </div>
    </section>
  );
}

export default Section;
