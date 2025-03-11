
import NavbarPage from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import PropTypes from 'prop-types';

const Layout = ({children}) => {
  return (
    <>
      <NavbarPage/>
      {children}
      <Footer/>
    </>
  )
}
// Define prop types
Layout.propTypes = {
    children: PropTypes.node.isRequired, // Validate children as a node
  };
export default Layout
