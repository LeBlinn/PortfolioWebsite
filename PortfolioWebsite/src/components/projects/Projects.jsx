import styles from '../../css/projects/Projects.module.css';

import SingularProject from './SingularProject.jsx';
import ViewMore from './ViewMore.jsx';


function Projects(){
    
    return (
        <div>
            <div className={styles.mainDiv}>
                <div className={styles.title}>Latest Projects</div>
                <div className={styles.titleLine}></div>
                <div className={styles.spacer}></div>
                <div className={styles.projectsContainer}>
                    {/*I need to add functionality for more projects, but this will do for now*/}
                    <SingularProject />
                    <SingularProject />
                    <SingularProject />
                    <SingularProject />
                </div>
            </div>
            <ViewMore /> {/*I added an extra div due to lazyness, definitely not best practice*/}
        </div>
    )
}

export default Projects;