export default function Nav() {
  return (
    <div>
    <main className="desktop">
      <nav id="home">

        <ul className="nav">
          <li className="logo">
            
            <a href="#">
                #uzma
          
          
          </a>
          </li>
          <li className="hideOnMobile"><a href="/">Home</a></li>
          <li className="hideOnMobile"><a href="/skills">Skills</a></li>
          <li className="hideOnMobile"><a href="/about">About</a></li>
          <li className="hideOnMobile"><a href="/contact">Contact</a></li>
         
        </ul>
      </nav>
      </main>

            {/* for  mobile screen */}
            <center>
            <div className="mobile-nav">
            <div className="mobile-logo">
              <h1>#uzma</h1>
              
                    
                </div>

      
            <div className="mobile-link" >
              <ul >
                <li ><a href="/">Home</a></li>
                <li ><a href="skills">Skills</a></li>
                <li ><a href="about">About</a></li>
                <li ><a href="contact">Contact</a></li>
               </ul>
            </div>
        </div>
        </center>
        </div>
  
  );
}