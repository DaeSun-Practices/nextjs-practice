
export default function Home() {
  let name = 'SONG'
  let link = 'https://google.com'

  return (
    <div>
      

      <h1 className="title">대선 샵</h1>
      <p className="sub-title">powered by {name}</p>
      <a href={link} style={{color:'red', fontSize : '25px'}}> 링크 </a>
    </div>
  )
}
