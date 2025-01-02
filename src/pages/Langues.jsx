import CircularProgressBar from '../components/CircularProgressBar';

const Langues = () => {
    const languagesTab = [
        { id: 1, name: "Français", percentage: 100 },
        { id: 2, name: "Anglais", percentage: 70 },
        { id: 3, name: "Arabic", percentage: 100 }
    ]
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
        <div>
            <div className="container text-center m-5 col-10 mx-auto">
                <h2 className="my-5 text-center">Niveaux de Langues</h2>
                <div className="d-flex justify-content-around flex-wrap my-5 pb-5">
                    {languagesTab.map((tab) => (
                    <div key={tab.id} className="circle-container">
                        <CircularProgressBar targetPercentage={tab.percentage} cercleName={tab.name} />  
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
export default Langues;