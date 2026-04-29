export default function ContributionGraph(){
  const weeks=52
  const days=7
  const levels=["#161b22","#0e4429","#006d32","#26a641","#39d353"]

  const generateGrid=()=>{
    const grid=[]
    for(let w=0;w<weeks;w++){
      const week=[]
      for(let d=0;d<days;d++){
        const rand=Math.random()
        let level=0
        if(rand>0.7) level=1
        if(rand>0.8) level=2
        if(rand>0.88) level=3
        if(rand>0.94) level=4
        week.push(level)
      }
      grid.push(week)
    }
    return grid
  }

  const grid=generateGrid()
  const total=grid.flat().reduce((sum,l)=>sum+l*3,0)

  return(
    <div className="contribution-section">
      <h3 className="contribution-title">
        {total.toLocaleString()} contributions in the last year
      </h3>
      <div className="contribution-graph">
        {grid.map((week,wi)=>(
          <div key={wi} className="contribution-week">
            {week.map((level,di)=>(
              <div
                key={di}
                className="contribution-cell"
                style={{backgroundColor:levels[level]}}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="contribution-legend">
        <span className="contribution-legend-label">Less</span>
        {levels.map((color,i)=>(
          <div
            key={i}
            className="contribution-cell"
            style={{backgroundColor:color}}
          />
        ))}
        <span className="contribution-legend-label">More</span>
      </div>
    </div>
  )
}
