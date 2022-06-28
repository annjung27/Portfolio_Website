import React from 'react';
import './Portfolio.css';
import { Button, Carousel} from 'react-bootstrap';


function Portfolio() {
  return (
    <section id="portfolio">
        <p className='category-title'>02 Portfolio</p>

{/* ---------------Project 1 ------------------------------------------ */}
        <div className='project-item'>
          <div className='project-info'>
            <h3 className='title'>Alexander Realty</h3>
            <p className='type'>Personal Project</p>
            <p>React.js | JavaScript | HTML | CSS | Responsive Web Design</p>
            <p className='detail'>
              Alexander Realty is a landing page for the real estate company website built with React.js.
            </p>

            <a href='https://alexander-realestate.netlify.app' target='_blank' rel='noreferrer'><Button className='view-button'>View Website</Button></a>
            <a href='https://github.com/annjung27/React_RealEstate_Website' target='_blank' rel='noreferrer'><Button className='view-button'>View GitHub</Button></a>            
          </div>
          
          <div className='carousel-wrapper'>
            <Carousel className='carousel'>
              <Carousel.Item interval={1000} className='carouselItem'>
                <img
                  className="d-block w-100"
                  src="https://user-images.githubusercontent.com/91655432/171335249-85b12455-39d0-4581-8a11-9de58108f706.jpg"
                  alt="First slide"
                />                
              </Carousel.Item>
              <Carousel.Item interval={500} className='carouselItem'>
                <img
                  className="d-block w-100"
                  src="https://user-images.githubusercontent.com/91655432/171335185-cdd26dc6-5545-47ee-ad12-6e6ff20a44e6.jpg"
                  alt="Second slide"
                />
                
              </Carousel.Item>
              <Carousel.Item className='carouselItem'>
                <img
                  className="d-block w-100"
                  src="https://user-images.githubusercontent.com/91655432/171335218-e47ec90a-a42f-4043-9fe1-95a2d106c198.jpg"
                  alt="Third slide"
                />
                
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

{/* ---------------Project 2 ------------------------------------------ */}   
        <div className='project-item'>
          <div className='project-info'>
            <h3 className='title'>Something Learned Everyday</h3>
            <p className='type'>Personal Project</p>
            <p>Java | Spring MVC | Spring Boot | JSP | MySQL | RTF </p>
            <p className='detail'>
              Something Learned Everyday is a note taking blog for users to create and save notes about their daily learning and share them with other users.
              Users can create and save contents to database, read, view, retrieve them from the database, and edit and delete contents.
            </p>

            
            <a href='https://github.com/annjung27/Java_NoteBlog_SLE' target='_blank' rel='noreferrer'><Button className='view-button'>View GitHub</Button></a>            
          </div>
          
          <div className='carousel-wrapper'>
            <Carousel className='carousel'>
              <Carousel.Item interval={1000} className='carouselItem'>
                <img
                  className="d-block w-100"
                  src="https://user-images.githubusercontent.com/91655432/166606056-89c4cc52-dbca-4acb-9bc8-182b92daa27b.jpg"
                  alt="First slide"
                />                
              </Carousel.Item>
              <Carousel.Item interval={500} className='carouselItem'>
                <img
                  className="d-block w-100"
                  src="https://user-images.githubusercontent.com/91655432/166606272-34a67594-e583-4039-b123-40f876583e19.jpg"
                  alt="Second slide"
                />
                
              </Carousel.Item>
              <Carousel.Item className='carouselItem'>
                <img
                  className="d-block w-100"
                  src="https://user-images.githubusercontent.com/91655432/166606368-97251bae-cc20-4945-a0fd-f2815268de92.jpg"
                  alt='Third slide'
                />
                
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

{/* ---------------Project 3 ------------------------------------------ */}   
        <div className='project-item'>
          <div className='project-info'>
            <h3 className='title'>Yoga Together</h3>
            <p className='type'>Personal Project</p>
            <p>React.js | HTML | CSS | Node.js | Express | Mongoose | MongoDB | Bootstrap</p>
            <p className='detail'>
              Yoga Together is a e-commers website for virtual yoga classes built with MERN stack.
              Users can view list of virtual yoga classes and teachers' profile, and add them into 'My Class' for enrollment. Enrolled students can communicate with other students about their daily life and yoga story by creating, viewing, editing, deleting posts in Community Dashboard page.
              Also, users can view outdoor yoga events information in Event page. 
            </p>

            <a href='http://54.176.93.190/home' target='_blank' rel='noreferrer'><Button className='view-button'>View Website</Button></a>
            <a href='https://github.com/annjung27/MERN_Project_Deployment' target='_blank' rel='noreferrer'><Button className='view-button'>View GitHub</Button></a>            
          </div>
          
          <div className='carousel-wrapper'>
            <Carousel className='carousel'>
              <Carousel.Item interval={1000} className='carouselItem'>
                <img
                  className="d-block w-100"
                  src="https://user-images.githubusercontent.com/91655432/167048221-d8ec608f-7e57-456a-9277-cd3b66fb7998.jpg"
                  alt="First slide"
                />                
              </Carousel.Item>
              <Carousel.Item interval={500} className='carouselItem'>
                <img
                  className="d-block w-100"
                  src="https://user-images.githubusercontent.com/91655432/167048257-59e79de0-deda-48d8-b596-be6c9d285591.jpg" 
                  alt="Second slide"
                />
                
              </Carousel.Item>
              <Carousel.Item className='carouselItem'>
                <img
                  className="d-block w-100"
                  src="https://user-images.githubusercontent.com/91655432/167048464-08911b0e-57f9-471f-83ea-a098d422b265.jpg"
                  alt="Third slide"
                />
                
              </Carousel.Item>
            </Carousel>
          </div>
        </div>   
      

    </section>
  )
}

export default Portfolio