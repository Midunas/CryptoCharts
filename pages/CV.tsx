import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <>
      <NavBar />
      <div className='container text-white'>
        <div>
          <h1 className='text-7xl'>Welcome</h1>
          <div className='w-2/5'>I am a motivated, punctual and creative person.
            I take my responsibilities seriously and I am constantly on the lookout
            for ways to increase the quality of my work. Socializing with colleagues comes
            naturally to me and I always come to work with a smile.
          </div>
        </div>
        <div>
          <h1 className='text-5xl'>Projects</h1>
        </div>
      </div>
    </>
  )
}