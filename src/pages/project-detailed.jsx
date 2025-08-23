import React from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import ProjectDetails2Header from "../components/Project-details2-header/project-details2-header";
import ProjectIntroduction from "../components/Project-introduction/project-introduction";
import ProjectGallery from "../components/Project-gallery/project-gallery";
import ProjectDescription from "../components/Project-description/project-description";
import ProjectVideo from "../components/Project-video/project-video";
import NextProject from "../components/Next-project/next-project";
import DarkTheme from "../layouts/Dark";
import ProjectDataArray from "../data/project-details2.json";

const ProjectDetails2Dark = () => {
  const router = useRouter();
  const { id } = router.query;
  
  // Find the project with the matching ID from query, or default to first project
  const ProjectData = id 
    ? ProjectDataArray.find(project => project.id.toString() === id.toString()) || ProjectDataArray[0]
    : ProjectDataArray[0];

  // Get next project - either from the data file or calculate it
  let nextProjectData;
  
  if (ProjectData.nextProject) {
    // Use predefined next project from data file
    nextProjectData = ProjectData.nextProject;
  } else {
    // Calculate next project if not defined in data
    const currentIndex = ProjectDataArray.findIndex(project => project.id === ProjectData.id);
    const nextIndex = (currentIndex + 1) % ProjectDataArray.length;
    nextProjectData = ProjectDataArray[nextIndex];
  }

  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="wrapper">
        <ProjectDetails2Header projectHeaderData={ProjectData} />
        <ProjectIntroduction projectIntroductionData={ProjectData.intro} />
        <ProjectGallery gallery={ProjectData.gallery} />
        <ProjectDescription projectDescriptionData={ProjectData.description} />
        <ProjectVideo projectVideoDate={ProjectData} />
        <NextProject nextProject={nextProjectData} />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
