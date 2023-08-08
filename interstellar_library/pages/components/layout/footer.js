export default function _Footer(props) {
    const currentYear = new Date().getFullYear();
    return (
        <footer style={footerStyle}>
            <div style={contentWrapperStyle}>
                <div style={columnStyle}>
                    <h3 style={headingStyle}>Interstellar Library</h3>
                    <p style={contactInfoStyle}>123 Library Street, Galaxy</p>
                    <p style={contactInfoStyle}>Phone: 123-456-7890</p>
                    <p style={contactInfoStyle}>Email: info@interstellarlibrary.com</p>
                </div>
                <div style={columnStyle}>
                    <h3 style={headingStyle}>Links</h3>
                    <ul style={linkListStyle}>
                        {/* <li><a style={linkStyle} href="/">Home</a></li>
                        <li><a style={linkStyle} href="/about">About</a></li> */}
                        <li><a style={linkStyle} href="/contact">Contact</a></li>
                        <li><a style={linkStyle} href="/services">Services</a></li>
                    </ul>
                </div>
            </div>
            <p style={copyrightStyle}>&copy; {currentYear} Interstellar Library</p>
        </footer>
    );
}

//  Javascript Declarations
const footerStyle = {
    backgroundColor: '#F8F8F8',
    color: '#555',
    fontSize: '13px',
    padding: '5px 0',
    textAlign: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
};

const contentWrapperStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100px', // Set a minimum height to push content upwards
};

const columnStyle = {
    flex: '1',
    marginBottom: '20px',
};

const headingStyle = {
    margin: '0',
    marginBottom: '20px',
    fontWeight: 'bold',
};

const contactInfoStyle = {
    margin: '0',
};

const linkListStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
};

const linkStyle = {
    color: '#555',
    textDecoration: 'none',
};

const copyrightStyle = {
    marginTop: '6px',
};
