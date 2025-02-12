import '../styles/Landing.css'
export default function Landing() {
    return (
        <>
            <div className="landing">
                <div className="nav">
                    <div className="navigation">
                        <div className="logo">LOGO</div>
                        <div className="menu">
                            <ul>
                                <li>HOME</li>
                                <li>TOP</li>
                                <li>CONTACT</li>
                                <li>HELP</li>
                            </ul>
                        </div>
                    </div>
                    <div className="credidentials">
                        <ul>
                            <li><button className="login-btn">Login</button></li>
                            <li><button className="Signup-btn">SignUP</button></li>
                        </ul>
                    </div>
                </div>
                <div className="dialogue">
                    <div className="dialogue-content">
                        <h1>You Are At Right Place</h1>
                        <p>The place where you will get so many tech product at the same place at resonable cost. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, autem.</p>
                        <button className='explore'>Explore</button>
                    </div>
                </div>
            </div>
        </>
    )
}