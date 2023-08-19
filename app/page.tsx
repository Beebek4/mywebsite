import workdata from "./workdata";
import projectData from "./projectData";

export default function Home() {


  
  return (
    <div id="about">
      <nav className='sticky bg-white top-0 px-10 py-5 flex justify-between text-center z-10 border border-solid border-black'>
        
        <h1 className="font-bold max-sm:inline text-amber-900 px-2 py-2 m-0 text-l">
          Beebek Limbu
        </h1>

        <a className='text-amber-900 px-2 py-2 delay-100 transition ease-in-out hover:scale-110 hover:font-semibold max-md:hidden' href='#about'>.About</a>

        <a className='text-amber-900 px-2 py-2 delay-100 transition ease-in-out hover:scale-110 hover:font-semibold max-md:hidden' href='#experience'>
          .Experience
        </a>

        <a className='text-amber-900 px-2 py-2 delay-100 transition ease-in-out hover:scale-110 hover:font-semibold max-md:hidden' href='#projects'>
            .Projects
        </a>

        <a className='text-amber-900 px-2 py-2 delay-100 transition ease-in-out hover:scale-110 hover:font-semibold max-md:hidden' href='#contact'>
            .Contact
        </a>

        <a className=' bg-amber-900 text-white px-4 pt-2 rounded-md ml-4 transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 duration-300' href="/resume.pdf" target="_blank">Resume</a>
          
      </nav>

      <section className=" min-h-screen h-fit bg-red-300 p-10">

        <h2 className=" font-extrabold text-4xl pb-10 text-center justify-between">
          Software Developer
        </h2>

        <div className="flex max-sm:block lg:gap-40 md:gap-20 items-center justify-center">

          <div className="relative lg:h-96 lg:w-96 h-64 w-64 z-0 max-md:mx-auto max-sm:mb-10">
            <img src="/facepic.JPG" className="rounded-lg absolute inset-0 w-full h-full object-cover"/>
            <img src="/facepic2.JPG" className="rounded-lg absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 hover:opacity-100"/>
          </div>

          <aside className="max-md:mx-auto relative lg:h-96 lg:w-96 h-64 w-64 bg-white rounded-lg p-4">
            <p className=" p-5 text-center">
            As a Hong Kong-born Nepali raised in the United Kingdom, I am currently pursuing a Computer Science degree at Queen Mary University. Coming from a humble background to now attending a top Russell Group university, I have incorporated all experiences from my past to become the enthusiastic, creative, and curious individual I am today.
            </p>
          </aside>

        </div>

        

      </section>

      <div className=" h-20 bg-red-300" id="experience"></div>

      <section className=" min-h-screen h-fit bg-cyan-200 p-12">
        <h2 className=" font-extrabold text-4xl py-2 text-center justify-between">
            Work Experiences
        </h2>

        <div className='flex flex-col gap-10 p-8 lg:flex-row lg:flex-wrap'>
          
        {workdata.map((experience, index) => (
          <div key={index} className="mb-8 text-center shadow-2xl my-4 rounded-lg basis-1/3 flex-1 p-4">
            <h3>{experience.title}</h3>
            <p>{experience.company}</p>
            <p>{experience.duration}</p>
            <p>{experience.location}</p>
            
            <p>Skills: {experience.skills.join(', ')}</p>
          </div>
        ))}
        </div>

      </section>
      
      <div className=" h-20 bg-cyan-200" id="projects"></div>
      <section className=" min-h-screen h-fit bg-yellow-100 p-12">
        <h2 className=" font-extrabold text-4xl py-2 text-center justify-between">
            My Projects
        </h2>

        <div className="flex flex-col gap-10 p-8 lg:flex-row lg:flex-wrap">
          {projectData.map((project, index) => (
            <div key={index} className="text-center shadow-xl my-4 rounded-lg basis-1/3 flex-1">
              <h2>{project.name}</h2>
              <p>{project.desc}</p>
              <ul>
                {project.tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
              
              <div className="lg:w-96 lg:h-72 md:w-80 md:h-64 w-52 h-44 relative m-auto py-4 mb-4">
                <img className="rounded-3xl border-solid border-2 border-gray-600" src={project.imgUrl} alt={project.imgAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              </div>
  
            </div>
          ))}
        </div>

      
      </section>

      <div className=" h-20 bg-yellow-100" id="contact"></div>
      <section className=" h-fit p-12 bg-green-200 text-center justify-between">
        <h2 className=" font-extrabold text-4xl py-2 text-center justify-between">
            Get In Touch
        </h2>
      <p className="text-lg mb-6">Feel free to reach out to me for any inquiries or opportunities.</p>
      <div className="top-0 px-10 py-5">
        <a className="bg-green-600 text-white px-6 py-4 rounded-md ml-4 hover:bg-green-800 duration-100" href="mailto:limbubeebek@gmail.com">limbubeebek@gmail.com</a>
      </div>

      </section>
      
    </div>
  )
}
