import ProgressBar from '../components/ProgressBar'

const Skills = () => {

    const skillsTab = [
        { id: 1, name: "HTML && CSS", percentage: 90 },
        { id: 2, name: "JavaScript", percentage: 70 },
        { id: 3, name: "NodeJS Express", percentage: 60 },
        { id: 4, name: "MongoDB && MySQL", percentage: 50 },
        { id: 5, name: "Administration Reseaux Windows", percentage: 70 },
        { id: 6, name: "Windows Mac Linux", percentage: 90 }
    ]

    return (
        <div id="skills" className="m-5 col-10 mx-auto">
            <h2 className="my-5 text-center">COMPETENCES</h2>
            {skillsTab.map((bar) => (
                <div key={bar.id} style={{ marginBottom: '20px' }}>
                    <span className='skil'>{bar.name}</span>
                    <div className="progress-container">
                        <ProgressBar percentage={bar.percentage} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;