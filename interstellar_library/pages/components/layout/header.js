import Image from 'next/image';

export default function _Header() {
    
  return (
    <>
    
     
      <div
        style={{
          backgroundColor: '#000000',
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#FFF',
        }}
      >
        <div>
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={30}
            height={30}
          />
            <span className='logo' 
            style={{ fontSize: '28px', fontWeight: 'bold', paddingLeft: '15px', textAlign: 'center', alignItems: 'center' }}
            >Interstellar Library</span>
        </div>

        <div>
          <ul 
          style={{ listStyleType: 'none', padding: 0, margin: 0 }}
          >
            <li 
            style={{ display: 'inline-block', marginRight: '20px' }}
            ><a href="/"
            style={{ textDecoration: 'none', color: '#FFF' }}
            >Home</a></li>
            <li 
            style={{ display: 'inline-block', marginRight: '20px' }}
            ><a href="/" style={{ textDecoration: 'none', color: '#FFF' }}>About</a></li>
            <li 
            style={{ display: 'inline-block', marginRight: '20px' }}
            ><a href="/" 
            style={{ textDecoration: 'none', color: '#FFF' }}
            >Contact</a></li>
            <li 
            style={{ display: 'inline-block', marginRight: '20px' }}
            > <a href="/" 
            style={{ textDecoration: 'none', color: '#FFF' }}
            >Services</a></li>
            <li 
            style={{ display: 'inline-block', marginRight: '20px' }}
            > <a href="/login" 
            style={{ textDecoration: 'none', color: '#FFF' }}
            >Login</a></li>
            <li 
            style={{ display: 'inline-block', marginRight: '20px' }}
            > <a href="/" 
            style={{ textDecoration: 'none', color: '#FFF' }}
            >Signup</a></li>
          </ul>
        </div>
        </div>
     </>
  )

}
